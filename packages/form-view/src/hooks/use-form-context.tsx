import {useContext} from "react";
import {FormContext} from "@/context";

export const useFormContext = ()=> {
    const value = useContext(FormContext);
    if (!value) {
        throw new Error('useFormContext must be used within the FormContext');
    }
    return value;
}