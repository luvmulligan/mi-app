import { Component, OnInit, IterableChangeRecord, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';


@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.sass']
})
export class HomeListComponent implements OnInit {

  constructor(private heroService: HeroService) { }

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







}
