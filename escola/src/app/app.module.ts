import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { NovoAlunoComponent } from './novo-aluno/novo-aluno.component';
import { AlunoService } from './aluno.service';
import { CepComponent } from './cep/cep.component';
import { CepService } from './cep.service';

import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    ListaAlunosComponent,
    NovoAlunoComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [AlunoService, CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
