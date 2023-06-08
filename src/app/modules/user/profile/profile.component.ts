
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Profile } from '../../store/user';
import { fetchUserProfileAPI } from '../../store/user.action';
import { Observable } from 'rxjs';
import { profileSelectorData } from '../../store/user.selector';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // userId: any = localStorage.getItem('userId')

  profile$!: Observable<Profile[]>;
  image$!: string | undefined;
  isImage: boolean = false

  constructor(private store: Store<{ profile: Profile[] }>, private userServices: AuthService) { }

  ngOnInit(): void {
    this.store.dispatch(fetchUserProfileAPI())
    this.profile$ = this.store.pipe(select(profileSelectorData))
    this.profile$.subscribe((data) => {
      console.log(data)
      this.image$ = data[0].image
      if(this.image$){
        this.isImage = true
      }
    })
  }

  onFileSelected(event: any) {
    const file = <File>event.target.files[0];
    const formData = new FormData();
    formData.append('image', file, file.name);
    const userId = localStorage.getItem('userId')
    this.userServices.profileUpload(formData, userId).subscribe(() => {
      this.store.dispatch(fetchUserProfileAPI())
    })
  }

  removeImage() {
    const sure = confirm("Are you sure!")
    if (sure) {
      const id = localStorage.getItem('userId')
      this.userServices.profileDelete(id).subscribe((response) => {
        alert("Image Remove")
        this.isImage = false
        this.store.dispatch(fetchUserProfileAPI())
      })
    }
  }
}
