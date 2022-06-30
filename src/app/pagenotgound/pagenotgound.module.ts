import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagenotgoundPageRoutingModule } from './pagenotgound-routing.module';

import { PagenotgoundPage } from './pagenotgound.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagenotgoundPageRoutingModule
  ],
  declarations: [PagenotgoundPage]
})
export class PagenotgoundPageModule {}
