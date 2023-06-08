import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { userSelectorData } from '../../store/user.selector';
import { fetchUserAPI } from '../../store/user.action';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../store/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {

  users$!: Observable<User[]>;
  constructor(private store: Store<{ allUser: User[] }>, private userServices: AuthService, private router : Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('adminToken')){
      this.router.navigate(['/admin/login'])
    }
    this.store.dispatch(fetchUserAPI())
    this.users$ = this.store.pipe(select(userSelectorData))
  }

  deleteUser(id: string) {
    const sure = confirm('Are You Sure!')
    if(sure){
      this.userServices.deleteUser(id).subscribe((response) => {
        alert(response.message)
        this.store.dispatch(fetchUserAPI())
      }, (error) => {
        alert(error)
      })
    }
  }

  editUser(id:string){
    this.userServices.setId(id)
    this.router.navigate(['/admin/edit'])
  }

}
