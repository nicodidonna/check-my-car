import { Auto } from "src/app/@auto/class/AutoClass";

export interface AssicurazioneInterface{
    dataInizioAssicurazione : Date,
    dataFineAssicurazione : Date,
    prezzo : number,
    agenzia : string,
    auto : Auto
}