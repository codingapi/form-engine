import React from "react";
import {FormViewProps} from "@/types";
import {FormRegistry} from "@/register";
import {FormContext} from "@/context";
import {createFormContext} from "@/hooks";
import {Provider} from "react-redux";
import {formStore} from "@/store";
import {FormSubView} from "@/form/sub-view";


interface FormViewContentProps extends FormViewProps {
    Form: React.ComponentType<any>;
}


export const FormViewContent: React.FC<FormViewContentProps> = (props) => {

    const {Form} = props;

    const context = createFormContext(props);
    if (!context) {
        throw new Error('Form Component must register. ');
    }

    const meta = props.meta;

    const subFormList = meta.subForms || [];

    const review = props.review || false;

    const handleOnFinish = (values:any,formCode:string) => {
        props.onFinish?.(values,formCode);
    }

    const handleOnBlur = (formCode:string) => {
        props.onBlur?.(formCode);
    }

    return (
        <FormContext.Provider value={context}>
            {props.header}
            <FormSubView
                Form={Form}
                formCode={meta.code}
                review={review}
                onFinish={handleOnFinish}
                onBlur={handleOnBlur}
                children={props.children}
                layout={props.layout}
            />
            {subFormList && subFormList.map(item=>{
                return (
                    <FormSubView
                        Form={Form}
                        formCode={item.code}
                        review={review}
                        onFinish={handleOnFinish}
                        onBlur={handleOnBlur}
                        layout={props.layout}
                    />
                )
            })}
            {props.footer}
        </FormContext.Provider>
    )
}


export const FormView: React.FC<FormViewProps> = (props) => {

    const Form = FormRegistry.getInstance().getFormComponent();
    if (!Form) {
        throw new Error('Form Component must register. ');
    }

    return (
        <Provider store={formStore}>
            <FormViewContent {...props} Form={Form}/>
        </Provider>
    )

}