import {FormInstance as FormInstanceInterface, NamePath} from "@coding-form/form-types";

export class FormInstance implements FormInstanceInterface {

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

    public hiddenFields(nameList?: NamePath[]) {
        console.log('hiddenFields, nameList', nameList);
    }

    public showFields(nameList?: NamePath[]) {
        console.log('showFields, nameList', nameList);
    }

}