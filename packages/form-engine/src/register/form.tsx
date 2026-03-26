import React from "react";


export class FormRegistry {

    private formComponent :React.ComponentType<any> | undefined;
    private formInstance: (() => any) | undefined ;

    private constructor() {

    }

    private static readonly instance = new FormRegistry();

    public static getInstance() {
        return this.instance;
    }

    public register(formComponent: React.ComponentType<any>,formInstance:()=>any) {
        this.formComponent = formComponent;
        this.formInstance = formInstance;
    }

    public getFormComponent() {
        return this.formComponent;
    }

    public getFormInstance() {
        return this.formInstance;
    }

}