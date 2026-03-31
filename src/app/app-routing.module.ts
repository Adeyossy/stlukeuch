import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { Page5Component } from './page-5/page-5.component';
import { Page6Component } from './page-6/page-6.component';
import { Page8Component } from './page-8/page-8.component';
import { Page9Component } from './page-9/page-9.component';
import { Page7Component } from './page-7/page-7.component';
import { Page10Component } from './page-10/page-10.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "support",
    component: Page5Component
  },
  {
    path: "practical-information",
    component: Page6Component
  },
  {
    path: "the-christian-life",
    component: Page7Component
  },
  {
    path: "the-catholic-faith",
    component: Page8Component
  },
  {
    path: "about-st-luke",
    component: Page9Component
  },
  {
    path: "prayer-request",
    component: Page10Component
  },
  {
    path: "support/:category",
    component: SupportComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'top'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
