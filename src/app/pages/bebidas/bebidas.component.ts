import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { bebida_mock } from 'src/app/mock/bebida-mock';

interface Bebida{
  imagem:string;
  titulo:string;
  descricacao:string;
  botao:string;
  valor:number
}


@Component({
  selector: 'NGF-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit {

  bebidaLista:Bebida[] = bebida_mock;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Bebida[]>("http://localhost:3000/bebidas").subscribe((resultado)=> {
     this.bebidaLista = resultado;
    });
  }

  bebidaClicada(msg:Bebida){
    alert(msg.descricacao)
  }
}
