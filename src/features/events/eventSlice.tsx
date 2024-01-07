// to add a new event ,to update an existing event and to delete 
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { sampleData } from "../../app/api/sampleData"
import { AppEvent } from "../../app/types/event";
import {Timestamp} from 'firebase/firestore';


type State ={
    events:AppEvent[]

}
// Intital state with Type of state
const initialState: State = {
    // events: sampleData
    events: []

}

export const eventSlice = createSlice({
    name:'events', 
    // name will show in Redux dev tools
    initialState,
    reducers:{
        setEvents: {
            reducer: (state,action: PayloadAction<AppEvent[]>)=>{
            state.events = action.payload
        },
        prepare: (events: any) => {
            const mapped = events.map((e:any)  => {
                //   return {...e, date:(e.date as Timestamp).toDate().toDateString()}
                  return {...e, date:(e.date as Timestamp).toDate().toISOString()}

            });
            return {payload:mapped}

            }
        },

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

export const {createEvent, updateEvent,deleteEvent,setEvents}=eventSlice.actions;