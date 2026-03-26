import React from "react";
import {DataType} from "./types";
import {FormInstance} from "@/instance";
import {FormEvent, FormFieldValidator} from "@/types";

/**
 *  附加属性
 */
export interface FieldAttribute {
    // 属性key
    key: string;
    // 属性名称
    label?: string;
    // 属性值
    value?: string;
}

/**
 *  流程表单字段元数据
 */
export interface FormField {
    // 字段id
    id: string;
    // 字段名称
    name: string;
    // 字段编码
    code: string;
    // 字段类型
    type: string;
    // 数据类型
    dataType: DataType;
    // 是否隐藏
    hidden: boolean;
    // 是否必填
    required: boolean;
    // 默认值
    defaultValue?: string;
    // 输入提示
    placeholder?: string;
    // 提醒提示
    tooltip?: string;
    // 帮助提示
    help?: string;
    // 附加属性
    attributes?: FieldAttribute[];
}


/**
 * 流程表单元数据
 */
export interface FormMeta {
    // 表单名称
    name: string;
    // 表单编码
    code: string;
    // 表单字段
    fields: FormField[];
    // 子表单
    subForms?: FormMeta[];
}

/**
 *  字段唯一标识
 */
export interface FieldCode {
    /** 表单code **/
    formCode?: string;
    /** 字段code **/
    fieldCode: string;
}

/**
 *  表单布局
 */
export interface FormLayout {
    /** 所属表单 **/
    formCode: string;
    /** 布局类型 **/
    type: string,
    /** 表单属性 **/
    props:any
}


/**
 *  字段唯一标识
 */
export type FieldKey = string | FieldCode;

/**
 * 表单视图属性
 */
export interface FormViewProps {
    /** 表单定义 **/
    meta: FormMeta;
    /** 表单操控对象 */
    form?: FormInstance;
    /** 表单提交数据 **/
    onFinish?: (values:any,formCode?:string) => void;
    /** 表单失去焦点事件 **/
    onBlur?: (formCode?:string) => void;
    /** 表单头内容（表单外部） **/
    header?:React.ReactNode;
    /** 表单底部内容（表单外部） **/
    footer?:React.ReactNode;
    /** 主表单自定义内容（表单内部） **/
    children?:React.ReactNode;
    /** 是否预览模式 */
    review?: boolean;
    /** 字段校验逻辑 */
    validators?: FormFieldValidator[];
    /** 事件定义 **/
    events?: FormEvent[];
    /** 布局控制 **/
    layouts?: FormLayout[];
}