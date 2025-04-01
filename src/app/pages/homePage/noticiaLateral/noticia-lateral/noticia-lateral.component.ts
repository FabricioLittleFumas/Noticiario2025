import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../../../model/noticia';
import { NoticiaService } from '../../../../service/noticiaService';


@Component({
  selector: 'app-noticia-lateral',
  imports: [CommonModule],
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
