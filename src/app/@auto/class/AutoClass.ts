import { AssicurazioneInterface } from "src/app/@assicurazione/interfaces/AssicurazioneInterface";
import { BolloInterface } from "src/app/@bollo/interfaces/BolloInterface";
import { ManutenzioneInterface } from "src/app/@manutenzione/interfaces/ManutenzioneInterface";
import { RevisioneInterface } from "src/app/@revisione/interfaces/RevisioneInterface";
import { TagliandoInterface } from "src/app/@tagliando/interfaces/TagliandoInterface";
import { AutoInterface } from "../interfaces/AutoInterface";

export class Auto implements AutoInterface{
    marca: string | null | undefined;
    modello: string | null | undefined;
    targa: string | null | undefined;
    cilindrata: number | null | undefined;
    cavalli: number | null | undefined;
    annoImmatricolazione: number | null | undefined;
    alimentazione: string | null | undefined;
    tagliandi?: Array<TagliandoInterface>;
    revisioni?: Array<RevisioneInterface>;
    assicurazioni?: Array<AssicurazioneInterface>;
    bolli?: Array<BolloInterface>;
    manutenzione?: Array<ManutenzioneInterface>;

    constructor(auto: AutoInterface) {
        this.marca = auto.marca;
        this.modello = auto.modello;
        this.targa = auto.targa;
        this.cilindrata = auto.cilindrata;
        this.cavalli = auto.cavalli;
        this.annoImmatricolazione = auto.annoImmatricolazione;
        this.alimentazione = auto.alimentazione;
        this.tagliandi = auto.tagliandi;
        this.revisioni = auto.revisioni;
        this.assicurazioni = auto.assicurazioni;
        this.bolli = auto.bolli;
        this.manutenzione = auto.manutenzione;
      }
}