import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-hero2',
  templateUrl: './edit-hero2.component.html',
  styleUrls: ['./edit-hero2.component.scss']
})
export class EditHero2Component implements OnInit {

  constructor(
    private heroService: HeroService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id: number = parseInt(this.activeRoute.snapshot.paramMap.get("id"));

    this.heroService.getHeroById(id).subscribe(
      data => {
        this.hero = data;
        console.log("Get heroes ok");
      },
      err => console.log("Get Hero ERR", err),
      () => console.log("Get Hero Finish")
    );

  }
  hero: Hero;

}
