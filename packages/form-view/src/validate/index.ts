import {FormFieldValidator} from "@coding-form/form-types";
import {FormInstance} from "@/instance";
import {FormField} from "@coding-form/form-types";
import {FormMeta} from "@coding-form/form-types";

export class FormValidate {

    private readonly meta: FormMeta;
    private readonly instance: FormInstance;
    private readonly validators: FormFieldValidator[];

    private readonly formList:FormMeta[];

    constructor(meta: FormMeta,instance: FormInstance,validators: FormFieldValidator[]) {
        this.meta = meta;
        this.instance = instance;
        this.validators = validators;

        this.formList = [];
        this.formList.push(meta);
        const subForms = meta.subForms || [];
        for (const subForm of subForms) {
            this.formList.push(subForm);
        }
    }


    private getFormField(fieldCode: string,formCode?:string): FormField|undefined {
        if (formCode) {
            for(const subForm of this.formList) {
                if (subForm.code === formCode) {
                    const fields = subForm.fields;
                    for (const field of fields) {
                        if(field.code === fieldCode) {
                            return field;
                        }
                    }
                }
            }
        }else {
            const fields = this.meta.fields;
            for (const field of fields) {
                if(field.code === fieldCode) {
                    return field;
                }
            }
        }
        return undefined;
    }


    public getValidatorRules(fieldCode: string,formCode?:string) {
        const rules = [];
        const formField = this.getFormField(fieldCode,formCode);
        if(formField && formField.hidden) {
            return [];
        }

        for (const validator of this.validators) {
            if(formCode){
                if (formCode ==validator.formCode && validator.fieldCode === fieldCode) {
                    rules.push({
                        validator: async (rule: any, value: any, callback: any) => {
                            const res = validator.validator(value,this.instance);
                            if (res !== true) {
                                return Promise.reject(new Error(res));
                            }
                        }
                    });
                }
            }else {
                if(validator.fieldCode === fieldCode){
                    rules.push({
                        validator: async (rule: any, value: any, callback: any) => {
                            const res = validator.validator(value,this.instance);
                            if (res !== true) {
                                return Promise.reject(new Error(res));
                            }
                        }
                    });
                }
            }
        }
        return rules;
    }

}