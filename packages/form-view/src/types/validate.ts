import {FormInstance} from "@/instance";
import {FieldKey} from "@/types";

/**
 * 字段校验器
 */
export interface FormFieldValidator {

    /** 字段名 **/
    target: FieldKey;

    /** 校验函数 **/
    validator: (value: any, instance: FormInstance) => string | true;

}