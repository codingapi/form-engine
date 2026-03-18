import {FormFieldValidator} from "@coding-form/form-types";
import {FormInstance} from "@/instance";

export class FormValidate {

    private readonly validators: FormFieldValidator[];
    private readonly instance: FormInstance;

    constructor(validators: FormFieldValidator[], instance: FormInstance) {
        this.validators = validators;
        this.instance = instance;
    }


    public getValidatorRules(code: string) {

        const rules = [];

        for (const validator of this.validators) {
            if (validator.code === code) {
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
        return rules;


    }

}