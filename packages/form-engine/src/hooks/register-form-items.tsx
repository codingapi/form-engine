import React from "react";
import {FormRegistry} from "@/register";
import {FormItemFactory} from "@/factory";
import {FormItemProps} from "@/types";

interface FormItemType {
    type: string,
    componentType: React.ComponentType<FormItemProps>,
}


export const registerFormItems = (Form: any,
                                  items: FormItemType[]) => {

    const ref = React.useRef<any>();

    if (!ref.current) {
        FormRegistry.getInstance().register(Form, () => {
            const [form] = Form.useForm();
            return form;
        });

        for (const item of items) {
            FormItemFactory.getInstance().register(item.type, item.componentType);
        }
    }
}