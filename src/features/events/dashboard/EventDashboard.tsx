import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { AppEvent } from "../../../app/types/event";
import { useEffect, useState } from "react";



type Props ={
  formOpen:boolean
  setFormOpen: (value:boolean) => void;
  // selectEvent: (event: AppEvent | null) => void
  // selectedEvent: AppEvent | null
}

// export default function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}: Props) {
export default function EventDashboard({formOpen, setFormOpen}: Props) {
  const [events, setEvents] = useState<AppEvent[]>([])
  // console.log(events)
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);


useEffect(()=> {
 setEvents(sampleData);
}, [])

function addEvent(event: AppEvent){
  setEvents(prevState => {
    return [...prevState,event]
  })
}

function handleSelectEvent(event: AppEvent) {
  setSelectedEvent(event);
  setFormOpen(true);
}


function updateEvent(updatedEvent: AppEvent) {
  setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt));
  selectEvent(null);
  setFormOpen(false);
}
function deleteEvent(eventId: string) {
  setEvents(events.filter(evt => evt.id !== eventId));
}

  return (
    <Grid>
      <Grid.Column width={10}>
       <EventList  events={events} 
       selectEvent={handleSelectEvent}
       />
      </Grid.Column>
      <Grid.Column width={6}>
        {/* if formOpen is true then Event form visible  */}
        {formOpen && 
        <EventForm 
        setFormOpen={setFormOpen} 
        addEvent={addEvent}
        selectedEvent={selectedEvent}
        />}
      </Grid.Column>
    </Grid>
  )
}