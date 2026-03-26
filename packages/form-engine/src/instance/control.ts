import { NamePath } from "@/types";

export class FormControl {

    // 控制对象的表单编码
    private readonly formCode: string;

    // 代理的form控制对象
    private readonly proxyTarget: any;

    constructor(formCode: string, target: any) {
        this.formCode = formCode;
        this.proxyTarget = target;
    }

    public getFormCode() {
        return this.formCode;
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

    public resetFields(nameList?: NamePath[]|NamePath) {
        this.proxyTarget.resetFields(nameList);
    }

    public setFieldsValue(values: any) {
        this.proxyTarget.setFieldsValue(values);
    }

    public setFieldValue(name: NamePath, value: any) {
        this.proxyTarget.setFieldValue(name, value);
    }

    public submit() {
        this.proxyTarget.submit();
    }

    public validateFields(nameList?: NamePath[]|NamePath) {
        return new Promise<any>((resolve, reject) => {
            this.proxyTarget
                .validateFields(nameList)
                .then((values: any) => {
                    resolve(values);
                })
                .catch(reject);
        });
    }

}
