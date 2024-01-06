import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import { useAppSelector } from "../../../app/store";

// import { sampleData } from "../../../app/api/sampleData";
// import { AppEvent } from "../../../app/types/event";
// import { useEffect, useState } from "react";


// export default function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}: Props) {
export default function EventDashboard() {
// const [events, setEvents] = useState<AppEvent[]>([]);
// turn off the local state 

const {events} = useAppSelector(state => state.events)
// 


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