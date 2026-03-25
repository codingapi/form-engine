import React from "react";
import {FormContext, FormContextScope} from "@/context";
import { FormViewProps } from "@coding-form/form-types";
import { useDispatch, useSelector } from "react-redux";
import {FormReduxState, updateState} from "@/store";
import {FormPresenter} from "@/presenters";
import {FormRegistry} from "@/register";
import {FormInstance} from "@/instance";
import {FormValidate} from "@/validate";

export const useFormContext = ()=> {
    const value = React.useContext(FormContext);
    if (!value) {
        throw new Error('useFormContext must be used within the FormContext');
    }
    return value;
}


export const createFormContext = (props:FormViewProps)=> {

    const ref = React.useRef<FormContextScope | undefined>(undefined);

    const dispatch = useDispatch();

    const state = useSelector((state: FormReduxState) => state.form);

    if (!ref.current) {
        const presenter = new FormPresenter(
            props,
            state,
            (prevState) => {
                dispatch(updateState(prevState));
                return prevState;
            },
        );
        const form = FormRegistry.getInstance().getFormInstance()?.();
        if (!form) {
            throw new Error('Form Instance must register.');
        }

        const instance = props.form ? props.form as FormInstance : new FormInstance(form);

        const validate = new FormValidate(props.meta, instance,props.validators || []);
        ref.current = new FormContextScope(instance, validate,presenter);
        ref.current.initialState();
    }


    React.useEffect(()=>{
        if (ref.current) {
            ref.current.syncState(state);
        }
    },[state]);


    return ref.current;

}