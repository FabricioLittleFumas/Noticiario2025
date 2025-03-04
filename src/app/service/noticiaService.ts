import { Injectable } from "@angular/core";
import { Noticia } from "../model/noticia";

@Injectable()
export class NoticiaService{

    private noticias: Array<Noticia>;

    constructor(){
        this.noticias = new Array<Noticia>();
    }

    public populaNoticias(): Array<Noticia>{
        this.noticias.push(new Noticia("Título da noticia 1", "Subtitulo da Noticia 1", "texto da noticia 1", "foto 1"));
        this.noticias.push(new Noticia("Título da noticia 2", "Subtitulo da Noticia 2", "texto da noticia 2", "foto 2"));
        this.noticias.push(new Noticia("Título da noticia 3", "Subtitulo da Noticia 3", "texto da noticia 3", "foto 3"));
        this.noticias.push(new Noticia("Título da noticia 4", "Subtitulo da Noticia 4", "texto da noticia 4", "foto 4"));
        this.noticias.push(new Noticia("Título da noticia 5", "Subtitulo da Noticia 5", "texto da noticia 5", "foto 5"));
        this.noticias.push(new Noticia("Título da noticia 6", "Subtitulo da Noticia 6", "texto da noticia 6", "foto 6"));
        this.noticias.push(new Noticia("Título da noticia 7", "Subtitulo da Noticia 7", "texto da noticia 7", "foto 7"));
        this.noticias.push(new Noticia("Título da noticia 8", "Subtitulo da Noticia 8", "texto da noticia 8", "foto 8"));
        return this.noticias;
    }

    public getAllNoticias(): Noticia[]{
        return this.populaNoticias();
    }

}