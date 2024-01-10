// export type User = {
    // to avoid confilt with the same name of user.
export type AppUser = {
    email: string | null
    photoURL: string | null
    uid?: string
    displayName : string | null
    providerId: string | null
}