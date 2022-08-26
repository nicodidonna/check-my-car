import { AutoInterface } from "src/app/@auto/interfaces/AutoInterface";

export interface ManutenzioneInterface{
    dataManutenzione: Date,
    prezzo?: number,
    officina: string,
    descrizione: string,
    auto: AutoInterface;
}