import {useContext} from "react";
import {FormContext} from "@/context";

export const useFormContext = ()=> {
    return useContext(FormContext);
}