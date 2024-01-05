import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";

import { sampleData } from "../../../app/api/sampleData";
import { AppEvent } from "../../../app/types/event";
import { useEffect, useState } from "react";


// export default function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}: Props) {
export default function EventDashboard() {
const [events, setEvents] = useState<AppEvent[]>([]);
useEffect(()=> {
 setEvents(sampleData);
}, [])

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