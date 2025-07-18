import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            return {
                ...state,
                value: state.value + 1
            }
        },
        decrement: (state) => {
            return {
                ...state,
                value: state.value - 1
            }
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                value: state.value + action.payload
            }
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                value: state.value - action.payload
            }
        },
    },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;