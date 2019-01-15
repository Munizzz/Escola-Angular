import { Injectable } from '@angular/core';
import { Cep } from './cep';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CepService {

  constructor(private http: HttpClient) { }


  buscar(cep:string){
  	return this.http.get(`https://viacep.com.br/ws/${cep}/json`).toPromise()
  	.then(response => this.converterRespostaParaCep(response)); 
  }

  private converterRespostaParaCep(cepNaResposta):Cep{
  	let cep = new Cep();
  	cep.cep = cepNaResposta.cep;
  	cep.logradouro = cepNaResposta.logradouro;
  	cep.complemento = cepNaResposta.complemento;
  	cep.bairro = cepNaResposta.bairro;
  	cep.cidade = cepNaResposta.localidade;
  	cep.estado = cepNaResposta.uf;
  	return cep;
  }
}
