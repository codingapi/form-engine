import {Form, Select} from "antd";
import React from "react";
import {type FormItemProps, useFormContext} from "@coding-form/form-engine";

export const FormSelect: React.FC<FormItemProps> = (props) => {

    const {context} = useFormContext();

    const instance = context.getFormInstance();

    const AttributeUtils = React.useMemo(() => {
        let data = {} as any;
        if (props.attributes && props.attributes.length > 0) {
            props.attributes.forEach(attribute => {
                if(attribute.label && attribute.value) {
                    const item = {
                        [attribute.label]: attribute.value,
                    }
                    // 合并数据到data
                    Object.assign(data, item);
                }
            });
        }
        return {
            getAttribute: (name: string) => {
                return data[name];
            }
        }
    }, [props.attributes]);

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
            <Select
                options={AttributeUtils.getAttribute('DataSource')}
                placeholder={props.placeholder}
                onChange={(value, option) => {
                    props.onChange?.(value, option);
                }}
                onBlur={(_) => {
                    const value = instance.getFieldValue(props.name);
                    props.onBlur?.(value);
                }}
            />
        </Form.Item>
    )

}