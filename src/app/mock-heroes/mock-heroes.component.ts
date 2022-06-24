import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes'; 
import { Hero } from '../hero';

@Component({
  selector: 'app-mock-heroes',
  templateUrl: './mock-heroes.component.html',
  styleUrls: ['./mock-heroes.component.css']
})

export class MockHeroesComponent implements OnInit {

  heroes = HEROES;

  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
