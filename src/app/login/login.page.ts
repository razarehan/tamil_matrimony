import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  error:string = '';
  constructor(private authService: AuthService, 
              private router: Router) { }

  ngOnInit() {
    if(this.authService.isLoggedIn()) {
      console.log('=>' + this.authService.isLoggedIn());
      
      this.router.navigate(['/home']);
      return;
    }
  }

  onSubmit(form: NgForm): void {
    if(!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password).subscribe(resData => {
      console.log(resData);
      this.router.navigate(['/home']);
    }, error => {
      console.log(error);
      // make toast to show error message
    })
    form.reset();
  }
}
