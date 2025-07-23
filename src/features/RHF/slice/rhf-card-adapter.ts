import { createEntityAdapter, EntityAdapter } from "@reduxjs/toolkit";
import { CardRHF } from "../types/types";

export const CardRHFAdapter: EntityAdapter<CardRHF, CardRHF["id"]> = createEntityAdapter<CardRHF, CardRHF["id"]>({
    selectId: (card) => card.id,
    sortComparer: (a, b) => b.createdAt - a.createdAt,
})

