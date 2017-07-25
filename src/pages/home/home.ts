import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hero } from '../../app/hero';
import { HeroService } from '../../app/heroservice';
import { OnInit } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage implements OnInit{

    title:any;
    selectedHero: Hero;
    heroes: Hero[];

    onSelect(hero: Hero): void{
      this.selectedHero = hero;
    }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }


  constructor(public navCtrl: NavController, private heroService: HeroService) {

    this.title = 'Tour of Heroes';
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);

  }

}



