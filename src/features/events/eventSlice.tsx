// to add a new event ,to update an existing event and to delete 
import { PayloadAction} from "@reduxjs/toolkit";
// import { sampleData } from "../../app/api/sampleData"
import { AppEvent } from "../../app/types/event";

import { GenericActions, GenericState, createGenericSlice } from "../../app/store/genericSlice";
import { auth } from "../../app/config/firebase";
import { Timestamp } from "firebase/firestore";


type State ={
    // events:AppEvent[]
    data:AppEvent[]

}
// Intital state with Type of state
const initialState: State = {
    data: []

}

// export const eventSlice = createSlice({
export const eventSlice = createGenericSlice({
    name:'events', 
    // name will show in Redux dev tools
    // initialState,
    initialState: initialState as GenericState<AppEvent[]>,
    reducers:{
        success: {
            reducer: (state,action: PayloadAction<AppEvent[]>)=>{
            state.data = action.payload
            state.status = 'finished'
        },
        prepare: (events: any) => {
            let eventArray: AppEvent[] = [];
            Array.isArray(events) ? eventArray = events : eventArray.push(events)
            const mapped = eventArray.map((e:any)  => {
                //   return {...e, date:(e.date as Timestamp).toDate().toDateString()}
                console.log(e) 
                  return {
                    ...e, 
                    date: (e.date as Timestamp).toDate().toISOString(),
                    isHost: auth.currentUser?.uid === e.hostUid,
                    isGoing: e.attendeeIds.includes(auth.currentUser?.uid)    
                }

             });
            return {payload:mapped}
            }
        },

        // createEvent: (state,action) => {
        //     // take state and action as parameters
        //     state.events.push(action.payload);
        //     // We can mutate stated using the redux toolkit(push) action.payload into our event
        // },
        // updateEvent: (state,action) => {
        //     state.events[state.events.findIndex(evt => evt.id === action.payload.id)]=action.payload
        //     // Using mutating Array function
        // },
        // deleteEvent:(state,action) =>{
        //     state.events.splice(state.events.findIndex(evt => evt.id === action.payload), 1)
        //     // Can remove 1 item
        // }
    }
})
export const actions = eventSlice.actions as GenericActions<AppEvent[]> 


// export const {createEvent, updateEvent,deleteEvent,setEvents}=eventSlice.actions;
// export const {setEvents}=eventSlice.actions;
