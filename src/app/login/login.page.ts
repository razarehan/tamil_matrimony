import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  keepMeLoggedIn:boolean = true;
  constructor(private authService: AuthService, 
              private router: Router, 
              public toastController: ToastController) { }

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
    
    this.authService.login(email, password, this.keepMeLoggedIn).subscribe(resData => {
      console.log(resData);
      this.succes();
      this.router.navigate(['/home']);
    }, error => {
      console.log(error);
      this.errorpresent();
    })
    form.reset();
  }

  
async errorpresent(){
  const toast = await this.toastController.create({
    color: 'dark',
    duration: 3000,
    message: 'Login Failed',
    position :'top'
  });
  await toast.present();
}


async succes(){
  const toast = await this.toastController.create({
    color:'success',
    duration: 3000,
    message: 'Succesfully Login',
    position :'middle'
  });
  await toast.present();
}
}
