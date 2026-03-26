import React from "react";
import {FormLayoutProps} from "@/types";
import {FormItemFactory} from "@/factory";

type DefaultLayoutProps  = Omit<FormLayoutProps, 'layout'>;

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {

    const fields = props.fields;
    const formCode = props.formCode;
    const review = props.review;
    const context = props.context;

    return (
        <>
            {
                fields.map(field => {
                    return FormItemFactory.getInstance().render(formCode, field,'vertical', review, context);
                })
            }
        </>
    )
}