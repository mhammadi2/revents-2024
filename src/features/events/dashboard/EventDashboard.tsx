import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useAppSelector } from "../../../app/store/store";
import { useEffect, useRef, useState} from "react";
import { actions } from "../eventSlice";
import { useFireStore } from "../../../app/hooks/firestore/useFirestore";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import EventFilters from "./EventFilters";
import { query } from "firebase/firestore";
import EventListItemPlaceholder from "./EventListItemPlaceHolder";


// export default function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}: Props) {
export default function EventDashboard() {
const contextRef = useRef(null);
const {data: events, status} = useAppSelector(state => state.events);
const {loadCollection} = useFireStore('events');
const [query, setQuery] = useState<QueryOptions[]>([
  { attribute: 'date', operator: '>=', value: new Date() }
])

useEffect(()=> {
//   loadCollection(actions, )
// }, [loadCollection])
loadCollection(actions, {
  queries: query
})
}, [loadCollection, query])


 
// if (status==='loading') return <LoadingComponent/>

// Using local state to do loading
// const [loading, setLoading] = useState(true)

// useEffect(()=>{
//   const q = query(collection(db,'events'));
//   // listening data from firestore by flowwing code snitppet
//   const unsubscribe =onSnapshot(q, {
// //  querySnapshot is returned by onSnapshot method as below  
//     next: querySnapshot =>{
//       // define a variable constant as evts with emty array with type AppEvent
//       const evts: AppEvent[] =[];
//       querySnapshot.forEach(doc => {
//         evts.push({id: doc.id, ...doc.data()} as AppEvent)
//       })
//       // we are going to pass in the events into the method
//       // dispatch(setEvents(evts));
//       dispatch(actions.success(evts));
//       setLoading(false)
//     },
//     // error: err => console.log(err),
//     error: err => {
//       console.log(err);
//       setLoading(false)
//     },
//     complete : ()=> console.log('never will see this!')
//   });

//     return () => unsubscribe()
//     // Effectively unsubscribing and no longer listening to our document of this collection 

// },[dispatch])
// // we do have to specify [dispatch]  for what this useEffect depends on 
// // },[])
// // Empty array at the end of useeffect make sure run once only


// useEffect(()=> {
//  setEvents(sampleData);
// }, [])
// Remove useeffect as we are getting this information from our store 

  return (
    <Grid>
      {/* <Grid.Column width={10}>
       <EventList   events={events}/>
      </Grid.Column> */}

      <Grid.Column width={10} ref={contextRef}>
        {status === 'loading' ? (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        ) : (
          <EventList events={events} />
        )}
      </Grid.Column>
      <Grid.Column width={6}>
        {/* <h2> Filter</h2> */}
        <div className='ui fixed top sticky' style={{top: 98, width: 405}}>
          <EventFilters setQuery={setQuery} />///
          {/* <EventFilters/> */}
        </div>
      </Grid.Column>
    </Grid>
  )
  }