import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { Person } from '../models/person';
import { Observable, Observer } from 'rxjs';
import { PersonService } from './person.service';

const person: Person = { "name": "RICK", "image": "https://teste.com" }

function createResponse(body: { name: string; image: string; }) {
  return new Observable((observer: Observer<any>) => {
    observer.next(body);
  });
}

class MockHttp {
  get() {
    return createResponse(person);
  }
}

describe('PersonService', () => {
  let service: PersonService;
  let http: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: MockHttp },
        PersonService
      ]
    });
    http = bed.inject(HttpClient);
    service = TestBed.inject(PersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve retonar o person', () => {
    // spyOn(http, 'get').and.returnValue(createResponse(person));

    service.getPerson()
      .subscribe((result) => {
        expect(result).toEqual(person)
        console.log('person:  ' + JSON.stringify(person));
        console.log('result:  ' + JSON.stringify(result));
      })
  })
});
