import { AfterContentInit, Component, OnInit } from '@angular/core';
import { NavegacaoComponent } from '../../navegacao/navegacao/navegacao.component';

import { RouterOutlet } from '@angular/router';

import { RodapeComponent } from '../../rodape/rodape/rodape.component';
import { NoticiaService } from '../../service/noticiaService';
import { Noticia } from '../../model/noticia';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SlideAbaixoComponent } from '../../pages/homePage/slideAbaixo/slide-abaixo/slide-abaixo.component';
import { NoticiaLateralComponent } from '../../pages/homePage/noticiaLateral/noticia-lateral/noticia-lateral.component';
import { NoticiaHomeComponent } from '../../pages/homePage/noticiaGeneral/noticia-home/noticia-home.component';
import { SlideComponent } from '../../pages/homePage/slide/slide/slide.component';
import { MissaoComponent } from '../../pages/homePage/missao/missao/missao.component';
import { SobreNosComponent } from '../../pages/homePage/sobreNos/sobre-nos/sobre-nos.component';

@Component({
  selector: 'app-home',
  imports: [HttpClientModule, SlideAbaixoComponent,NoticiaLateralComponent, CommonModule, 
    NavegacaoComponent, SlideComponent, RouterOutlet, NoticiaHomeComponent, 
    MissaoComponent, SobreNosComponent, RodapeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [NoticiaService],
  standalone: true
})
export class HomeComponent implements AfterContentInit{
  public noticias: Noticia[]= [];
  constructor(private noticiaService: NoticiaService, private http: HttpClient){

  }
  ngAfterContentInit(): void {
    this.noticiaService.findAll().subscribe(
      noticia => {
        console.log('atual 1');
        console.log(noticia);
        this.noticias = noticia;
        // this.noticiaService.setData(noticia);
      }
    );
  }
  
  

}
