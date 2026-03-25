import React from "react";
import {FormItemProps} from "@/types/item";
import {FormField} from "@/types";
import {FormContextScope} from "@/context";

export class FormItemFactory {

    private readonly cache: Map<string, React.ComponentType<FormItemProps>>;

    private constructor() {
        this.cache = new Map();
    }

    private static readonly instance = new FormItemFactory();

    public static getInstance() {
        return this.instance;
    }

    public register(type: string,componentType:React.ComponentType<FormItemProps>) {
        this.cache.set(type, componentType);
    }


    public getItem(type: string) {
        return this.cache.get(type);
    }


    public render(formCode:string,
                  formField:FormField,
                  layout:'horizontal' | 'vertical',
                  readOnly:boolean,
                  context:FormContextScope){

        const formItemProps: FormItemProps = {
            ...formField,
            readOnly: readOnly,
            name:formField.code,
            label:formField.name
        };

        const FormItem = FormItemFactory.getInstance().getItem(formField.type);

        const eventContext = context.getEventContext();

        const instance = context.getFormInstance();

        const fieldKey = {
            formCode,
            fieldCode:formField.code,
        }

        const handlerOnChange = (value:any)=>{
            formItemProps.onChange?.(value);
            eventContext.handlerOnChange(instance,fieldKey, value);
        }

        const handlerOnBlur = (value:any) => {
            formItemProps.onBlur?.(value);
            eventContext.handlerOnBlur(instance,fieldKey,value);
        }

        if (FormItem) {
            const rules = context.getValidate().getValidatorRules(fieldKey);
            return (
                <FormItem
                    {...formItemProps}
                    rules={rules}
                    onChange={handlerOnChange}
                    onBlur={handlerOnBlur}
                    layout={layout}
                />
            )
        }
    }

}