import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {CardsComponent} from './cards/cards.component';
import { CarsComponent } from './cars/cars.component';
import { PaintingComponent } from './painting/painting.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'cars',
        component: CarsComponent
      },
      {
        path: 'painting',
        component: PaintingComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    CardsComponent,
    CarsComponent,
    PaintingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {
}
