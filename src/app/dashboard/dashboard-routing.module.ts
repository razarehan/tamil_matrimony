import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';
import { MailboxPage } from '../mailbox/mailbox.page';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    // path: 'tabs',
    component: DashboardPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'mailbox',
        loadChildren: () => import('../mailbox/mailbox.module').then( m => m.MailboxPageModule)
      },
      {
        path: 'matches',
        loadChildren: () => import('../mailbox/mailbox.module').then( m => m.MailboxPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../mailbox/mailbox.module').then( m => m.MailboxPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../mailbox/mailbox.module').then( m => m.MailboxPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard/home',
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
