import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { PremiumComponent } from './components/premium/premium.component';
import { HomePageRoutingModule } from './home-routing.module';
import {NewMatchesComponent} from './components/new-matches/new-matches.component'
import {DailyRecommndsComponent} from './components/daily-recommnds/daily-recommnds.component'
import{RemindAgainComponent} from './components/remind-again/remind-again.component'
import {DiscoverMatchesComponent} from './components/discover-matches/discover-matches.component'
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { ExploreBmComponent } from './components/explore-bm/explore-bm.component';
import { MatchPreferencesComponent } from './components/match-preferences/match-preferences.component';
import {MemeberViewComponent} from './components/memeber-view/memeber-view.component'
import {MutualMemberComponent} from './components/mutual-member/mutual-member.component'
import {MemberLookingComponent} from './components/member-looking/member-looking.component'
import {MatchesShortlistedComponent} from './components/matches-shortlisted/matches-shortlisted.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, NewMatchesComponent, DailyRecommndsComponent,RemindAgainComponent,
  DiscoverMatchesComponent, StatusBarComponent, ExploreBmComponent,PremiumComponent,MatchPreferencesComponent,
  MemeberViewComponent,MutualMemberComponent,MemberLookingComponent,MatchesShortlistedComponent]
})
export class HomePageModule {}
