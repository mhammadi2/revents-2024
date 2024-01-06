import { Form, Button, Header, Segment } from "semantic-ui-react";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { createEvent, updateEvent } from "../eventSlice";
import { createId } from "@paralleldrive/cuid2";
import { useForm } from "react-hook-form";
// import { createId } from "@paralleldrive/cuid2";


export default function EventForm() {
    const {register,handleSubmit} = useForm();
    // const {id} = useParams();
    let {id} = useParams();
    const event = useAppSelector(state => state.events.events.find(e => e.id ===id));
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const initialValues = event ?? {
        title:'',
        category:'',
        description:'',
        city:'',
        venue:'',
        date:''
    }
    // Go to event or Set an Empty values

    // const [values, setValues] = useState(initialValues);

    function onSubmit(data:FieldValues){
            console.log(data);
        // id = id ?? createId()
        // event
        //     ? dispatch(updateEvent({...event, ...values}))
        //     // : dispatch(createEvent({...values, id:createId(), hostedBy:'', attendees: [],hostPhotoURL: ''})) problem with createId
        //     : dispatch(createEvent({...values, id, hostedBy:'', attendees: [],hostPhotoURL: ''}))
        // navigate(`/events/${id}`);
        // console.log(values)
        
    }

    // function handleInputChange(e: ChangeEvent<HTMLInputElement>){
    //     const {name, value} = e.target;
    //     setValues({...values, [name]:value})
    // }

  return (
    <Segment clearing>
        <Header content={event ? 'Update event' : 'Create Event'}/>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input
                placeholder='Event title' 
                defaultValue={event?.title || ''}
                {...register('title')}
                />
            <Form.Input
                placeholder='Category'
                defaultValue={event?.category || ''}
                {...register('category')}
                />
            <Form.Input
                placeholder='Description'
                defaultValue={event?.description || ''}
                {...register('description')}
                />
             <Form.Input
                placeholder='City'
                defaultValue={event?.city || ''}
                {...register('city')}/>
            <Form.Input
                placeholder='Venue'
                defaultValue={event?.venue || ''}
                {...register('venue')}/>
                <Form.Input
                type= 'date'
                placeholder='Date'
                defaultValue={event?.date || ''}
                {...register('date')}/>
        
                <Button type='submit' floated='right' positive content='Submit' />
                <Button as={Link} to='/events' type='button' floated='right'  content='Cancel' />
        </Form>

    </Segment>
  )
}