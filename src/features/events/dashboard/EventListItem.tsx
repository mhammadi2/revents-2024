import { Item, Icon,List,Button,
    ItemGroup, Segment, SegmentGroup, Label } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { AppEvent } from "../../../app/types/event";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { deleteDoc, doc } from "firebase/firestore";
// import { db } from "../../../app/config/firebase";
// import { toast } from "react-toastify";
// import { useFireStore } from "../../../app/hooks/firestore/useFirestore";

type Props ={
    event: AppEvent
    
  }

export default function EventListItem({event}: Props) {
    // const dispatch = useAppDispatch(); 
    // Using Hook from Redux
    // const [loading, setLoading] = useState(false);

    // const {remove} =useFireStore('events')

    // async function removeEvent() {
        // wont take any param as we have got the event ID inside our list and we will use setloading
        // setLoading(true);
        // try {
        //     await deleteDoc(doc(db, 'events', event.id));
        //     // setLoading(false);
            
        // } catch (error:any) {
        //     console.log(error);
        //     toast.error(error.message);
        //     // setLoading(false)  
        // } finally {
        //     setLoading(false);
        // }
    // }

  return (
    <SegmentGroup>
        <Segment>
            <ItemGroup>
                <Item>
                    <Item.Image  size='tiny' circular src={event.hostPhotoURL}/>
                    <Item.Content>
                        <Item.Header>{event.title}</Item.Header>
                        <Item.Description>
                            Hosted by {event.hostedBy}
                        </Item.Description>
                        {event.isCancelled && (
                <Label 
                  style={{top: '-40px'}}
                  ribbon='right'
                  color='red'
                  content='This event has been cancelled'
                />
              )}
                    </Item.Content>
                </Item>
            </ItemGroup>
        </Segment>
        <span>
            <Icon name='clock'/> {event.date}
            <Icon name='marker'/> {event.venue}
        </span>
        <Segment secondary>
            <List horizontal>
                {event.attendees.map((attendee) =>

                <EventListAttendee  key= {attendee.id} attendee={attendee}/>
                )}
                
                
            </List>
        </Segment>
        <Segment clearing>
            <span> {event.description} </span>
            {/* <Button loading={loading} onClick= {removeEvent} color='red' floated='right' content='Delete' /> */}
            {/* <Button  onClick= {()=> remove(event.id)} color='red' floated='right' content='Delete' /> */}
            <Button as = {Link} to = {`/events/${event.id}`} color='teal' floated='right' content='View' />

        </Segment>
    </SegmentGroup>
  )
}