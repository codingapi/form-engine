import {FieldKey} from "@/types";

/**
 * 表单事件
 */
export interface FormEvent {

    // 事件类型
    type:'load'|'change'|'blur';

    // 作用对象
    target?:FieldKey;

    // 事件触发
    event:(value?:any)=>void;

}


