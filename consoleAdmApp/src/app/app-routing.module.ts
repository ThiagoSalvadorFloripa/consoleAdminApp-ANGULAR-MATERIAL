import { ListWinnerComponent } from './user/list-winner/list-winner.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListRaffleComponent } from './raffle/list-raffle/list-raffle.component';
import { ListPlayedComponent } from './played/list-played/list-played.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { RegisterRaffleComponent } from './raffle/register-raffle/register-raffle.component';
import { ConsoleAdminNavComponent } from './console-admin-nav/console-admin-nav.component';
import { LoginComponent } from './securityLogin/login/login.component';
import { ChartComponent } from './chart/chart.component';
import { AuthGuardService } from './securityLogin/guards/auth-guard.service';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  //{path: '**', component: NotFoundComponent},
  {path: 'menu', component: ConsoleAdminNavComponent,
  children: [
    {path: 'chart', component: ChartComponent},
    {path: 'users', component: ListUserComponent},
    {path: 'user/register', component: RegisterUserComponent},
    {path: 'winner', component: ListWinnerComponent},
    {path: 'played', component: ListPlayedComponent},
    {path: 'raffle', component: ListRaffleComponent},
    {path: 'raffle/register', component: RegisterRaffleComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
