import { Component, OnInit, Input, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() hero: Hero;
  @Output() llamada: EventEmitter<boolean> = new EventEmitter();

  action(action) {
    this.llamada.emit(action);
  }
}
