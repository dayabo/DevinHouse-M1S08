import { Component, OnInit } from '@angular/core';
import { menu_mock } from 'src/app/mock/menu-mock';

interface Menu{
  imagem:string;
  titulo:string;
  botao:string
  link:string
}





@Component({
  selector: 'NGF-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  cardapio:Menu[] = menu_mock


  constructor() { }

  ngOnInit(): void {
    
  }

  itemClicado(msg:Menu){
    alert(msg.titulo)
  }
}
