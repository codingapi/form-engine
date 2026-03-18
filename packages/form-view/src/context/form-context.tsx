import React from "react";
import {FormInstance} from "@/instance";
import {FormValidate} from "@/validate";


export interface FormContextScope{

    instance:FormInstance;

    validate:FormValidate;

}


export const FormContext = React.createContext<FormContextScope|undefined>(undefined);