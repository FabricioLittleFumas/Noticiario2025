import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ContatoService } from '../../service/contatoService';
import { Contato } from '../../model/contato';

@Component({
  selector: 'app-rodape',
  imports: [CommonModule],
  providers: [ContatoService],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent implements OnInit{
  @Input() rodapeIndex: number;
  contatos: Contato[];

  constructor(private contatoService: ContatoService){
    this.rodapeIndex = 0;
    this.contatos = new Array<Contato>();
  }
  ngOnInit(): void {
    this.contatos = this.contatoService.getAllcontatos();
  }

  public set setContatos(contatos: Contato[]){
    this.contatos = contatos;
  }
  public get getContatos(){
    return this.contatos;
  }
}
