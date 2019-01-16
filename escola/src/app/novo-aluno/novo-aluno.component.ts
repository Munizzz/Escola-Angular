import { Component } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.css']
})
export class NovoAlunoComponent  {
  aluno:Aluno = {
    nome:"",
    data_nascimento:"",
    serie:null,
    cep:"",
    rua:"",
    numero:null,
    complemento:"",
    bairro:"",
    cidade:"",
    estado:"",
    nome_mae:"",
    cpf_mae:"",
    data_pagamento:null,
  };


  alunos:Array<Aluno>;
  constructor(private alunoService:AlunoService){
    this.alunos = this.alunoService.alunos;
  }

  incluir(){
    let aluno = Object.assign({},this.aluno);
    this.alunos.push(aluno);
  }
}


