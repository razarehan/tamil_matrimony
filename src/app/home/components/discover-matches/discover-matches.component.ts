import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-discover-matches',
  templateUrl: './discover-matches.component.html',
  styleUrls: ['./discover-matches.component.scss'],
})
export class DiscoverMatchesComponent implements OnInit {

  slideOpts = {
    slidesPerView: 3.5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    constructor(platform: Platform, private route: Router,public toastController: ToastController){ }

  ngOnInit() {}

}
