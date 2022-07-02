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
 array = [];
 array1 = [];
  constructor(private route: ActivatedRoute,) {
    this.sub = this.route.params.subscribe(params => {
      this.array[1]=params['id'];
      this.array[2]=params['name'];
      this.array[3]=params['age'];
      this.array[4]=params['height'];
      this.array[5]=params['mother'];
      this.array[6]=params['caste'];
      this.array[7]=params['education'];
      this.array[8]=params['profession'];
      this.array[9]=params['place'];
      this.array1[0]=params['img'];
      this.array1[1]=params['img1'];
      this.array1[2]=params['img2'];
      this.array1[3]=params['img3'];
     
      console.log(params);
      this.profiledata=[
         { id: this.array[1], name: this.array[2] , img: this.array1[1],age: this.array[3], height: this.array[4],
        mother:this.array[5] ,caste:this.array[6],education:this.array[7],profession:this.array[8],place:this.array[9]}
      ]  
  });
   }
    ngOnInit() {
      console.log(this.profiledata+ "dacsduhieus");
      console.log(this.array);
      this.profiledata;
      this.array1;
    }
}

