import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Hero {
  name: string;
  heroId: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }
  getHeroes(): Observable<{code: number, message: string, data: Hero[]}> {
    let headers = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest'  // or 'Origin': 'your origin'
    });
    
    return this.http.get<{code: number, message: string, data: Hero[]}>('https://cors-anywhere.herokuapp.com/https://mapi.mobilelegends.com/hero/list', { headers });
  }
}
