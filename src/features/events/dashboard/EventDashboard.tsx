import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useAppSelector } from "../../../app/store/store";
import { useEffect} from "react";
import { actions } from "../eventSlice";
import { useFireStore } from "../../../app/hooks/firestore/useFirestore";
import LoadingComponent from "../../../app/layout/LoadingComponents";


// export default function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}: Props) {
export default function EventDashboard() {
const {data: events,status} = useAppSelector(state => state.events);
const {loadCollection} = useFireStore('events');

useEffect(()=> {
  loadCollection(actions)
}, [loadCollection])

 
if (status==='loading') return <LoadingComponent/>

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
      <Grid.Column width={10}>
       <EventList   events={events}/>
      </Grid.Column>
      <Grid.Column width={6}>
        <h2> Filter</h2>
      </Grid.Column>
    </Grid>
  )
}