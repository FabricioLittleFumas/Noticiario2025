import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Noticia } from '../../../../model/noticia';


@Component({
  selector: 'app-slide-abaixo',
  imports: [CommonModule],
  templateUrl: './slide-abaixo.component.html',
  styleUrl: './slide-abaixo.component.css'
})
export class SlideAbaixoComponent implements OnChanges{
  @Input() noticias: Noticia[];
  @Input() indexa: number;
  constructor(){
    this.noticias = new Array<Noticia>();
    this.indexa = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.indexa = changes['indexa'].currentValue;
  }

}
