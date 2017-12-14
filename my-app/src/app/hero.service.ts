import { Injectable } from '@angular/core';
import { HEROES } from './Models/mocks.heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './Models/hero.model';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private _messageService : MessageService) { }

  getHeroes() : Observable<Hero[]> {
    this._messageService.add("fetched heroees");
    return of(HEROES);
  }

  getHero(id: number) :Observable<Hero>{
    this._messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find( hero => hero.id === id));
  }
}
