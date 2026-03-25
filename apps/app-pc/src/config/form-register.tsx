import {registerFormItems} from "@coding-form/form-view";
import {FormString} from "@/components/string";
import {Form} from "antd";

export const registerForms = () => {

    registerFormItems(Form,[
        {
            type: 'string',
            componentType:FormString
        }
    ]);
}