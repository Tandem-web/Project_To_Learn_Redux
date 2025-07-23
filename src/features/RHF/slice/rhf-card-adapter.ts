import { createEntityAdapter, EntityAdapter } from "@reduxjs/toolkit";

export const CardCategory = {
    EduTech: 'edu-tech',
    FinTech: 'fin-tech',
    AdTech: 'ad-tech'    
} as const;

export type CardCategory = typeof CardCategory[keyof typeof CardCategory];

export interface CardRHF{
    id: string;
    title: string;
    description: string;
    category: CardCategory;
    createdAt: number;
}

export const CardRHFAdapter: EntityAdapter<CardRHF, string> = createEntityAdapter<CardRHF, string>({
    selectId: (card) => card.id,
    sortComparer: (a, b) => b.createdAt - a.createdAt,
})

