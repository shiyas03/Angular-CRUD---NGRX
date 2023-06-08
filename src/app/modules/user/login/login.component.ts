import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) { }

  submit: boolean = false
  emailMessage!:string
  passMessage!:string
  user!:string

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$")]]
  })

  onSubmit() {
    this.submit = true
    if(this.loginForm.value.email){
      this.userLogin()
    }
  }

  userLogin() {
    this.authService.getUser(this.loginForm.value).subscribe(
      (response: any) => {
        if(response.passMatch){
          this.passMessage = response.passMatch
        }else if(response.emailMatch){
          this.emailMessage = response.emailMatch
        }else{
          this.user = response.user
          localStorage.setItem('userToken', response.userToken);
          localStorage.setItem('userId',response.userId)
          this.router.navigate(['/']) 
        }
        setTimeout(()=>{
          this.passMessage = "" 
          this.emailMessage = "" ;
        },2000)
      }, (error) => {
        console.log(error)
      }
    )
  }
}
