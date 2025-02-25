import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavegacaoComponent } from './navegacao/navegacao/navegacao.component';
import { HomeComponent } from './home/home/home.component';
import { PgNaoEncontradaComponent } from './paginaNaoEncontrada/pg-nao-encontrada/pg-nao-encontrada.component';
import { ContatoComponent } from './contato/contato/contato.component';
import { NoticiaComponent } from './noticia/noticia/noticia.component';

export const routes: Routes = [
    {
        path: 'home', component:  HomeComponent
    },
    {
        path: '', redirectTo:  'home', pathMatch:'full'
    },
    {
        path: 'contato', component: ContatoComponent
    },
    {
        path: 'noticia', component: NoticiaComponent
    },
    {
        path: '**', component: PgNaoEncontradaComponent
    }
];
