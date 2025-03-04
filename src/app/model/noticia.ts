

export class Noticia{
    private titulo: string;
    private subtitulo: string;
    private texto: string;
    private foto: string;
    private date: Date;


    constructor(titulo : string, subtitulo : string, texto: string, foto: string){
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.texto = texto;
        this.foto = foto;
        this.date = new Date();
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