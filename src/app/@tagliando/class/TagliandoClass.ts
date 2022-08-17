import { Auto } from "src/app/@auto/class/AutoClass";
import { TagliandoInterface } from "../interfaces/TagliandoInterface";

export class Tagliando implements TagliandoInterface{
    dataTagliando: Date | null | undefined;
    prezzo?: number | null | undefined;
    officina: string | null | undefined;
    descrizione: string | null | undefined;
    kilometraggio?: number | null | undefined;
    auto: Auto | null | undefined;

    constructor(tagliando: TagliandoInterface){
        this.dataTagliando = tagliando.dataTagliando;
        this.prezzo = tagliando.prezzo;
        this.officina = tagliando.officina;
        this.descrizione = tagliando.descrizione;
        this.kilometraggio = tagliando.kilometraggio;
        this.auto = tagliando.auto;
    }
}