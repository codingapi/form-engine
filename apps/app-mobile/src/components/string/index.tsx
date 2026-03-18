import {Form, Input} from "antd-mobile";
import React from "react";
import {useFormContext,type FormItemProps} from "@coding-form/form-view";

export const FormString: React.FC<FormItemProps> = (props) => {

    const context = useFormContext();

    const rules = context.validate.getValidatorRules(props.code);

    return (
        <Form.Item
            name={props.code}
            key={props.code}
            label={props.name}
            required={props.required}
            hidden={props.hidden}
            rules={rules}
        >
            <Input placeholder={props.placeholder}/>
        </Form.Item>
    )

}