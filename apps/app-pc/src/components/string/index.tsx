import {Form, Input} from "antd";
import React from "react";
import {type FormItemProps} from "@coding-form/form-view";

export const FormString: React.FC<FormItemProps> = (props) => {

    React.useEffect(()=>{
        if(props.version){
            console.log('refresh .... ');
        }
    },[props.version]);

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
                onChange={(event)=>{
                    props.onChange?.(event.target.value);
                }}
                onBlur={(event)=>{
                    props.onBlur?.(event.target.value);
                }}
            />
        </Form.Item>
    )

}