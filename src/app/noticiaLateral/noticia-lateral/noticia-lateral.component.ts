import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Noticia } from '../../model/noticia';

@Component({
  selector: 'app-noticia-lateral',
  imports: [CommonModule],
  templateUrl: './noticia-lateral.component.html',
  standalone: true,
  styleUrl: './noticia-lateral.component.css'
})
export class NoticiaLateralComponent {
  @Input() noticias: Noticia[];

  constructor(){
    this.noticias = new Array<Noticia>();
  }
}
