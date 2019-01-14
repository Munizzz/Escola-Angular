import { Component } from '@angular/core';
import { Aluno } from '../aluno';


@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent {

  alunos =[];
  aluno:Aluno = {
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
  };

  incluir(){
    this.alunos.push(this.aluno);

  }

}
