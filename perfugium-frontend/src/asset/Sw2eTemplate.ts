import {Sw2eAttributes} from "../interface/Sw2eCharacter";

interface TemplateItem {
    id: Sw2eAttributes;
    label: string;
}

interface Sw2Template {
    attributes: TemplateItem[];
}

export const SW2E_TEMPLATE: Sw2Template = {
    attributes: [
        {
            id: Sw2eAttributes.dexterity,
            label: "Dexterity"
        },
        {
            id: Sw2eAttributes.knowledge,
            label: "Knowledge"
        },
        {
            id: Sw2eAttributes.mechanical,
            label: "Mechanical"
        },
        {
            id: Sw2eAttributes.perception,
            label: "Perception"
        },
        {
            id: Sw2eAttributes.strength,
            label: "Strength"
        },
        {
            id: Sw2eAttributes.technical,
            label: "Technical"
        },
    ]
}
