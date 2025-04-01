import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar'; 
@Component({
  selector: 'app-navegacao',
  imports: [Menubar, RouterModule,CommonModule],
  templateUrl: './navegacao.component.html',
  styleUrl: './navegacao.component.css',
  standalone: true
})
export class NavegacaoComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
              routerLink: '/home',
              styleClass: 'left-item'
            },
          {
              label: 'Noticia',
              icon: 'pi pi-star',
              routerLink: '/noticia',
            //   queryParams: {'size': 10,'order': 'asc'}
          },
          {
              label: 'Projects',
              icon: 'pi pi-search',
              items: [
                  {
                      label: 'Components',
                      icon: 'pi pi-bolt'
                  },
                  {
                      label: 'Blocks',
                      icon: 'pi pi-server'
                  },
                  {
                      label: 'UI Kit',
                      icon: 'pi pi-pencil'
                  },
                  {
                      label: 'Templates',
                      icon: 'pi pi-palette',
                      items: [
                          {
                              label: 'Apollo',
                              icon: 'pi pi-palette'
                          },
                          {
                              label: 'Ultima',
                              icon: 'pi pi-palette'
                          }
                      ]
                  }
              ]
          },
          {
              label: 'Contact',
              icon: 'pi pi-envelope',
              routerLink: '/contato',
              styleClass: 'right-item'
          },
          {
            label: 'Entrar',
            icon: 'pi pi-envelope',
            routerLink: '/contato',
            styleClass: 'right-items'
        },
          {
            label: 'Cadastrar',
            icon: 'pi pi-envelope',
            routerLink: '/contato',
            styleClass: 'right-items'
        }
      ]
  }
}