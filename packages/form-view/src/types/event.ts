import {FieldKey} from "@/types";

/**
 * 表单事件
 */
export interface FormEvent {

}


/**
 * 初始化加载事件
 */
export interface OnLoadEvent extends FormEvent {

    /**
     * 事件定义
     */
    event:()=>void;

}

/**
 * 失去焦点事件
 */
export interface OnBlurEvent extends FormEvent {

    /**
     * 作用对象
     */
    target:FieldKey;

    /**
     * 事件定义
     */
    event:()=>void;

}


/**
 * 值变更事件
 */
export interface OnChangeEvent extends FormEvent {

    /**
     * 作用对象
     */
    target:FieldKey;

    /**
     * 事件定义
     */
    event:(value:any)=>void;
}


