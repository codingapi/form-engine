import React from "react";
import {FormValidate} from "@/validate";
import {FormPresenter} from "@/presenters";
import {FormState} from "@/types";
import {EventContext} from "@/event";
import {FormInstance} from "@/instance";


export class FormContextScope {

    private readonly instance: FormInstance;
    private readonly validate: FormValidate;
    private readonly presenter: FormPresenter;
    private readonly eventContext: EventContext;

    constructor(instance: FormInstance,
                validate: FormValidate,
                eventContext: EventContext,
                presenter: FormPresenter) {
        this.instance = instance;
        this.presenter = presenter;
        this.eventContext = eventContext;
        this.validate = validate;
    }

    public initialState() {
        this.presenter.initialState();
    }

    public syncState(state: FormState) {
        this.presenter.syncState(state);
    }

    public getFormControl(formCode:string) {
        return this.instance.getFormControl(formCode);
    }


    public getPresenter() {
        return this.presenter;
    }

    public getEventContext() {
        return this.eventContext;
    }

    public getValidate() {
        return this.validate;
    }

}


export const FormContext = React.createContext<FormContextScope | undefined>(undefined);