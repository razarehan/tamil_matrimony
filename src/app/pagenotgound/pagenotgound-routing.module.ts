import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagenotgoundPage } from './pagenotgound.page';

const routes: Routes = [
  {
    path: '',
    component: PagenotgoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagenotgoundPageRoutingModule {}
