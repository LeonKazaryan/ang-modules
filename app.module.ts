import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m=> m.DashboardModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }
]



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
