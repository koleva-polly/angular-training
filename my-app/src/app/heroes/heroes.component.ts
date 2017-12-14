import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../Models/hero.model';
import { HEROES } from '../Models/mocks.heroes';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes : Hero[];
  constructor(private _heroService: HeroService) { 
  }

  ngOnInit() {
    this._heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes );    
  }

}
