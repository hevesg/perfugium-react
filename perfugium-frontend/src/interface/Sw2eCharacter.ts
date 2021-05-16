import {ObjectWithName} from "./CommonInterfaces";
import {D6Attribute, D6Weapon} from "./D6Character";
import Character, {Equipment} from "./Character";

export interface Sw2eCharacterInfo {
    gender: string;
    species: string;
    homeWorld: string;
    age: number;
    height: number;
    weight: number;
    physicalDescription: string;
    personality: string;
    background: string;
    objectives: string;
    quote: string;
}

export enum Sw2eAttributes {
    dexterity= "dexterity",
    knowledge = "knowledge",
    mechanical = "mechanical",
    perception = "perception",
    strength = "strength",
    technical = "technical"
}

export interface Sw2eAbility extends ObjectWithName {
    description?: string;
    value?: number;
    list?: string[];
}

export interface Sw2eForceInfo {
    sensitive: boolean;
    points: number;
    darkSide: number;
    abilities?: Sw2eAbility[];
}

export interface Sw2eInventory {
    equipment: Equipment[];
    credits: number;
}

export default interface Sw2eCharacter extends Character {
    attributes: {[key in Sw2eAttributes]: D6Attribute};
    general: Sw2eCharacterInfo;
    inventory: Sw2eInventory;
    weapons: D6Weapon[];
    force: Sw2eForceInfo;
    abilities?: Sw2eAbility[];
    speed: number;
}
