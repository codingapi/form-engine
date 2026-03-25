import {FormField, FormLayout} from "@/types/view";
import {FormContextScope} from "@/context";

/**
 *  布局属性
 */
export interface FormLayoutProps{
    /** 表单编码 **/
    formCode:string;
    /** 表单属性 **/
    layout:FormLayout;
    /** 表单字段 **/
    fields:FormField[];
    /** 是否预览模式 **/
    review:boolean;
    /** form上下文对象 **/
    context:FormContextScope;
}