export interface User {
    _id:any;
    name:string,
    email:string,
}

export interface Profile {
    name:string,
    email:string,
    image?:string,
}

export interface UserState {
    allUser:User[],
    profile:Profile[]
} 