import { Injectable } from "@angular/core";


@Injectable()
export class ConstRequisicao{
    static baseUrl: string = "http://localhost:3000/";
    static baseRequest: string = "Noticias";
    static UrlNoticia: string = ConstRequisicao.baseUrl + ConstRequisicao.baseRequest;
  
}