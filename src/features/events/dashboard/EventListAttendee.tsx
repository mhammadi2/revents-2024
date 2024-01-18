import { Link } from "react-router-dom"
import { Image, List } from "semantic-ui-react"


type Props={
  attendee: Attendee
}
export default function EventListAttendee({attendee}: Props) {
  return (
    <> 
    
    <List.Item as={Link} to={`/profiles/${attendee.id}`}>
        <Image size="mini" circular src={attendee.photoURL}/>
    </List.Item>
    </>
  )
}