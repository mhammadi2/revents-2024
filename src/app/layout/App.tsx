
import { Container } from "semantic-ui-react"
import EventDashboard from "../../features/events/dashboard/EventDashboard"
import NavBar from "./NavBar"
import { useState } from "react"


function App() {
  
  const [formOpen, setFormOpen] = useState(false);
  return (
    // Added fragment instead of div for the parent <div>
    <>
    {/* Got single parent Fragment and two siblings */}
    <NavBar setFormOpen={setFormOpen}/>
    <Container className="main">

    <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
    </Container>
     
    </>
  )
}

export default App
