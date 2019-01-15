import { Component } from '@angular/core';
import { Aluno } from './aluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Escola ABC';
  alunos:Array<Aluno> = [];
}
