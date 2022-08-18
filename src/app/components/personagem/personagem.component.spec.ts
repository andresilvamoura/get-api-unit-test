import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PersonagemComponent } from './personagem.component';
import { PersonService } from 'src/app/services/person.service';
import { of } from 'rxjs';
import { Person } from 'src/app/models/person';

describe('PersonagemComponent', () => {
  let component: PersonagemComponent;
  let fixture: ComponentFixture<PersonagemComponent>;

  // Declarar o service falso
  let fakePersonService: PersonService;
  // Declarar a variavel falsa
  const person: Person = { "name": "RICK", "image": "https://teste.com" }

  beforeEach(async () => {
  
    // Criar o Service Fake
    fakePersonService = jasmine.createSpyObj<PersonService>(
      'PersonService',
      {
        getPerson: of(person)
      }
    );


    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      
      //  Usar o Service Falso em vez do Original
      providers: [
        { provide: PersonService, useValue: fakePersonService }
      ],
      declarations: [PersonagemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the person', () => {
    fakePersonService.getPerson()
      .subscribe((result) => {
        expect(result).toEqual(person)
      })
    expect(fakePersonService.getPerson).toHaveBeenCalled();
  });

});

