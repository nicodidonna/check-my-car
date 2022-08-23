import { Auto } from "src/app/@auto/class/AutoClass";

export interface RevisioneInterface{
    dataRevisione : Date,
    dataProssimaRevisione : Date,
    prezzo? : number,
    officina : string,
    kilometraggio : number,
    auto : Auto
}