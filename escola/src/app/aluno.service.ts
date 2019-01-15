import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunoService {
  alunos:Array<Aluno> = [];
  constructor() { }
}
