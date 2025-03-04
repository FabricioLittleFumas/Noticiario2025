import { Injectable } from "@angular/core";
import { Contato } from "../model/contato";

@Injectable()
export class ContatoService{

    private contatos: Array<Contato>;

    constructor(){
        this.contatos = new Array<Contato>();
    }

    public populacontatos(): Array<Contato>{
        this.contatos.push(new Contato("Título da contato 1", "Subtitulo da contato 1"));
        this.contatos.push(new Contato("Título da contato 2", "Subtitulo da contato 2"));
        this.contatos.push(new Contato("Título da contato 3", "Subtitulo da contato 3"));
        this.contatos.push(new Contato("Título da contato 4", "Subtitulo da contato 4"));
        this.contatos.push(new Contato("Título da contato 5", "Subtitulo da contato 5"));
        this.contatos.push(new Contato("Título da contato 6", "Subtitulo da contato 6"));
        this.contatos.push(new Contato("Título da contato 7", "Subtitulo da contato 7"));
        this.contatos.push(new Contato("Título da contato 8", "Subtitulo da contato 8"));
        return this.contatos;
    }

    public getAllcontatos(): Contato[]{
        return this.populacontatos();
    }

}