import {FieldAttribute} from "@/types/view";
import {DataType} from "@/types/types";

/**
 *  表单组件属性
 */
export interface FormItemProps{
    /** 表单字段 **/
    name:string;
    /** 表单标题 **/
    label?:string;
    /** 是否隐藏 **/
    hidden?:boolean;
    /** 是否必填 **/
    required?:boolean;
    /** 默认值 **/
    defaultValue?: string;
    /** 当前值 **/
    value?: string;
    /** 变更事件 **/
    onChange?: (value: string,option?:any) => void;
    /** 失去焦点事件 **/
    onBlur?: (value: string) => void;
    /** 输入提示信息 **/
    placeholder?:string;
    /** 提醒提示 **/
    tooltip?: string;
    /** 帮助提示 **/
    help?: string;
    /** 数据类型 **/
    dataType: DataType;
    /** 是否只读 **/
    readOnly?:boolean;
    /** 校验规则，Antd的规则 **/
    rules?:any[];
    /** 字段排版布局 **/
    layout?:'horizontal' | 'vertical';
    /** 刷新版本号 **/
    version?:number;
    /** 附加属性 **/
    attributes?: FieldAttribute[];
}