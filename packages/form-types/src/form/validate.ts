import {FormInstance} from "@/form/instance";


/**
 * 字段校验器
 */
export interface FormFieldValidator {

    /** 表单名称 **/
    formCode?: string;

    /** 字段名 **/
    fieldCode: string;

    /** 校验函数 **/
    validator: (value: any, instance: FormInstance) => string | true;

}