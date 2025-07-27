import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavegacaoComponent } from './navegacao/navegacao/navegacao.component';
import { HomeComponent } from './home/home/home.component';
import { PgNaoEncontradaComponent } from './paginaNaoEncontrada/pg-nao-encontrada/pg-nao-encontrada.component';
import { ContatoComponent } from './contato/contato/contato.component';
import { NoticiaComponent } from './noticia/noticia/noticia.component';
import { NoticiaDeftComponent } from './noticia-deft/noticia-deft.component';
import { NoticiaEspecificComponent } from './noticiaEspecifica/noticia-especific/noticia-especific.component';

export const routes: Routes = [
    {
        path: '', redirectTo:  'home', pathMatch:'full'
    },
    {
        path: 'home', component:  HomeComponent
    },
    {
        path: 'contato', component: ContatoComponent
    },
    {
        path: 'noticia', component: NoticiaDeftComponent,
        children: [
            // {path: '', redirectTo: '', pathMatch: 'full' },
            {path: '', component:NoticiaComponent, pathMatch: 'full' },
            {path: ':id', component: NoticiaEspecificComponent} 
        ]
    },
    {
        path: '**', component: PgNaoEncontradaComponent
    }
];
