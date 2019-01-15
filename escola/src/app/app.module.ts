import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { NovoAlunoComponent } from './novo-aluno/novo-aluno.component';
import { AlunoService } from './aluno.service';
import { CepComponent } from './cep/cep.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaAlunosComponent,
    NovoAlunoComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
