import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-member-looking',
  templateUrl: './member-looking.component.html',
  styleUrls: ['./member-looking.component.scss'],
})
export class MemberLookingComponent implements OnInit {

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
