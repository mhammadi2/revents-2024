
import { Container } from "semantic-ui-react"
import EventDashboard from "../../features/events/dashboard/EventDashboard"
import NavBar from "./NavBar"
import { useState } from "react"
import { AppEvent } from "../types/event";


function App() {
  
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  function handleSelectEvent(event: AppEvent | null) {
    setSelectedEvent(event);
    setFormOpen(true);
  }
  // following funtion for wwhen we open our form fo that we can clear the selected events.
  function handleCreateFormOpen(){
    setSelectedEvent(null);
    setFormOpen(true)
  }

  return (
    // Added fragment instead of div for the parent <div>
    <>
    {/* Got single parent Fragment and two siblings */}
    {/* <NavBar setFormOpen={setFormOpen}/> */}
    <NavBar setFormOpen={handleCreateFormOpen}/>
    <Container className="main">

    <EventDashboard 
    formOpen={formOpen} 
    setFormOpen={setFormOpen}
    
    selectedEvent={selectedEvent}
    selectEvent={handleSelectEvent}
    />
    </Container>
     
    </>
  )
}

export default App
