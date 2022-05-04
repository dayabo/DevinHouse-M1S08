import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { comida_mock } from 'src/app/mock/comida-muck';
interface Comida{
  imagem:string;
  titulo:string;
  descricacao:string;
  botao:string;
  valor:number
}

@Component({
  selector: 'NGF-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.scss']
})

export class ComidasComponent implements OnInit {

  comidaLista:Comida[] = comida_mock

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Comida[]>("http://localhost:3000/comidas").subscribe((resultado)=> {
      this.comidaLista = resultado;
     });
  }

  comidaClicada(msg:Comida){
    alert(msg.descricacao)
  }
}
