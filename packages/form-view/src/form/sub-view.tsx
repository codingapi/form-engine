import {FormMeta} from "@/types";
import React from "react";
import {FormContextScope} from "@/context";
import {FormItemFactory} from "@/factory";

interface FormSubViewProps{
    meta:FormMeta;
    Form: React.ComponentType<any>;
    context:FormContextScope;
    review:boolean;
}


export const FormSubView:React.FC<FormSubViewProps> = (props)=>{
    const Form = props.Form;
    const formCode = props.meta.code;
    const fields = props.meta.fields;
    const review = props.review;
    const context = props.context;

    const formControl = context.getFormControl(formCode);

    const formTarget  = formControl?.getProxyTarget();


    React.useEffect(()=>{
        const events =  context.getEventContext().getLoadEvents();
        if (events && events.length > 0) {
            for (const event of events) {
                event.event();
            }
        }
    },[]);


    return (
        <Form
            form={formTarget}
        >
            {fields.map(field => {
                return FormItemFactory.getInstance().render(formCode,field,review,context);
            })}
        </Form>
    )
}