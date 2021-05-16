import {KeyValue, ObjectWithName} from "./CommonInterfaces";
import Character, {Equipment} from "./Character";

export enum D6Difficulty {
    VeryEasy = 'VE',
    Easy = 'E',
    Medium = 'M',
    Hard = 'H',
    VeryHard = 'VH'
}

export interface D6WeaponRange {
    pb: number;
    short: number;
    medium: number;
    long: number;
}

export interface D6Weapon extends ObjectWithName {
    damage: number;
    strength?: boolean;
    charge?: number;
    range?: D6WeaponRange;
    difficulty?: D6Difficulty;
}

export interface D6Specialisation extends ObjectWithName {
    value: number;
}

export interface D6Skill extends ObjectWithName {
    value: number;
    specialisations?: D6Specialisation[];
}

export interface D6Attribute {
    value: number;
    skills: D6Skill[];
}

export default interface D6Character extends Character {
    attributes: KeyValue<D6Attribute>;
}
