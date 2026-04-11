import React from "react";
import {useFormContext} from "@/hooks";
import {FormInstance} from "@/instance";

interface FormSubViewProps {
    form?: FormInstance;
    formCode: string;
    Form: React.ComponentType<any>;
    review: boolean;
    onFinish?: (values:any,formCode:string) => void;
    onValuesChange?:(partial:any,values:any,formCode:string)=>void;
    onBlur?: (formCode:string) => void;
    children?:React.ReactNode;
    layout?:'horizontal' | 'vertical';
    className?: string;
}

export const FormSubView: React.FC<FormSubViewProps> = (props) => {
    const Form = props.Form;
    const formCode = props.formCode;
    const review = props.review;

    const {state, context} = useFormContext();

    const fields = React.useMemo(() => {
        const formList = [];
        formList.push(state);
        for (const subForm of state.subForms || []) {
            formList.push(subForm);
        }
        for (const subForm of formList) {
            if (subForm.code === formCode) {
                return subForm.fields;
            }
        }
        return [];
    }, [state]);

    const formControl = context.getFormControl(formCode);

    const formInstance = context.getFormInstance();

    const formTarget = formControl?.getProxyTarget();

    const layoutContext = context.getLayoutContext();

    React.useEffect(() => {
        const events = context.getEventContext().getLoadEvents();
        if (events && events.length > 0) {
            for (const event of events) {
                event.event(formInstance);
            }
        }
    }, []);

    React.useEffect(()=>{
        if(props.form){
            props.form.setPresenter(context.getPresenter());
        }
    },[props.form]);

    return (
        <Form
            form={formTarget}
            layout={props.layout}
            onBlur={()=>{
                props.onBlur?.(props.formCode);
            }}
            onFinish={(values:any)=>{
                props.onFinish?.(values,props.formCode);
            }}
            onValuesChange={(partial:any,values:any)=>{
                props.onValuesChange?.(partial,values,props.formCode);
            }}
        >
            {props.children}
            {layoutContext.render(props.formCode, fields, review, context)}
        </Form>
    )
}