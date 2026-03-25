import {FormField} from "@/types/view";

export interface FormState {
    code: string;
    fields: FormField[];
    subForms?: FormState[];
}

export const initialState: FormState = {
    code: '',
    fields: [],
};