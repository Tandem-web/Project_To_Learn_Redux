import { createSlice } from "@reduxjs/toolkit";
import { CardRHFAdapter } from "./rhf-card-adapter";
import { v4 as uuidv4 } from 'uuid';
import { RootState } from "../../../store/store";
import { CardRHF } from "../types/types";


const initialState = CardRHFAdapter.getInitialState();

const CardRHFSlice = createSlice({
    name: 'rhfs',
    initialState: initialState,
    reducers: {
        addCard: {
            reducer: CardRHFAdapter.addOne,
            prepare: (card: Pick<CardRHF, 'title' | 'description' | 'category'>) => ({
                payload: {
                    id: uuidv4(),
                    title: card.title,
                    description: card.description,
                    category: card.category,
                    createdAt: Date.now()
                }
            })
        },
        removeCard: CardRHFAdapter.removeOne,
    }
})

export const { addCard, removeCard } = CardRHFSlice.actions;

export const selectors = CardRHFAdapter.getSelectors((state:RootState) => state.rhfs);

export default CardRHFSlice.reducer;

