import {DataType} from "./types";

/**
 *  附加属性
 */
export interface FieldAttribute{
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
    type:string;
    // 数据类型
    dateType: DataType;
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
export interface FlowForm {
    // 表单名称
    name: string;
    // 表单编码
    code: string;
    // 表单字段
    fields: FormField[];
    // 子表单
    subForms: FlowForm[];
}