import {FormInstance} from "@/form/instance";


export interface FormFieldValidator {

    code: string;

    validator:  ( value: any, instance: FormInstance) => string | true;

}