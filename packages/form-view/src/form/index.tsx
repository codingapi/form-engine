import React from "react";
import {FormViewProps} from "@coding-form/form-types";
import {FormItemProps} from "@/types/item";
import {FormFactory} from "@/factory";
import {FormRegistry} from "@/register";
import {FormValidate} from "@/validate";
import {FormInstance} from "@/instance";
import { FormContext } from "@/context";

export const FormView: React.FC<FormViewProps> = (props) => {

    const Form = FormRegistry.getInstance().getFormComponent();
    if (!Form) {
        throw new Error('Form Component must register. ');
    }

    const context = React.useMemo(() => {
        const form = FormRegistry.getInstance().getFormInstance()?.();
        if (!form) {
            throw new Error('Form Instance must register.');
        }

        const instance = props.form ? props.form as FormInstance : new FormInstance(form);

        return {
            instance,
            validate: new FormValidate(props.validators || [], instance),
        }
    }, [props.form]);


    const formInstance = context.instance.getProxyTarget();

    const fields = props.meta.fields || [];

    const review = props.review || false;

    return (
        <FormContext.Provider value={context}>
            <Form
                form={formInstance}
            >
                {fields.map(field => {

                    const formItemProps: FormItemProps = {
                        ...field,
                        readOnly: review
                    };

                    const FormItem = FormFactory.getInstance().getItem(field.type);
                    if (FormItem) {
                        return (
                            <FormItem {...formItemProps}/>
                        )
                    }
                })}
            </Form>
        </FormContext.Provider>
    )
}