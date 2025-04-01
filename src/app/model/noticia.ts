

export class Noticia{
    public id: number;
    public titulo: string;
    public subtitulo: string;
    public texto: string;
    public foto: string;
    public date: Date;

    *[Symbol.iterator]() {
        yield this.id;
        yield this.titulo;
        yield this.subtitulo;
        yield this.texto;
        yield this.date;
      }

    constructor(id: number, titulo : string, subtitulo : string, texto: string, foto: string){
        this.titulo = titulo;
        this.id = id;
        this.subtitulo = subtitulo;
        this.texto = texto;
        this.foto = foto;
        this.date = new Date();
    }
    public set setId(id: number){
        this.id = id;
    }

    public get getId(){
        return this.id;
    }

    public set setDate(date: Date){
        this.date = date;
    }

    public get getDate(): Date{
        return this.date;
    }

    public set setFoto(foto: string){
        this.foto = foto;
    }

    public get getFoto():string{
        return this.foto;
    }

    public set setTexto(texto: string){
        this.texto = texto;
    }

    public get getTexto(): string{
        return this.texto;
    }

    public get getsubtitulo(): string{
        return this.subtitulo;
    }

    public set setSubtitulo(subtitulo: string){
        this.subtitulo = subtitulo;
    }

    public get getTitulo(): string{
        return this.titulo;
    }

    public set setTitulo(titulo: string){
        this.titulo = titulo;
    }
}