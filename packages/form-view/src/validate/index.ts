import {type FieldCode, FieldKey, FormFieldValidator} from "@/types";
import {FormInstance} from "@/instance";
import {FormField} from "@/types";
import {FormMeta} from "@/types";

export class FormValidate {

    private readonly meta: FormMeta;
    private readonly instance: FormInstance;
    private readonly validators: FormFieldValidator[];

    private readonly formList: FormMeta[];

    constructor(meta: FormMeta, instance: FormInstance, validators: FormFieldValidator[]) {
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


    private getFormField(fieldKey: FieldKey): FormField | undefined {
        if (typeof fieldKey === "string") {
            const fields = this.meta.fields;
            for (const field of fields) {
                if (field.code === fieldKey) {
                    return field;
                }
            }
        } else {
            const fieldCode = fieldKey as FieldCode;
            for (const subForm of this.formList) {
                if (subForm.code === fieldCode.formCode) {
                    const fields = subForm.fields;
                    for (const field of fields) {
                        if (field.code === fieldCode.fieldCode) {
                            return field;
                        }
                    }
                }
            }
        }
        return undefined;
    }


    private supportValidator(fieldKey: FieldKey,validator: FormFieldValidator) {
        if(validator.target === fieldKey) {
            return true
        }

        if(typeof validator.target === "string" && typeof fieldKey === "string") {
            return validator.target === fieldKey;
        }

        if(typeof validator.target === "string" && typeof fieldKey !== "string") {
            const fieldCode = fieldKey as FieldCode;
            return validator.target === fieldCode.fieldCode;
        }

        if(typeof validator.target !== "string" && typeof fieldKey === "string") {
            const targetField = validator.target as FieldCode;
            if(!targetField.formCode){
                return targetField.fieldCode = fieldKey;
            }
        }

        return false;
    }


    public getValidatorRules(fieldKey: FieldKey) {
        const rules = [];
        const formField = this.getFormField(fieldKey);
        if (formField && formField.hidden) {
            return [];
        }

        for (const validator of this.validators) {
            if (this.supportValidator(fieldKey, validator)) {
                rules.push({
                    validator: async (rule: any, value: any, callback: any) => {
                        const res = validator.validator(this.instance,value);
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