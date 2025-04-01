import { Component, Input, OnInit } from '@angular/core';
import { NavegacaoComponent } from '../../navegacao/navegacao/navegacao.component';
import { NoticiaLateralComponent } from '../../pages/homePage/noticiaLateral/noticia-lateral/noticia-lateral.component';
import { Noticia } from '../../model/noticia';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NoticiaService } from '../../service/noticiaService';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NoticiaHomeComponent } from '../../pages/homePage/noticiaGeneral/noticia-home/noticia-home.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavegacaoComponent, CommonModule, HttpClientModule, NoticiaLateralComponent, NoticiaHomeComponent ],
  providers: [NoticiaService],
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent  implements OnInit{
  numPage: number = 0;
  orientacaoPagina: string = '';
  noticias: Noticia[];
  constructor(private noticiaService: NoticiaService, 
    private http: HttpClient){
    this.noticias = new Array<Noticia>();
    // this.activeroute.snapshot.data['name'];
   
  }
  ngOnInit(): void {
    // console.log("this.activeroute.snapshot.data");
    // console.log(this.activeroute.snapshot.data['name']);
    // this.activeroute.queryParamMap.subscribe(data =>{
    //   console.log(data.get('size'));
    //   console.log(data.get('order'));
    // });


    this.noticiaService.findAll().subscribe(
      noticia => {
        this.noticias = noticia;
      }
    );
  }
 
}










