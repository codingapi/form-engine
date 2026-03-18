import {Form} from "antd-mobile";
import {FormInstance} from "@coding-form/form-presenter";
import React from "react";

export const createAntdForm = () => {
    const [form] = Form.useForm();
    return React.useMemo(()=>{
        return new FormInstance(form);
    },[])
}