import {FormField} from "@/types/view";

export type StateField = FormField & {version?:number};

export interface FormState {
    code: string;
    fields: StateField[];
    subForms?: FormState[];
}

export const initialState: FormState = {
    code: '',
    fields: [],
};