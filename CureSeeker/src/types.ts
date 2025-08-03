export interface Disease {
    t: string;
    d: string;
}

export interface BodyPart {
    t: string;
    type: string;
    disease: Disease[];
}

export interface Alt1Window extends Window {
    alt1?: any;
} 