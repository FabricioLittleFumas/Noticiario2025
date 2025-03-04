import { Component, Input, input, OnInit } from '@angular/core';
import { Noticia } from '../../model/noticia';
import { CommonModule, NgFor } from '@angular/common';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-noticia-home',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductService],
  templateUrl: './noticia-home.component.html',
  styleUrl: './noticia-home.component.css'
})
export class NoticiaHomeComponent implements OnInit{
     @Input() noticias: Noticia[] = [];
     products: any[] = [];
     constructor(private productService: ProductService){

     }
     ngOnInit() {
      this.productService.getProductsSmall().then((products) => {
          this.products = products;
      });
    }

}
