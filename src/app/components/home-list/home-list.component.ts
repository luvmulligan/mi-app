import { Component, OnInit, IterableChangeRecord, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Hero } from 'src/app/models/hero';


@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.sass']
})
export class HomeListComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  private selectedHero: Hero;

  recibirEmit(llamada: boolean): void {
    console.log("llamada: ", llamada);

  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }


  private hero: Hero;

  private heros: Hero[] = [
    {
      id: 1,
      name: "vulcano",
      description: "Se pone rojo cuando se enoja",
      likes: 0
    },
    {
      id: 1,
      name: "mujer maravilla",
      description: "se hace invisible",
      likes: 0
    },
    {
      id: 1,
      name: "vulcano",
      description: "Se pone rojo cuando se enoja",
      likes: 0
    },
    {
      id: 1,
      name: "vulcano",
      description: "Se pone rojo cuando se enoja",
      likes: 0
    }, {
      id: 1,
      name: "vulcano",
      description: "Se pone rojo cuando se enoja",
      likes: 0
    }

  ];



}
