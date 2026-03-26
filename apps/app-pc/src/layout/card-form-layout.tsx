import React from "react";
import {type FormLayoutProps,type FormLayout} from "@coding-form/form-view";
import {FormItemFactory} from "@coding-form/form-view";
import {Col, Row} from "antd";


/** 字段排版 **/
export interface FieldLayout {
    /** 字段名称 **/
    code: string;
    /** 大小排版 **/
    span: number;
}

/**
 * 卡片布局
 */
export interface CardLayout {
    /** 布局标题 **/
    title: string;
    /** 布局方向 **/
    layout: 'horizontal' | 'vertical';
    /** 展示字段 **/
    fields: FieldLayout[];
    /** 主要字段 **/
    mainFields: string[];
}


type CardFormLayoutProps = Omit<FormLayoutProps, 'layout'> & {
    layout: Omit<FormLayout, 'props'> & {
        props: CardLayout;
    };
};

export const CardFormLayout:React.FC<CardFormLayoutProps> = (props: CardFormLayoutProps) => {

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

            {fieldLayouts.map((item)=>{
                return fieldRender(item);
            })}

        </Row>
    )
}