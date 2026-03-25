import {FormMeta} from "@/types";
import {FormRegistry} from "@/register";
import {FormControl} from "./control";
import {FormPresenter} from "@/presenters";


export class FormInstance {

    private readonly instanceList: FormControl[];

    private readonly meta: FormMeta;

    private presenter: FormPresenter|undefined;

    constructor(meta: FormMeta) {
        this.meta = meta;
        this.instanceList = [];

        this.initInstanceList();
    }

    private createInstance(formCode: string) {
        const form = FormRegistry.getInstance().getFormInstance()?.();
        if (!form) {
            throw new Error('Form Instance must register.');
        }

        return new FormControl(formCode, form);
    }

    public setPresenter(presenter: FormPresenter): void {
        this.presenter = presenter;
    }


    private initInstanceList(): void {

        const formList = [];
        formList.push(this.meta);

        const subFormList = this.meta.subForms || [];

        for (const subForm of subFormList) {
            formList.push(subForm);
        }

        for (const subForm of formList) {
            this.instanceList.push(this.createInstance(subForm.code));
        }
    }

    public getFormControl(formCode?: string) {
        if (formCode) {
            for (const item of this.instanceList) {
                if (item.getFormCode() === formCode) {
                    return item;
                }
            }
        } else {
            if (this.instanceList.length > 0) {
                return this.instanceList[0];
            }
        }
        return undefined;
    }

    public getProxyTarget(formCode?: string): any {
        return this.getFormControl(formCode)?.getProxyTarget();
    }

    public getFieldValue(name: string, formCode?: string) {
        this.getFormControl(formCode)?.getFieldValue(name);
    }

    public getFieldsValue(formCode?: string) {
        return this.getFormControl(formCode)?.getFieldsValue();
    }

    public resetFields(nameList?: string[], formCode?: string) {
        this.getFormControl(formCode)?.resetFields(nameList);
    }

    public setFieldsValue(values: any, formCode?: string) {
        this.getFormControl(formCode)?.setFieldsValue(values);
    }

    public setFieldValue(name: string, value: any, formCode: string) {
        this.getFormControl(formCode)?.setFieldValue(name, value);
    }

    public submit(formCode?: string) {
        this.getFormControl(formCode)?.submit();
    }

    public validateFields(nameList?: string[], formCode?: string) {
        const formControl = this.getFormControl(formCode);
        if (formControl) {
            return formControl.validateFields(nameList);
        }
        return new Promise<any>((resolve, reject) => {
            resolve({
                message: 'no found form instance.'
            });
        });
    }

    public hiddenFields(hidden: boolean, nameList: string[]|string, formCode?: string) {
        this.presenter?.hiddenFields(hidden, nameList, formCode);
    }

    public requiredFields(required: boolean, nameList: string[]|string, formCode?: string) {
        this.presenter?.requiredFields(required, nameList, formCode);
    }

}