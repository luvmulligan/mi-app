import { Component, OnInit, IterableChangeRecord, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Hero } from 'src/app/models/hero';


@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.sass']
})
export class HomeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  hero: Hero; 

  heros: Hero[] = [
    {
      id: 1, 
      name: "vulcano", 
      description: "Se pone rojo cuando se enoja", 
      likes: 0
    }
  ];



}
