import { Auto } from "src/app/@auto/class/AutoClass";
import { RevisioneInterface } from "../interfaces/RevisioneInterface";

export class Revisione implements RevisioneInterface{
    dataRevisione : Date | null | undefined;
    dataProssimaRevisione : Date | null | undefined;
    prezzo? : number | null | undefined;
    officina : string | null | undefined;
    kilometraggio : number | null | undefined;
    auto : Auto | null | undefined;

    constructor(revisione: RevisioneInterface){
        this.dataRevisione = revisione.dataRevisione;
        this.dataProssimaRevisione = revisione.dataProssimaRevisione;
        this.prezzo = revisione.prezzo;
        this.officina = revisione.officina;
        this.kilometraggio = revisione.kilometraggio;
        this.auto = revisione.auto;
    }
}