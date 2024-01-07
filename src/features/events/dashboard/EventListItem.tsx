import { Item, Icon,List,Button,
    ItemGroup, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { AppEvent } from "../../../app/types/event";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/store/store";
import { deleteEvent } from "../eventSlice";

type Props ={
    event: AppEvent
    
  }

export default function EventListItem({event}: Props) {
    const dispatch = useAppDispatch(); 
    // Using Hook from Redux
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
            <Button onClick= {()=>dispatch(deleteEvent(event.id))} color='red' floated='right' content='Delete' />
            <Button as = {Link} to = {`/events/${event.id}`} color='teal' floated='right' content='View' />

        </Segment>
    </SegmentGroup>
  )
}