import React from "react";
import {FormViewProps} from "@coding-form/form-types";
import {FormContext, FormInstance, FormValidate} from "@coding-form/form-presenter";
import {Form} from "antd-mobile";
import {FormItemProps} from "@/types/item";
import {FormFactory} from "@/factory";

export const FormAntdView: React.FC<FormViewProps> = (props) => {

    const [form] = Form.useForm();

    const context = React.useMemo(() => {
        const instance = props.form ? props.form as FormInstance : new FormInstance(form);

        return {
            instance,
            validate: new FormValidate(props.validators || [],instance),
        }
    }, [props.form]);

    const fields = props.meta.fields || [];

    const review = props.review || false;

    return (
        <FormContext.Provider value={context}>
            <Form
                form={form}
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