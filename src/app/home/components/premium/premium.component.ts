import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss'],
})
export class PremiumComponent implements OnInit {
  data: any;

  constructor(public toastController: ToastController, public alertController: AlertController,
    private route: Router) { }

  ngOnInit() {
    fetch('../../../../assets/Dataset/Profiles.json').then(res => res.json())
      .then(json => {
        this.data = json;
      }).catch((err) => {
        console.log(err);
      })
  }
  async seeAll() {
    const toast = await this.toastController.create({
      duration: 1000,
      message: 'Page is on progress',
      position: 'middle'
    });
    await toast.present();
  }
  
  async goProfile(item) {
    this.route.navigate(['view-profile', item]);
  }
}
