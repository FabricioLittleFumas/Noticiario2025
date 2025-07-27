import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NavegacaoComponent } from '../../navegacao/navegacao/navegacao.component';
import { Noticia } from '../../model/noticia';
import { NoticiaHomeComponent } from '../../pages/homePage/noticiaGeneral/noticia-home/noticia-home.component';
import { NoticiaLateralComponent } from '../../pages/homePage/noticiaLateral/noticia-lateral/noticia-lateral.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NoticiaService } from '../../service/noticiaService';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { plainToClass } from 'class-transformer';
import { BrowserModule } from '@angular/platform-browser';

import { log } from 'node:console';


@Component({
  selector: 'app-noticia-especific',
  imports: [CommonModule , NavegacaoComponent, NoticiaLateralComponent],
  templateUrl: './noticia-especific.component.html',
  styleUrl: './noticia-especific.component.css',
  providers: [HttpClient, NoticiaService],
  standalone: true
})
export class NoticiaEspecificComponent implements OnInit {
   noticias: Noticia[];
   noticia: Noticia[];
  constructor(private http: HttpClient, private noticiaService: NoticiaService, 
    private activeRoute: ActivatedRoute, private router: Router){
    // this.noticia = plainToClass(Noticia, {});
    this.noticia = new Array<Noticia>();
    this.noticias = new Array<Noticia>();
    // this.activeroute.snapshot.data['name'];
   
  }

  // ngAfterViewInit(): void {
  //   this.noticiaService.findById(1).subscribe(
  //     noticia => {
  //       this.noticias = noticia;
  //     }
  //   );
  // }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(item =>{
      let numero = item.get('id') as string;
      if(numero !== null){
        this.noticiaService.findById(Number(numero)).subscribe(
          noticia => {
           this.noticia = noticia; 
          }
        );
      }
    });


    this.noticiaService.findAll().subscribe(
      noticia => {
        this.noticias = noticia;
      }
    );
  }

  // ngOnInit(): void {
  //   // console.log("this.activeroute.snapshot.data");
  //   // console.log(this.activeroute.snapshot.data['name']);
  //   // this.activeroute.queryParamMap.subscribe(data =>{
  //   //   console.log(data.get('size'));
  //   //   console.log(data.get('order'));
  //   // });


  //   this.noticiaService.findAll().subscribe(
  //     noticia => {
  //       this.noticias = noticia;
  //     }
  //   );
  // }
}
