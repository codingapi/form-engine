import {Form, Input} from "antd";
import React from "react";
import {type FormItemProps, useFormContext} from "@coding-form/form-engine";

export const FormString: React.FC<FormItemProps> = (props) => {

    const {context} = useFormContext();

    const instance = context.getFormInstance();

    const triggerContext = context.getTriggerContext();

    React.useEffect(() => {
        if (props.version) {
            console.log('refresh .... ',props.version);
            triggerContext.trigger('refresh', instance, props.name)
                .then(list => {
                    let data:any = {} ;
                    for (const item of list) {
                        data = {
                            ...data,
                            ...item
                        }
                    }
                    console.log(data);
                });
        }
    }, [props.version]);

    return (
        <Form.Item
            name={props.name}
            key={props.name}
            label={props.label}
            required={props.required}
            hidden={props.hidden}
            rules={props.rules}
            layout={props.layout}
        >
            <Input
                placeholder={props.placeholder}
                onChange={(event) => {
                    props.onChange?.(event.target.value);
                }}
                onBlur={(event) => {
                    props.onBlur?.(event.target.value);
                }}
            />
        </Form.Item>
    )

}