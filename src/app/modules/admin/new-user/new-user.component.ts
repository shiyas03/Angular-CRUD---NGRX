import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { fetchUserAPI } from '../../store/user.action';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router, private store: Store) { }

  submit: boolean = false
  inCorrect: boolean = false
  emailUsed!: string;

  newUserForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$")]],
    cpassword: ['', [Validators.required]]
  })

  onSubmit() {
    this.submit = true
    const { name, email, password, cpassword } = this.newUserForm.value
    if (cpassword === password) {
      if (name && email && password) {
        this.createNewUser()
      }
    } else {
      this.inCorrect = true
      setTimeout(() => {
        this.inCorrect = false
      }, 2000)
    }
  }

  createNewUser(): void {
    this.authService.createNewUser(this.newUserForm.value).subscribe(
      (response) => {
        if (response.emailUsed) {
          this.emailUsed = response.emailUsed
          setTimeout(() => {
            this.emailUsed = ''
          }, 2000)
        } else {
          this.store.dispatch(fetchUserAPI())
          this.router.navigate(['/admin'])
          alert('User Created Suceessfully!');
        }
      }, (error) => {
        console.log(error)
      })
  }


}
