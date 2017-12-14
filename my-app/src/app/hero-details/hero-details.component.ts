import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Models/hero.model';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero : Hero
  constructor(private _heroService :HeroService,
    private _route: ActivatedRoute,
    private _location: Location  ) { }

  getHero(): void {
    const id = + this._route.snapshot.paramMap.get('id');
    this._heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this._location.back();
  }

  ngOnInit() {
    this.getHero();
  }

}
