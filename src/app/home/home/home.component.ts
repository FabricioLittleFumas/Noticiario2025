import { Component } from '@angular/core';
import { NavegacaoComponent } from '../../navegacao/navegacao/navegacao.component';

@Component({
  selector: 'app-home',
  imports: [NavegacaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {

}
