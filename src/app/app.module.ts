import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { EditHeroComponent } from './components/home-list/edit-hero/edit-hero.component';
import { DashWorkComponent } from './components/dash-work/dash-work.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeroService } from './services/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { EditHero2Component } from './components/edit-hero2/edit-hero2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    EditHeroComponent,
    DashWorkComponent,
    NavComponent,
    NotFoundComponent,
    EditHero2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
