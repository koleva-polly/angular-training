import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../Models/hero.model';
import { HEROES } from '../Models/mocks.heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  
  heroes = HEROES;
  constructor() { 
    
  }

  selectHero(hero : Hero) : void {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
