import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'dailyrecomm',
    loadChildren: () => import('./components/daily-recommnds/dailyrecomm/dailyrecomm.module').then( m => m.DailyrecommPageModule)
  },
  {
    path: 'view-profile',
    loadChildren: () => import('./Pages/view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
