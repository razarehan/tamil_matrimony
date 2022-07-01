import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyrecommPageRoutingModule } from './dailyrecomm-routing.module';

import { DailyrecommPage } from './dailyrecomm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyrecommPageRoutingModule
  ],
  declarations: [DailyrecommPage]
})
export class DailyrecommPageModule {}
