import { Component } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';



@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent {

  alunos:Array<Aluno>;

  constructor(private alunoService:AlunoService){
    this.alunoService.alunos.push({
      nome:"Andre Figueiredo Muniz",
      data_nascimento:"21-03-1995",
      serie:1,
      cep:"21931-070",
      rua:"Estrada da Bica",
      numero:256,
      complemento:"fundos",
      bairro:"Cacuia",
      cidade:"Rio de Janeiro",
      estado:"RJ",
      nome_mae:"Maria Margareth",
      cpf_mae:"154.400.377-30",
      data_pagamento:10,
    });
    this.alunos = this.alunoService.alunos;
  }
}
