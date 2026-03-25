import React from "react";
import {FormInstance} from "@/instance";
import {FormValidate} from "@/validate";
import {FormPresenter} from "@/presenters";
import {FormState} from "@/types";


export class FormContextScope {

    private readonly instance: FormInstance;
    private readonly validate: FormValidate;
    private readonly presenter: FormPresenter;

    constructor(instance: FormInstance,validate: FormValidate, presenter: FormPresenter) {
        this.instance = instance;
        this.presenter = presenter;
        this.validate = validate;
    }

    public initialState(){
        this.presenter.initialState();
    }

    public syncState(state: FormState){
        this.presenter.syncState(state);
    }

    public getInstance(){
        return this.instance;
    }

    public getPresenter(){
        return this.presenter;
    }

    public getValidate(){
        return this.validate;
    }
}


export const FormContext = React.createContext<FormContextScope | undefined>(undefined);