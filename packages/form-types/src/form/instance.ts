export type NamePath = string | number | boolean | (string | number | boolean)[];

/** 表单实例对象 **/
export interface FormInstance {
    /** 获取表单字段 **/
    getFieldValue: (name: NamePath) => any;
    /** 获取表单值 **/
    getFieldsValue: () => any;
    /** 重新赋值 **/
    resetFields: (nameList?: NamePath[]) => void;
    /** 设置表单值 **/
    setFieldsValue: (values: any) => void;
    /** 设置表单值 **/
    setFieldValue: (name: NamePath, value: any) => void;
    /** 提交表单 **/
    submit: () => void;
    /** 校验字段 **/
    validateFields(nameList?: NamePath[]): Promise<any>;
    /** 隐藏字段 **/
    hiddenFields: (hidden:boolean,nameList?: NamePath[]) => void;
    /** 必填字段 **/
    requiredFields: (required:boolean,nameList?: NamePath[]) => void;

}