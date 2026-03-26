import {registerFormItems} from "@coding-form/form-engine";
import {FormString} from "@/components/string";
import {Form} from "antd";
import {LayoutRegister} from "@coding-form/form-engine";
import {CardFormLayout} from "@/layout/card-form-layout.tsx";

export const registerForms = () => {

    registerFormItems(Form,[
        {
            type: 'string',
            componentType:FormString
        }
    ]);

    LayoutRegister.getInstance().register('card',CardFormLayout);
}