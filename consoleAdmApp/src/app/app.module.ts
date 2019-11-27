import { RaffleService } from './raffle/register-raffle/raffle.service';
import { UserService } from './user/register-user/user.service';
import { PlayedService } from './played/list-played/played.service'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsoleAdminNavComponent } from './console-admin-nav/console-admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCheckboxModule, MatSortModule, MatDialogModule, MatTableModule, MatToolbarModule, MatProgressSpinnerModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatInputModule, MatFormFieldModule, MatMenuModule } from '@angular/material';
import { MatNativeDateModule, MatPaginatorModule } from '@angular/material';

import { ConsoleAdminDashboardComponent } from './console-admin-dashboard/console-admin-dashboard.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { RegisterRaffleComponent } from './raffle/register-raffle/register-raffle.component';
import { ListRaffleComponent } from './raffle/list-raffle/list-raffle.component';
import { ListPlayedComponent } from './played/list-played/list-played.component';
import { ListWinnerComponent } from './user/list-winner/list-winner.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './securityLogin/login/login.component';
import {FormsModule} from '@angular/forms';
import { AuthGuardService } from './securityLogin/guards/auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { HttpClient } from '@angular/common/http'

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ConsoleAdminNavComponent,
    ConsoleAdminDashboardComponent,
    RegisterUserComponent,
    ListUserComponent,
    RegisterRaffleComponent,
    ListRaffleComponent,
    ListPlayedComponent,

    ListWinnerComponent,
    NotFoundComponent,
    LoginComponent,
    ChartComponent
  ],
  imports: [
     ChartsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSidenavModule,
    CurrencyMaskModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,

    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatGridListModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatMenuModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [UserService, PlayedService, RaffleService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
