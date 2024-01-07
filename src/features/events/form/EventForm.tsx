import { Form, Button, Header, Segment } from "semantic-ui-react";
// import { ChangeEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
// import { createEvent, updateEvent } from "../eventSlice";
// import { createId } from "@paralleldrive/cuid2";
import { Controller, useForm, FieldValues } from "react-hook-form";
import { categoryOptions } from "./categoryOptions";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { createId } from "@paralleldrive/cuid2";
import { createEvent, updateEvent } from "../eventSlice";
// import { createId } from "@paralleldrive/cuid2";


export default function EventForm() {
    const {register,handleSubmit, control, setValue, formState: {errors, isValid, isSubmitting}} = useForm(
        {
            mode: 'onTouched'
        }
    );
    // const {id} = useParams();
    let {id} = useParams();
    const event = useAppSelector(state => state.events.events.find(e => e.id ===id));
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    // const initialValues = event ?? {
    //     title:'',
    //     category:'',
    //     description:'',
    //     city:'',
    //     venue:'',
    //     date:''
    // }
    // Go to event or Set an Empty values

    // const [values, setValues] = useState(initialValues);

    function onSubmit(data:FieldValues){
            // console.log(data);
        id = id ?? createId()
        event
            // ? dispatch(updateEvent({...event, ...values}))
            // // : dispatch(createEvent({...values, id:createId(), hostedBy:'', attendees: [],hostPhotoURL: ''})) problem with createId
            // : dispatch(createEvent({...values, id, hostedBy:'', attendees: [],hostPhotoURL: ''}))
            ? dispatch(updateEvent({ ...event, ...data, date: data.date.toString()}))
            : dispatch(createEvent({ ...data, id, hostedBy: 'bob', attendees: [], hostPhotoURL: '', date: data.date.toString()}))
        navigate(`/events/${id}`);
       
        
    }

    // function handleInputChange(e: ChangeEvent<HTMLInputElement>){
    //     const {name, value} = e.target;
    //     setValues({...values, [name]:value})
    // }

  return (
    <Segment clearing>
        <Header content='Event Details' sub color='teal'/>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input
                placeholder='Event title' 
                defaultValue={event?.title || ''}
                {...register('title', {required:true})}
                error={errors.title && 'Title is required'}
                />
            <Controller
                name='category'
                control={control}
                rules={{ required: 'Category is required'}}
                defaultValue={event?.category}
                render={({field}) => (
                    <Form.Select
                        options={categoryOptions}
                        placeholder='Category'
                        clearable
                        // defaultValue={event?.category || ''}
                        {...field}
                        onChange={(_, d) => setValue('category', d.value, {shouldValidate:true})}
                        error={errors.category && errors.category.message}
                />
                )}
            />

            {/* <Form.Select
                options={categoryOptions}
                placeholder='Category'
                defaultValue={event?.category || ''}
                {...register('category', {required: 'Category is required'})}
                error={errors.category && errors.category.message}
                /> */}
            <Form.TextArea
                placeholder='Description'
                defaultValue={event?.description || ''}
                {...register('description', {required: 'Description  is required'})}
                error = {errors.description && errors.description.message}
                />

            <Header sub content='Location details' color='teal'/>
             <Form.Input
                placeholder='City'
                defaultValue={event?.city || ''}
                {...register('city', {required: 'city  is required'})}
                error = {errors.city && errors.city.message}/>

            <Form.Input
                placeholder='Venue'
                defaultValue={event?.venue || ''}
                {...register('venue', {required: 'Venue  is required'})}
                error = {errors.venue && errors.venue.message}
                />
            <Form.Field>
                <Controller 
                    name='date'
                    control={control}
                    rules ={{required:'Date is required'}}
                    defaultValue={event && new Date(event.date) || null}
                    render={({field}) => (
                        <DatePicker 
                            selected={field.value}
                            onChange={value => setValue('date', value, {shouldValidate: true})}
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMM d, yyyy h:mm aa'
                            placeholderText='Event date and time'
                            />
                            )}
                />
            </Form.Field>
            {/* <Form.Input
                type= 'date'
                placeholder='Date'
                defaultValue={event?.date || ''}
                {...register('date', {required:'Date is required'})}
                error = {errors.date && errors.date.message}
                />
         */}
            {/* <Button 
            loading={isSubmitting}
            disabled={!isValid}
            type='submit' floated='right' positive content='Submit' />
            <Button disabled={isSubmitting} as={Link} to='/events' type='button' floated='right'  content='Cancel' /> */}
             <Button
                    loading={isSubmitting}
                    disabled={!isValid}
                    type='submit' floated='right' positive content='Submit' />
                <Button disabled={isSubmitting} as={Link} to='/events' type='button' floated='right' content='Cancel' />
        </Form>

    </Segment>
  )
}