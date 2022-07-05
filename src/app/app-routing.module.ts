import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuardService],
    loadChildren: () => import('../app/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dailyrecomm',
    canActivate: [AuthGuardService],
    loadChildren: () => import('../app/home/components/daily-recommnds/dailyrecomm/dailyrecomm.module').then(m => m.DailyrecommPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'view-profile',
    canActivate: [AuthGuardService],
    loadChildren: () => import('../app/home/Pages/view-profile/view-profile.module').then(m => m.ViewProfilePageModule)
  },
  {
    path: 'mailbox',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./mailbox/mailbox.module').then( m => m.MailboxPageModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pagenotgound/pagenotgound.module').then(m => m.PagenotgoundPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
