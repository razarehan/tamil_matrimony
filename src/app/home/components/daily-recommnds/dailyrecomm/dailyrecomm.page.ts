import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { GestureController, IonCard, Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-dailyrecomm',
  templateUrl: './dailyrecomm.page.html',
  styleUrls: ['./dailyrecomm.page.scss'],
})
export class DailyrecommPage implements OnInit {
  questions : any;
  data :any;
  present :any;
  @ViewChildren(IonCard, { read: ElementRef }) tinderCards: QueryList<ElementRef>;
  constructor(private route: Router,private getstureCtrl: GestureController, private platform: Platform,
    public toastController: ToastController) {

  }


  ngAfterViewInit() {
    const tinderCardArray = this.tinderCards.toArray();
    this.setGesture(tinderCardArray);
  }
 
 
  setGesture(cards) {

   

    for (let c = 0; c < cards.length; c++) {

      const card = cards[c];

      const gesture = this.getstureCtrl.create({
        el: card.nativeElement,
        gestureName: 'swipe',
        onStart: ev => {

        },
        onMove: ev => {
          card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
        },
        onEnd:  ev => {
          card.nativeElement.style.transition = '.5s ease-out';
          if (ev.deltaX > this.platform.width() / 2.25) {

            card.nativeElement.style.transform = `translateX(${this.platform.width() * 3}px) rotate(${ev.startX / 2}deg)`
            this.notintres();
          } else if (ev.deltaX < -this.platform.width() / 2.25) {
            card.nativeElement.style.transform = `translateX(-${this.platform.width() * 3}px) rotate(${ev.startX / 2}deg)`
            this.intrested();
           
          } else {
            card.nativeElement.style.transform = '';
          }

        }
      });

      gesture.enable(true);

    }

  }

  questions1 = [
        {
          img:"./assets/images/pip2.jpg" , name: "Rani roy", id:"m190372ca"
        },
        {
          img:"./assets/images/pip3.jpg" , name: "Anjali", id:"m190372ca"
        },

        {
          img:"./assets/images/pip4.jpg" , name: "Priyanka", id:"m190372ca"
        },

        {
          img:"./assets/images/pip6.jpg" , name: "Monika", id:"m190372ca"
        },
        {
          img:"./assets/images/pip2.jpg" , name: "Shivangi", id:"m190372ca"
        },
        {
          img:"./assets/images/pip3.jpg" , name: "Apurva", id:"m190372ca"
        },

        {
          img:"./assets/images/pip4.jpg" , name: "Deeksha", id:"m190372ca"
        },

        {
          img:"./assets/images/pip6.jpg" , name: "Varsha", id:"m190372ca"
        }


  ]


  Daily_rec() {
    this.route.navigate(['/assginment1']);
  }
  async intrested(){
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 3000,
      message: 'intresetd',
      position:'top'
    });
    await toast.present();
    
  }

  async notintres(){
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'not intrested',
      position :'bottom'
    });
    await toast.present();
    
  }

  async shortlist(){
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'shortlist',
      position :'bottom'
    });
    await toast.present();
    
  }

 async activeCheck(value) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'intrested',
      position: 'bottom'
    });
    await toast.present();
    this.questions1.splice(value, 1);
}

async notCheck(value) {
  const toast = await this.toastController.create({
    color: 'dark',
    duration: 2000,
    message: 'not intrested',
    position: 'bottom'
  });
  await toast.present();
  this.questions1.splice(value, 1);
}

  ngOnInit() {
    
    fetch('./assets/data/mydata.json').then(res => res.json())
    .then(json => {
      this.data = json;
      
    }).catch((err) => {
      console.log(err);     
    })
  }

}
function tostpresetnt() {
  throw new Error('Function not implemented.');
}


