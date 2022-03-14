import { ISkillCreate } from "./ISkill";

export interface IWilderCreate {
    name: string;
    city: string;
    skills: ISkillCreate[];
    _id: string
}