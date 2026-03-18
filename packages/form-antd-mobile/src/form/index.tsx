import React from "react";
import {FormViewProps} from "@coding-form/form-types";
import {FormInstance, FormInstanceContext} from "@coding-form/form-presenter";
import {Form} from "antd-mobile";
import {FormItemProps} from "@/types/item";
import {FormFactory} from "@/factory";

export const FormAntdView: React.FC<FormViewProps> = (props) => {

    const [form] = Form.useForm();

    const instance = React.useMemo(() => {
        if (props.form) {
            return props.form as FormInstance;
        } else {
            return new FormInstance(form);
        }
    }, [props.form]);

    const fields = props.meta.fields || [];

    const review = props.review || false;

    return (
        <FormInstanceContext.Provider value={instance}>
            <Form
                form={instance.getProxyTarget()}
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
        </FormInstanceContext.Provider>
    )
}