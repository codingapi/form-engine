import {FieldKey} from "@/types";
import {FormInstance} from "@/instance";

/**
 * 表单触发
 */
export interface FormTrigger {

    // 触发类型
    type: string;

    // 作用对象
    target?: FieldKey;

    // 触发动作
    trigger: (instance: FormInstance) => Promise<any>;

}


