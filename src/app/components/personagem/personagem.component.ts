import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {
  person!: Person;

  constructor(private service: PersonService) { }

  ngOnInit(): void {
    this.getPerson()
  }

  getPerson(){
    this.service.getPerson()
      .subscribe(res => {
        this.person = res
      })
  }

}
