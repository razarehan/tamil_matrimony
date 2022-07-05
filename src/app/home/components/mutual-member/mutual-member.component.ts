import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-mutual-member',
  templateUrl: './mutual-member.component.html',
  styleUrls: ['./mutual-member.component.scss'],
})
export class MutualMemberComponent implements OnInit {

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
