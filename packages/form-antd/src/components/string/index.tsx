import {Form, Input} from "antd";
import React from "react";
import {FormItemProps} from "@/types/item";

export const FormString: React.FC<FormItemProps> = (props) => {

    return (
        <Form.Item
            name={props.code}
            key={props.code}
            label={props.name}
            required={props.required}
            hidden={props.hidden}
        >
            <Input placeholder={props.placeholder}/>
        </Form.Item>
    )

}