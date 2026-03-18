export type NamePath = string | number | boolean | (string | number | boolean)[];


export interface FormInstance {
    getFieldValue: (name: NamePath) => any;
    getFieldsValue: () => any;
    resetFields: (nameList?: NamePath[]) => void;
    setFieldsValue: (values: any) => void;
    setFieldValue: (name: NamePath, value: any) => void;
    submit: () => void;
    validateFields(nameList?: NamePath[]): Promise<any>;
    hiddenFields: (nameList?: NamePath[]) => void;
    showFields: (nameList?: NamePath[]) => void;
}