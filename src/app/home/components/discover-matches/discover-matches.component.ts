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
  profession: string;
  education: string;
  star: string;
  featured: string;
  
  ngOnInit() {
    fetch('../../../../assets/Dataset/daily_matches.json').then(res => res.json())
      .then(json => {
        this.profession = json[0].profession;
        this.education = json[0].education;
        this.star = json[0].star;
        this.featured = json[0].featured;
      }).catch((err) => {
        console.log(err);
      })
  }

}
