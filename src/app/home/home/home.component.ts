import { Component, OnInit } from '@angular/core';
import { NavegacaoComponent } from '../../navegacao/navegacao/navegacao.component';
import { SlideComponent } from '../../slide/slide/slide.component';
import { RouterOutlet } from '@angular/router';
import { NoticiaHomeComponent } from '../../noticiaGeneral/noticia-home/noticia-home.component';
import { MissaoComponent } from '../../missao/missao/missao.component';
import { SobreNosComponent } from '../../sobreNos/sobre-nos/sobre-nos.component';
import { RodapeComponent } from '../../rodape/rodape/rodape.component';
import { NoticiaService } from '../../service/noticiaService';
import { Noticia } from '../../model/noticia';
import { CommonModule } from '@angular/common';
import { NoticiaLateralComponent } from '../../noticiaLateral/noticia-lateral/noticia-lateral.component';
import { SlideAbaixoComponent } from '../../slideAbaixo/slide-abaixo/slide-abaixo.component';

@Component({
  selector: 'app-home',
  imports: [SlideAbaixoComponent,NoticiaLateralComponent, CommonModule, NavegacaoComponent, SlideComponent, RouterOutlet, NoticiaHomeComponent, MissaoComponent, SobreNosComponent, RodapeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [NoticiaService],
  standalone: true
})
export class HomeComponent implements OnInit{
  public noticias: Noticia[]= [];
  constructor(private noticiaService: NoticiaService){

  }
  ngOnInit(): void {
    this.noticias =  this.noticiaService.getAllNoticias();
    console.log("dentro do home noticia");
    console.log(this.noticias);
  }

}
