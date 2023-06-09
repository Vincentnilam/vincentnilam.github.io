import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Hero, HeroesService } from 'src/app/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];
  displayedColumns: string[] = ['name', 'image'];
  dataSource: MatTableDataSource<Hero> = new MatTableDataSource<Hero>();

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesService.getHeroes().subscribe(response => {
      this.heroes = response.data;
    });
  }
}
