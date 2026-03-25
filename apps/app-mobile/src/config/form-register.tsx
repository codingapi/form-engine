import {registerFormItems} from "@coding-form/form-view";
import {FormString} from "@/components/string";
import {Form} from "antd-mobile";

export const registerForms = () => {

    registerFormItems(Form,[
        {
            type: 'string',
            componentType:FormString
        }
    ]);
}