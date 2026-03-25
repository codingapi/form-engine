import React from "react";
import {FormViewProps} from "@coding-form/form-types";
import {FormItemProps} from "@/types/item";
import {FormItemFactory} from "@/factory";
import {FormRegistry} from "@/register";
import {FormContext} from "@/context";
import {createFormContext} from "@/hooks";
import {Provider} from "react-redux";
import {formStore} from "@/store";


interface FormViewContentProps extends FormViewProps {
    Form: React.ComponentType<any>;
}

export const FormViewContent: React.FC<FormViewContentProps> = (props) => {

    const {Form} = props;

    const context = createFormContext(props);
    if (!context) {
        throw new Error('Form Component must register. ');
    }

    const instance = context.getInstance();

    const formInstance = instance.getProxyTarget();

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

                    const FormItem = FormItemFactory.getInstance().getItem(field.type);
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


export const FormView: React.FC<FormViewProps> = (props) => {

    const Form = FormRegistry.getInstance().getFormComponent();
    if (!Form) {
        throw new Error('Form Component must register. ');
    }

    return (
        <Provider store={formStore}>
            <FormViewContent {...props} Form={Form}/>
        </Provider>
    )

}