import {Form, Input} from "antd";
import React from "react";
import {FormItemProps} from "@/types/item";
import {useFormContext} from "@coding-form/form-presenter";

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