import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPerson(): Observable<Person>{
    return this.http.get<Person>('https://rickandmortyapi.com/api/character/29');
  }
}
