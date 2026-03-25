import React from "react";
import type {FieldLayout, FormLayoutProps} from "@coding-form/form-view";
import {FormItemFactory} from "@coding-form/form-view";
import {Col, Row} from "antd";

export const CardFormLayout:React.FC<FormLayoutProps> = (props: FormLayoutProps) => {

    const layout = props.layout;
    const review = props.review;
    const context = props.context;
    const formCode = props.formCode;


    const fieldLayouts = layout.props.fields;

    const getFieldView = (fieldCode:string)=>{
        for (const field of props.fields){
            if(field.code === fieldCode){
                return FormItemFactory.getInstance().render(formCode, field,layout.props.layout, review, context);
            }
        }
        return null;
    }


    const fieldRender = (fieldLayout:FieldLayout)=>{
        const FormItem = getFieldView(fieldLayout.code);

        return (
            <Col span={fieldLayout.span}>
                {FormItem}
            </Col>
        )
    }


    return (
        <Row>
            <Col span={24}>
                {layout.props.title}
            </Col>

            {fieldLayouts.map(item=>{
                return fieldRender(item);
            })}

        </Row>
    )
}