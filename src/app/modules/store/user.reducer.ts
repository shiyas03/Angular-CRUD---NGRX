import { createReducer, on } from "@ngrx/store";
import { Profile, User } from "./user";
import { fetchUserAPISuccess, fetchUserProfileAPISuccess } from "./user.action";

export const initalState: User[] = []

const _userReducer = createReducer(
    initalState,
    on(fetchUserAPISuccess, (_state, { allUser }) => {
        return Object.values(allUser[0])
    })
)

export function userReducer(state: any, action: any) {
    return _userReducer(state, action);
}

export const profileinitial: Profile[] = []

const _profileReducer = createReducer(
    profileinitial,
    on(fetchUserProfileAPISuccess, (_state, { profile }) => {
        return [...Object.values(profile)]
    })
)

export function profileReducer(state: any, action: any) {
    return _profileReducer(state, action)
}