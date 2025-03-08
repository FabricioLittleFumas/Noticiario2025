import { AfterViewInit, Component, Input, input, OnInit } from '@angular/core';
import { Noticia } from '../../model/noticia';
import { CommonModule, NgFor } from '@angular/common';
import { ProductService } from '../../product.service';
import { NoticiaService } from '../../service/noticiaService';

@Component({
  selector: 'app-noticia-home',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './noticia-home.component.html',
  styleUrl: './noticia-home.component.css'
})
export class NoticiaHomeComponent implements OnInit{
     @Input() noticias:  Array<Noticia>;
    
     constructor(){
// findAll
        this.noticias = new Array<Noticia>();
     }
 
     ngOnInit() {
  
    }

}
