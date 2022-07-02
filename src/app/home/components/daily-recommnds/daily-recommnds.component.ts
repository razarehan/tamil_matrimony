import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-recommnds',
  templateUrl: './daily-recommnds.component.html',
  styleUrls: ['./daily-recommnds.component.scss'],
})
export class DailyRecommndsComponent implements OnInit {

  constructor(private router: Router){ }
  

  DailyRec(){
    this.router.navigate(['dailyrecomm']);
  }
  ngOnInit() {}

  
}
