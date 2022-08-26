import { Auto } from "src/app/@auto/class/AutoClass";
import { ManutenzioneStraordinariaInterface } from "../interfaces/ManutenzioneInterface";

export class ManutenzioneStraordinaria implements ManutenzioneStraordinariaInterface{
    dataManutenzione: Date | null | undefined;
    prezzo?: number | null | undefined;
    officina: string | null | undefined;
    descrizione: string | null | undefined;
    auto: Auto | null | undefined;

    constructor(manutenzioneStraordinaria: ManutenzioneStraordinariaInterface){
        this.dataManutenzione = manutenzioneStraordinaria.dataManutenzione;
        this.prezzo = manutenzioneStraordinaria.prezzo;
        this.officina = manutenzioneStraordinaria.officina;
        this.descrizione = manutenzioneStraordinaria.descrizione;
        this.auto = manutenzioneStraordinaria.auto;
    }
}