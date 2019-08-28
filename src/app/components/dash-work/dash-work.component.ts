import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dash-work',
  templateUrl: './dash-work.component.html',
  styleUrls: ['./dash-work.component.scss']
})
export class DashWorkComponent implements OnInit {

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    //this.heros = this.heroService.getHeros();
    this.heroService.getHeros().subscribe(

      data => {
        this.heros = data;
      },
      err => {
        console.log(err)
      },
      () => {
        console.log("Fin fetch")
      }

    );

  }

  private selectedHero: Hero;

  recibirEmit(llamada: boolean): void {
    console.log("llamada: ", llamada);

  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }


  private heros: Hero[];

  onClickGoto(id) {
    console.log("edit/" + id);
    this.router.navigateByUrl("edit/" + id);
  }


}


