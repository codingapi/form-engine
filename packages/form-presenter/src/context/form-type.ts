import {FormType} from "@coding-form/form-types";

/**
 *  表单类型上下文对象
 */
export class FormTypeContext {

    private types: FormType[];

    private constructor() {
        this.types = [];
    }

    private static instance = new FormTypeContext();

    public static getInstance() {
        return this.instance;
    }

    public register(types: FormType[]) {
        this.types = types;
    }

    public getTypes() {
        return this.types;
    }

    public getOptions() {
        return this.types.map(item => {
            return {
                label: item.name,
                value: item.type
            }
        })
    }

    public getType(type: string) {
        for (const item of this.types) {
            if (type === item.type) {
                return item;
            }
        }
        return null;
    }
}