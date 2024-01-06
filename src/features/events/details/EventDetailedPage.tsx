import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/store";

export default function EventDetailedPage() {
  const {id} = useParams();
  // Using useParam hook from  React Router Dom
  const event = useAppSelector(state => state.events.events.find(e => e.id ===id));
  //Select some of states from our store

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