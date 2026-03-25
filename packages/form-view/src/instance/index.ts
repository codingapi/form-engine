import {FormInstance as FormInstanceInterface, NamePath} from "@coding-form/form-types";

export class FormInstance implements FormInstanceInterface {

    // 代理的form控制对象
    private readonly proxyTarget:any;

    constructor(target: any) {
        this.proxyTarget = target;
    }

    public getProxyTarget(): any {
        return this.proxyTarget;
    }

    public getFieldValue(name: NamePath) {
        return this.proxyTarget.getFieldValue(name);
    }

    public getFieldsValue() {
        return this.proxyTarget.getFieldsValue();
    }

    public resetFields(nameList?: NamePath[]) {
        this.proxyTarget.resetFields(nameList);
    }

    public setFieldsValue(values: any) {
        this.proxyTarget.setFieldsValue(values);
    }

    public setFieldValue(name: NamePath, value: any) {
        this.proxyTarget.setFieldValue(name,value);
    }

    public submit() {
        this.proxyTarget.submit();
    }

    public validateFields(nameList?: NamePath[]) {
        return new Promise<any>((resolve) => {

        });
    }

    public hiddenFields(hidden:boolean,nameList?: NamePath[]) {
        console.log('hiddenFields, nameList', nameList);
    }

    public requiredFields(required:boolean,nameList?: NamePath[]) {
        console.log('requiredFields, nameList', nameList);
    }


}