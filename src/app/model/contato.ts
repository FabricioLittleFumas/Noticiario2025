

export class Contato{
    private email: string;
    private endereco: string;
    private date: Date;


    constructor(email : string, endereco : string){
        this.email = email;
        this.endereco = endereco;
        
        this.date = new Date();
    }
    public set setDate(date: Date){
        this.date = date;
    }

    public get getDate(): Date{
        return this.date;
    }

    public get getendereco(): string{
        return this.endereco;
    }

    public set setendereco(endereco: string){
        this.endereco = endereco;
    }

    public get getemail(): string{
        return this.email;
    }

    public set setemail(email: string){
        this.email = email;
    }
}