import { Injectable } from "@angular/core";
import { Noticia } from "../model/noticia";
import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
import { ConstRequisicao } from "../contantes/constRequisicao";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable(
    {
        providedIn:  'root',
        // useClass: NoticiaService,
        // deps: [HttpClientModule]
    }
)
export class NoticiaService{


    private dataSubject = new BehaviorSubject<any>(null);
    public data$ = this.dataSubject.asObservable();
  
    setData(data: any) {
      this.dataSubject.next(data);
    }
    
    private noticias: Array<Noticia>;

    constructor(private http: HttpClient){
        this.noticias = new Array<Noticia>();
    }
    
    public findAll(): Observable<Noticia[]>{
        return this.http.get<Noticia[]>(ConstRequisicao.UrlNoticia);
    }

    public findById(id: number): Observable<Noticia[]>{

        let params = new HttpParams()
        .set('id', id);

        return this.http.get<Noticia[]>(ConstRequisicao.UrlNoticia,{params: params});
    }

}