import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";
import { useParams } from "react-router-dom";
import {  useAppSelector } from "../../../app/store/store";

import { useEffect } from 'react';
import LoadingComponent from "../../../app/layout/LoadingComponents";



import { actions } from "../eventSlice";
import { useFireStore } from "../../../app/hooks/firestore/useFirestore";

export default function EventDetailedPage() {
  const {id} = useParams();
  // Using useParam hook from  React Router Dom
  const event = useAppSelector(state => state.events.data.find(e => e.id ===id));
  const {status}  = useAppSelector(state => state.events)
  //Select some of states from our store
  // const event = useAppSelector(state => state.events.data.find(e => e.id === id));
  // const dispatch = useAppDispatch();
  // const [loading, setLoading] = useState(true);
  const {loadDocument} = useFireStore('events');



  useEffect(() => {
    if (!id) return;
    loadDocument(id,actions)
  }, [id, loadDocument]);
  // const unsubscribe = onSnapshot(doc(db, 'events', id), {
  //   next: doc => {
  //       dispatch(actions.success({id: doc.id, ...doc.data()} as any));
  //       setLoading(false);
  //   },
  //   error: err => {
  //     console.log(err);
  //     toast.error(err.message);
  //     setLoading(false);
  //   }
  // })
  // return () => unsubscribe()

  if (status === 'loading') return <LoadingComponent/>
  if (!event) return <h2> event not found</h2>

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event}/>
        <EventDetailedInfo event={event}/>
        <EventDetailedChat/>
        
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar/>
      </Grid.Column>
    </Grid>
  )
}