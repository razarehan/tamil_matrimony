import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-matches',
  templateUrl: './new-matches.component.html',
  styleUrls: ['./new-matches.component.scss'],
})
export class NewMatchesComponent implements OnInit {
  slideOpts = {
    slidesPerView: 3.5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
  constructor(platform: Platform, private router: Router,public toastController: ToastController)  { }
  DailyRec(){
    this.router.navigate(['dailyrecomm']);
  }
  ngOnInit() {
   
  }

}
