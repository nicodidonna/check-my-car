import { AutoInterface } from "src/app/@auto/interfaces/AutoInterface"

export interface TagliandoInterface{
    dataTagliando: Date,
    prezzo?: number,
    officina: string,
    descrizione: string,
    kilometraggio?: number
    auto?: AutoInterface;
}