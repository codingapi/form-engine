import {FormMeta} from "@/types";
import {FormRegistry} from "@/register";
import {FormControl} from "./control";


export class FormInstance {

    private readonly instanceList:FormControl[];

    private readonly meta:FormMeta;

    constructor(meta:FormMeta) {
        this.meta = meta;
        this.instanceList = [];

        this.initInstanceList();
    }

    private createInstance(formCode:string) {
        const form = FormRegistry.getInstance().getFormInstance()?.();
        if (!form) {
            throw new Error('Form Instance must register.');
        }

        return new FormControl(formCode,form);
    }


    private initInstanceList():void {

        const formList = [];
        formList.push(this.meta);

        const subFormList = this.meta.subForms || [];

        for(const subForm of subFormList) {
            formList.push(subForm);
        }

        for (const subForm of formList) {
            this.instanceList.push(this.createInstance(subForm.code));
        }
    }

    public getFormControl(formCode?:string){
        if(formCode){
            for(const item of this.instanceList){
                if(item.getFormCode() === formCode){
                    return item;
                }
            }
        }else {
            if(this.instanceList.length>0){
                return this.instanceList[0];
            }
        }
        return null;
    }

    public getProxyTarget(formCode?:string): any {
        return this.getFormControl(formCode)?.getProxyTarget();
    }

    public getFieldValue(name: string,formCode?:string) {
        this.getFormControl(formCode)?.getFieldValue(name);
    }

    public getFieldsValue(formCode?:string) {
        return this.getFormControl(formCode)?.getFieldsValue();
    }

    public resetFields(nameList?: string[],formCode?:string) {
        this.getFormControl(formCode)?.resetFields(nameList);
    }

    public setFieldsValue(values: any,formCode?:string) {
        this.getFormControl(formCode)?.setFieldsValue(values);
    }

    public setFieldValue(name: string, value: any,formCode:string) {
        this.getFormControl(formCode)?.setFieldValue(name,value);
    }

    public submit(formCode?:string) {
        this.getFormControl(formCode)?.submit();
    }

    public validateFields(nameList?: string[],formCode?:string) {
       this.getFormControl(formCode)?.validateFields(nameList);
    }

    public hiddenFields(hidden:boolean,nameList?: string[],formCode?:string) {
        this.getFormControl(formCode)?.hiddenFields(hidden);
    }

    public requiredFields(required:boolean,nameList?: string[],formCode?:string) {
        this.getFormControl(formCode)?.requiredFields(required);
    }

}