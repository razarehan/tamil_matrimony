import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-remind-again',
  templateUrl: './remind-again.component.html',
  styleUrls: ['./remind-again.component.scss'],
})
export class RemindAgainComponent implements OnInit {
  data: any;

  constructor(public toastController: ToastController, public alertController: AlertController) { }

  ngOnInit() {
    fetch('../../../../assets/Dataset/Profiles.json').then(res => res.json())
   .then(json => {
     this.data = json;
   }).catch((err) => {
     console.log(err);     
   })
   console.log(this.data);  
  }
  async seeAll(){
    const toast = await this.toastController.create({
      duration: 1000,
      message: 'Page is on progress',
      position :'middle'
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
}
