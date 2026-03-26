export type NamePath = string | string[];

/**
 *  表单实例对象能力
 */
export interface FormInstanceInterface {
    /** 获取表某个单值 **/
    getFieldValue: (name: NamePath, formCode?: string) => any;
    /** 获取表所有值 **/
    getFieldsValue: (formCode?: string) => any;
    /** 重置表单值 **/
    resetFields: (fields?: NamePath[], formCode?: string) => void;
    /** 设置表单所有值 **/
    setFieldsValue: (values: any, formCode?: string) => void;
    /** 设置表单值 **/
    setFieldValue: (name: NamePath, value: any, formCode?: string) => void;
    /** 表单提交 **/
    submit: (formCode?: string) => void;
    /** 校验字段 **/
    validateFields: (nameList?: NamePath[] | NamePath, formCode?: string) => Promise<any>;
    /** 隐藏字段控制 **/
    hiddenFields: (hidden: boolean, nameList: NamePath[] | NamePath, formCode?: string) => void;
    /** 必填字段控制 **/
    requiredFields: (required: boolean, nameList: NamePath[] | NamePath, formCode?: string) => void;
    /** 刷新字段控制 **/
    refreshFields: (nameList: NamePath[] | NamePath, formCode?: string) => void;
}
