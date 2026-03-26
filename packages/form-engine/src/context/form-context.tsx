import React from "react";
import {FormValidate} from "@/validate";
import {FormPresenter} from "@/presenters";
import {FormState, FormViewProps} from "@/types";
import {EventContext} from "@/event";
import {FormInstance} from "@/instance";
import {LayoutContext} from "@/layout";


export class FormContextScope {

    private readonly props:FormViewProps;
    private readonly instance: FormInstance;
    private readonly validate: FormValidate;
    private readonly presenter: FormPresenter;
    private readonly eventContext: EventContext;
    private readonly layoutContext: LayoutContext;

    constructor(props:FormViewProps,
                instance: FormInstance,
                validate: FormValidate,
                eventContext: EventContext,
                layoutContext: LayoutContext,
                presenter: FormPresenter) {
        this.props = props;
        this.instance = instance;
        this.presenter = presenter;
        this.eventContext = eventContext;
        this.validate = validate;
        this.layoutContext = layoutContext;
        this.instance.setPresenter(presenter);
    }

    public initialState() {
        this.presenter.initialState(this.props.meta);
    }

    public syncState(state: FormState) {
        this.presenter.syncState(state);
    }

    public getFormControl(formCode:string) {
        return this.instance.getFormControl(formCode);
    }

    public getLayoutContext() {
        return this.layoutContext;
    }

    public getFormInstance(){
        return this.instance;
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