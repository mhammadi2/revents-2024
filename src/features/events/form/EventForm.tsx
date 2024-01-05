import { Form, Button, Header, Segment } from "semantic-ui-react";
import { useState } from "react";
// import { createId } from "@paralleldrive/cuid2";


export default function EventForm() {
    const initialValues =  {
        title:'',
        category:'',
        description:'',
        city:'',
        venue:'',
        date:''
    }

    const [values, setValues] = useState(initialValues);

    function onSubmit(){
        console.log(values)
        
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    }

  return (
    <Segment clearing>
        <Header content={'Create Event'}/>
        <Form onSubmit={onSubmit}>
            <Form.Field>
                <input 
                type="text" 
                placeholder='Event title' 
                value={values.title}
                name='title'
                onChange={e =>handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input 
                type="text" 
                placeholder='Category'
                value={values.category}
                name='category'
                onChange={e =>handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input type="text" 
                placeholder='Description'
                value={values.description}
                name='description'
                onChange={e =>handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input 
                type="text" 
                placeholder='City'
                value={values.city}
                name='city'
                onChange={e =>handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input 
                type="text" 
                placeholder='Venue'
                value={values.venue}
                name='venue'
                onChange={e =>handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input type="text" 
                placeholder='Date'
                value={values.date}
                name='date'
                onChange={e =>handleInputChange(e)}
                />
            </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button type='button' floated='right'  content='Cancel' />
        </Form>

    </Segment>
  )
}