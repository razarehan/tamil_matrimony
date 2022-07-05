import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  navigate :any;
 sub : any;
 profiledata :Array<any>;
 profileimages :Array<any>;
 products :any;
 data = [];
 img = [];
  constructor(private route: ActivatedRoute,) {
    this.sub = this.route.params.subscribe(params => {
      this.data[0]=params['id'];
      this.data[1]=params['name'];
      this.data[2]=params['age'];
      this.data[3]=params['height'];
      this.data[4]=params['mother'];
      this.data[5]=params['caste'];
      this.data[6]=params['education'];
      this.data[7]=params['profession'];
      this.data[8]=params['place'];
      this.data[9]=params['state'];
      this.data[10]=params['score'] * 100;
      this.img[0]=params['img'];

      console.log(params);
      this.profiledata=[
         { id: this.data[0], name: this.data[1] , img: this.img[0],age: this.data[2], height: this.data[3],
        mother:this.data[4] ,caste:this.data[5],education:this.data[6],profession:this.data[7],place:this.data[8],state:this.data[9],score:this.data[10]}
      ]  
  });
   }
    ngOnInit() {
      console.log(this.profiledata); 
      console.log(this.data);
      this.profiledata;
      this.img;
    }
}

