import { ISkillCreate } from "./ISkill";

export interface IWilderCreate {
    name: string;
    city: string;
    skills: ISkillCreate[];
}
export interface IWilder {
    name: string;
    city: string;
    skills: ISkillCreate[];
    __v?: number;
}