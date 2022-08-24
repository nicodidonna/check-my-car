import { Auto } from "src/app/@auto/class/AutoClass";
import { AssicurazioneInterface } from "../interfaces/AssicurazioneInterface";

export class Assicurazione implements AssicurazioneInterface{
    dataInizioAssicurazione : Date | null | undefined;
    dataFineAssicurazione : Date | null | undefined;
    prezzo : number | null | undefined;
    agenzia : string | null | undefined;
    auto : Auto | null | undefined;


    constructor(assicurazione: AssicurazioneInterface){
        this.dataInizioAssicurazione = assicurazione.dataInizioAssicurazione;
        this.dataFineAssicurazione = assicurazione.dataFineAssicurazione;
        this.prezzo = assicurazione.prezzo;
        this.agenzia = assicurazione.agenzia;
        this.auto = assicurazione.auto;
    }
}