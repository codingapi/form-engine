import {FieldKey} from "@/types";
import {FormInstance} from "@/instance";

/**
 * 表单事件
 */
export interface FormEvent {

    // 事件类型
    type:'load'|'change'|'blur';

    // 作用对象
    target?:FieldKey;

    // 事件触发
    event:(instance:FormInstance,value?:any,option?:any)=>void;

}


