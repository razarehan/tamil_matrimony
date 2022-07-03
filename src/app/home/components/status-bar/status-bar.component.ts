import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
})
export class StatusBarComponent implements OnInit {
  acceptances = 5;
  responses = 16;
  shortlisted = 1;
  viewedProfile = 43;
  constructor() { }

  ngOnInit() {}

}
