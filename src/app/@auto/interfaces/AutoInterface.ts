import { AssicurazioneInterface } from "src/app/@assicurazione/interfaces/AssicurazioneInterface";
import { BolloInterface } from "src/app/@bollo/interfaces/BolloInterface";
import { ManutenzioneInterface } from "src/app/@manutenzione/interfaces/ManutenzioneInterface";
import { RevisioneInterface } from "src/app/@revisione/interfaces/RevisioneInterface";
import { TagliandoInterface } from "src/app/@tagliando/interfaces/TagliandoInterface";

export interface AutoInterface{
    marca: string,
    modello: string,
    targa: string,
    cilindrata: number,
    cavalli: number,
    annoImmatricolazione: number,
    alimentazione: string,
    tagliandi?: Array<TagliandoInterface>,
    revisioni?: Array<RevisioneInterface>,
    assicurazioni?: Array<AssicurazioneInterface>,
    bolli?: Array<BolloInterface>,
    manutenzione?: Array<ManutenzioneInterface>
}