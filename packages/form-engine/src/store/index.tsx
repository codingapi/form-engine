import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialState, FormState} from "@/types";
import { original } from 'immer';

export type FormStoreAction = {
    updateState: (state: FormState, action: PayloadAction<Partial<FormState> | ((prev: FormState) => Partial<FormState>)>) => void;
}

export const formSlice = createSlice<FormState, FormStoreAction, "form", {}>({
    name: 'form',
    initialState: {
        ...initialState
    },
    reducers: {
        updateState: (state, action) => {
            if(typeof action.payload === 'function') {
                const currentState = original(state) as FormState;
                Object.assign(state, action.payload(currentState));
            }else {
                Object.assign(state, action.payload);
            }
        },
    },
});


export const {
    updateState,
} = formSlice.actions;
export const formStore = configureStore({
    reducer: {
        form: formSlice.reducer
    },
});

export type FormReduxState = ReturnType<typeof formStore.getState>;