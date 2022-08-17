import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonagemComponent } from './components/personagem/personagem.component';

const routes: Routes = [
  { path: '', redirectTo: 'personagem', pathMatch: 'full' },
  { path: 'personagem', component: PersonagemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
