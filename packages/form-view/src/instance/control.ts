export class FormControl {

    // 控制对象的表单编码
    private readonly formCode:string;

    // 代理的form控制对象
    private readonly proxyTarget:any;

    constructor(formCode:string,target: any) {
        this.formCode = formCode;
        this.proxyTarget = target;
    }

    public getFormCode(){
        return this.formCode;
    }

    public getProxyTarget(): any {
        return this.proxyTarget;
    }

    public getFieldValue(name: string) {
        return this.proxyTarget.getFieldValue(name);
    }

    public getFieldsValue() {
        return this.proxyTarget.getFieldsValue();
    }

    public resetFields(nameList?: string[]) {
        this.proxyTarget.resetFields(nameList);
    }

    public setFieldsValue(values: any) {
        this.proxyTarget.setFieldsValue(values);
    }

    public setFieldValue(name: string, value: any) {
        console.log('setFieldValue', name, value);
        this.proxyTarget.setFieldValue(name,value);
    }

    public submit() {
        this.proxyTarget.submit();
    }

    public validateFields(nameList?: string[]) {
        return new Promise<any>((resolve) => {

        });
    }

    public hiddenFields(hidden:boolean,nameList?: string[]) {
        console.log('hiddenFields, nameList', nameList);
    }

    public requiredFields(required:boolean,nameList?: string[]) {
        console.log('requiredFields, nameList', nameList);
    }

}
