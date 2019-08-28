import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeListComponent } from './components/home-list/home-list.component';
import { DashWorkComponent } from './components/dash-work/dash-work.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditHero2Component } from './components/edit-hero2/edit-hero2.component';


const routes: Routes = [
  { path: "list", component: HomeListComponent },
  { path: "dashboard", component: DashWorkComponent },
  { path: "edit/:id", component: EditHero2Component },
  { path: "", component: DashWorkComponent },
  { path: "**", component: NotFoundComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
