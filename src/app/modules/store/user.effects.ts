import { Injectable } from "@angular/core";
import { ofType, Actions, createEffect } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { fetchUserAPI, fetchUserAPISuccess, fetchUserProfileAPI, fetchUserProfileAPISuccess } from "./user.action";
import { map, switchMap, tap } from "rxjs";


@Injectable()
export class userEffects {
    constructor(private actions$: Actions, private userService: AuthService) { }

    userId: string | null = localStorage.getItem('userId')

    loadAllUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchUserAPI),
            switchMap(() => {
                return this.userService.fetchAllUsers()
                    .pipe(
                        map((data) => fetchUserAPISuccess({ allUser: Object.values(data) }))
                    )
            })
        )
    )

    loadUserProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchUserProfileAPI),
            switchMap(() => {
                return this.userService.fetchUserProfile(this.userId)
                    .pipe(
                        map((data) => fetchUserProfileAPISuccess({ profile: data }))
                    )
            })
        )
    )

} 