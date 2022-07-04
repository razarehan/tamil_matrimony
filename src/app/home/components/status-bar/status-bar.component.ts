import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
})
export class StatusBarComponent implements OnInit {
  acceptances:number;
  responses:number;
  shortlisted:number;
  viewedProfile:number;
  constructor() { }
  ngOnInit() {
    fetch('../../../../assets/Dataset/status.json').then(res => res.json())
      .then(json => {
        this.acceptances = json[0].acceptances;
        this.responses = json[0].responses;
        this.shortlisted = json[0].shortlisted;
        this.viewedProfile = json[0].viewedProfile;
      }).catch((err) => {
        console.log(err);
      })
  }

}
