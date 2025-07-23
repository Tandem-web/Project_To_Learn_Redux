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