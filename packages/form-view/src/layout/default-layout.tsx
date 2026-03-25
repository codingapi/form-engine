import React from "react";
import {FormLayoutProps} from "@/types";
import {FormItemFactory} from "@/factory";

export const DefaultLayout: React.FC<FormLayoutProps> = (props) => {

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