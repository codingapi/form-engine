import {registerFormItems} from "@coding-form/form-view";
import {FormString} from "@/components/string";
import {Form} from "antd";
import {LayoutFactory} from "@coding-form/form-view";
import {CardFormLayout} from "@/layout/card-form-layout.tsx";

export const registerForms = () => {

    registerFormItems(Form,[
        {
            type: 'string',
            componentType:FormString
        }
    ]);

    LayoutFactory.getInstance().register('card',CardFormLayout);
}