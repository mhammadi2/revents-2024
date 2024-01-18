export type AppEvent ={
    id: string
    title: string
    date : string
    category: string
    description : string
    city: string
    venue: string
    hostUid:string
    // hostUid allow us to use this to compare it to the attendee ID to see if they are the host of 
    // an  event
    hostedBy: string
    hostPhotoURL : string
    isCancelled : boolean
    attendees: Attendee[]
    attendeeIds:string[] 
    isHost?:boolean
    isGoing?:boolean

}

export type Attendee ={
    id: string
    // name:string
    displayName:string
    photoURL:string
}