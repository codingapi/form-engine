import {useFormRegister} from "@coding-form/form-view";
import {FormString} from "@/components/string";
import {Form} from "antd";

export const registerForms = () => {

    useFormRegister(Form,[
        {
            type: 'string',
            componentType:FormString
        }
    ]);
}