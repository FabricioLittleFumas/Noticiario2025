import { AfterViewInit, ChangeDetectorRef, Component, Input, input, OnInit } from '@angular/core';

import { CommonModule, NgFor } from '@angular/common';
import { Noticia } from '../../../../model/noticia';
import { NoticiaService } from '../../../../service/noticiaService';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-noticia-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [NoticiaService],
  templateUrl: './noticia-home.component.html',
  styleUrl: './noticia-home.component.css'
})
export class NoticiaHomeComponent implements OnInit, AfterViewInit{
  @Input() noticias: Noticia[];

  constructor(private noticiaService: NoticiaService){
    this.noticias = new Array<Noticia>();
  }
  ngAfterViewInit(): void {
    
  }
 
     ngOnInit() {
     }

}
