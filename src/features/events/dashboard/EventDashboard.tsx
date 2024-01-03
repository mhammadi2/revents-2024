import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { AppEvent } from "../../../app/types/event";
import { useEffect, useState } from "react";



type Props ={
  formOpen:boolean
  setFormOpen: (value:boolean) => void;
}

export default function EventDashboard({formOpen, setFormOpen}: Props) {
  const [events,setEvents] = useState<AppEvent[]>([])
useEffect(()=> {
 setEvents(sampleData);
}, [])

  return (
    <Grid>
      <Grid.Column width={10}>
       <EventList  events={sampleData}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {/* if formOpen is true then Event form visible  */}
        {formOpen && 
        <EventForm setFormOpen={setFormOpen}/>}
      </Grid.Column>
    </Grid>
  )
}