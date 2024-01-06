// to add a new event ,to update an existing event and to delete 
import { createSlice } from "@reduxjs/toolkit"
import { sampleData } from "../../app/api/sampleData"
import { AppEvent } from "../../app/types/event"


type State ={
    events:AppEvent[]

}
// Intital state with Type of state
const initialState: State = {
    events: sampleData

}

export const eventSlice = createSlice({
    name:'events', 
    // name will show in Redux dev tools
    initialState,
    reducers:{
        createEvent: (state,action) => {
            // take state and action as parameters
            state.events.push(action.payload);
            // We can mutate stated using the redux toolkit(push) action.payload into our event
        },
        updateEvent: (state,action) => {
            state.events[state.events.findIndex(evt => evt.id === action.payload.id)]=action.payload
            // Using mutating Array function
        },
        deleteEvent:(state,action) =>{
            state.events.splice(state.events.findIndex(evt => evt.id === action.payload), 1)
            // Can remove 1 item
        }
    }
})

export const {createEvent, updateEvent,deleteEvent}=eventSlice.actions;