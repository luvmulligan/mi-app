import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>("http://localhost:3000/hero");
  }
  getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(`http://localhost:3000/hero/${id}`);


  }



}
