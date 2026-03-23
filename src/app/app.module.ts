import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SupportComponent } from './support/support.component';
import { FormsModule } from '@angular/forms';
import { Page5Component } from './page-5/page-5.component';
import { Page6Component } from './page-6/page-6.component';
import { Page8Component } from './page-8/page-8.component';
import { CarouselComponent } from './widgets/carousel/carousel.component';
import { Page9Component } from './page-9/page-9.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SupportComponent,
    Page5Component,
    Page6Component,
    Page8Component,
    CarouselComponent,
    Page9Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
