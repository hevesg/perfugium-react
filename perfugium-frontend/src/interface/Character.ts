import {ObjectWithName} from "./CommonInterfaces";

export interface Equipment extends ObjectWithName {
    quantity?: number;
    weight?: number;
    location?: number;
}

export default interface Character extends ObjectWithName {
    id: string;
    game: string;
    description: string;
    created: number;
    modified: number;
}
