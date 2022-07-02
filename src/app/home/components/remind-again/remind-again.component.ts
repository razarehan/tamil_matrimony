import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-remind-again',
  templateUrl: './remind-again.component.html',
  styleUrls: ['./remind-again.component.scss'],
})
export class RemindAgainComponent implements OnInit {
  data: any;
<<<<<<< HEAD
  i: any;
  constructor(public toastController: ToastController, public alertController: AlertController,private route: Router) { }
=======

  constructor(public toastController: ToastController, public alertController: AlertController,
    private route: Router) { }
>>>>>>> 1f3c250a5f18c506e744b682c41e867abf326b85

  ngOnInit() {
    fetch('../../../../assets/Dataset/Profiles.json').then(res => res.json())
      .then(json => {
        this.data = json;
      }).catch((err) => {
        console.log(err);
      })
    console.log(this.data);
  }
  async seeAll() {
    const toast = await this.toastController.create({
      duration: 1000,
      message: 'Page is on progress',
      position: 'middle'
    });
    await toast.present();
  }
  async remindHer() {
    const alert = await this.alertController.create({
      header: '',
      message: 'You reminded her',
      buttons: ['Ok'],
    });

    await alert.present();
  }
  
  async goProfile(value, item) {
    this.route.navigate(['/view-profile', item]);
  }
}
