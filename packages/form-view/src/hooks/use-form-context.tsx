import React from "react";
import {FormContext, FormContextScope} from "@/context";
import {FormViewProps} from "@/types";
import {useDispatch, useSelector} from "react-redux";
import {FormReduxState, updateState} from "@/store";
import {FormPresenter} from "@/presenters";
import {FormInstance} from "@/instance";
import {FormValidate} from "@/validate";
import {EventContext} from "@/event";

export const useFormContext = ()=> {
    const value = React.useContext(FormContext);
    const state = useSelector((state: FormReduxState) => state.form);
    if (!value) {
        throw new Error('useFormContext must be used within the FormContext');
    }
    return {
        state,
        context: value,
    };
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

        const instance = props.form ? props.form as FormInstance : new FormInstance(props.meta);

        const validate = new FormValidate(props.meta, instance,props.validators || []);

        const eventContext = new EventContext(props.events || []);
        ref.current = new FormContextScope(instance, validate,eventContext,presenter);
        ref.current.initialState();
    }


    React.useEffect(()=>{
        if (ref.current) {
            ref.current.syncState(state);
        }
    },[state]);


    return ref.current;

}