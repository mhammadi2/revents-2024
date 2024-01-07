import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { useEffect } from "react";
import { QuerySnapshot, collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../app/config/firebase";
import { AppEvent } from "../../../app/types/event";
import { setEvents } from "../eventSlice";

// import { sampleData } from "../../../app/api/sampleData";
// import { AppEvent } from "../../../app/types/event";
// import { useEffect, useState } from "react";


// export default function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}: Props) {
export default function EventDashboard() {
// const [events, setEvents] = useState<AppEvent[]>([]);
// turn off the local state 

const {events} = useAppSelector(state => state.events)
// after we have the events, then we need to dispatch to our store
const dispatch = useAppDispatch();

useEffect(()=>{
  const q = query(collection(db,'events'));
  // listening data from firestore by flowwing code snitppet
  const unsubscribe =onSnapshot(q, {
//  querySnapshot is returned by onSnapshot method as below  
    next: querySnapshot =>{
      // define a variable constant as evts with emty array with type AppEvent
      const evts: AppEvent[] =[];
      querySnapshot.forEach(doc => {
        evts.push({id: doc.id, ...doc.data()} as AppEvent)
      })
      // we are going to pass in the events into the method
      dispatch(setEvents(evts));
    },
    error: err => console.log(err),
    complete : ()=> console.log('nevr will see this!')
  });
    return () => unsubscribe()
    // Effectively unsubscribing and no longer listening to our document of this collection 

},[dispatch])
// we do have to specify [dispatch]  for what this useEffect depends on 
// },[])
// Empty array at the end of useeffect make sure run once only


// useEffect(()=> {
//  setEvents(sampleData);
// }, [])
// Remove useeffect as we are getting this information from our store 

  return (
    <Grid>
      <Grid.Column width={10}>
       <EventList   events={events}/>
      </Grid.Column>
      <Grid.Column width={6}>
        <h2> Filter</h2>
      </Grid.Column>
    </Grid>
  )
}