import { createAction, props } from "@ngrx/store";
import { User, Profile } from "./user";


export const fetchUserAPI = createAction(
    "[User API] Fetch User API"
)

export const fetchUserAPISuccess = createAction(
    "[User API] Fetch User API Success",
    props<{ allUser: User[] }>()
)

export const fetchUserProfileAPI = createAction(
    '[Profile API] User Profile API'
)
export const fetchUserProfileAPISuccess = createAction(
    '[Profile API] User Profile API Success',
    props<{ profile: Profile[] }>()
)
