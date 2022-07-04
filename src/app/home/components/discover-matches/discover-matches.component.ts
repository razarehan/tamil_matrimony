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
  profession = "366";
  education = '2,269';
  star = "252";
  featured = "1,163";
  ngOnInit() {}

}
