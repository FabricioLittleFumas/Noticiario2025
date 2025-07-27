import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../../../model/noticia';
import { NoticiaService } from '../../../../service/noticiaService';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-noticia-lateral',
  imports: [CommonModule, RouterModule],
  templateUrl: './noticia-lateral.component.html',
  standalone: true,
  styleUrl: './noticia-lateral.component.css'
})
export class NoticiaLateralComponent implements OnInit{
  @Input() noticias: Noticia[];

  constructor(private noticiaService: NoticiaService){
    this.noticias = new Array<Noticia>();
  }
  ngOnInit(): void {

    
  
  }



  
}
