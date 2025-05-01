import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FacadeAuthService } from '../facade-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  fb = inject(FormBuilder);
  router = inject(Router)
  facadeAuthService = inject(FacadeAuthService);


  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  login(): void {
    console.log(this.loginForm.value);
    let payload = {
      email : this.loginForm.value.email,
      password : this.loginForm.value.password
    }

    this.facadeAuthService.login(payload).subscribe((response:any)=>{
      console.log({response})
      let data = response.data ;
      this.facadeAuthService.currentUserSubject.next(data);
      sessionStorage.setItem('token',data.token);
      if(data.role === 'user'){
        this.router.navigate(['blog/posts'],{replaceUrl: true})
      }
      if(data.role === 'admin'){
        this.router.navigate(['blog/dashboard'],{replaceUrl: true})
      }
    })
  }

}
