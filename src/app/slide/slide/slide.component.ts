import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { ButtonModule } from 'primeng/button'; 
import { TagModule } from 'primeng/tag'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide',
  imports: [CarouselModule, ButtonModule, TagModule, CommonModule],
  providers:[ProductService],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css',
  standalone: true
})
export class SlideComponent  implements OnInit {
  products: any[] = [];

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsSmall().then((products) => {
          this.products = products;
      });

     this.responsiveOptions = [
          {
              breakpoint: '1400px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '1199px',
              numVisible: 3,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '575px',
              numVisible: 1,
              numScroll: 1
          }
      ]
  }

  getSeverity(status: string): any {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warn';
          case 'OUTOFSTOCK':
              return 'danger';
      }
  }
}