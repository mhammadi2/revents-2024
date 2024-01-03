import { Item, Icon,List,Button,
    ItemGroup, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem() {
  return (
    <SegmentGroup>
        <Segment>
            <ItemGroup>
                <Item>
                    <Item.Image  size='tiny' circular src='/user.png'/>
                    <Item.Content>
                        <Item.Header>Event title</Item.Header>
                        <Item.Description>
                            Hosted by Muhammad
                        </Item.Description>
                    </Item.Content>
                </Item>
            </ItemGroup>
        </Segment>
        <span>
            <Icon name='clock'/> Date
            <Icon name='marker'/> Venue
        </span>
        <Segment secondary>
            <List horizontal>
                <EventListAttendee/>
                <EventListAttendee/>
                <EventListAttendee/>
            </List>
        </Segment>
        <Segment clearing>
            <span> Description of the event </span>
            <Button color='teal' floated='right' content='View' />

        </Segment>
    </SegmentGroup>
  )
}