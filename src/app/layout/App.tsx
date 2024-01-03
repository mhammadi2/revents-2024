
import { Container } from "semantic-ui-react"
import EventDashboard from "../../features/events/dashboard/EventDashboard"
import NavBar from "./NavBar"


function App() {
  

  return (
    // Added fragment instead of div for the parent <div>
    <>
    {/* Got single parent Fragment and two siblings */}
    <NavBar/>
    <Container className="main">

    <EventDashboard/>
    </Container>
     
    </>
  )
}

export default App
