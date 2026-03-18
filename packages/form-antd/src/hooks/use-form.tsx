import {Form} from "antd";
import {FormInstance} from "@coding-form/form-presenter";
import React from "react";

export const useForm = () => {
    const [form] = Form.useForm();
    return React.useMemo(()=>{
        return new FormInstance(form);
    },[])
}