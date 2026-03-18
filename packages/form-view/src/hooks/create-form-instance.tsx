import React from "react";
import {FormInstance} from "@/instance";
import {FormRegistry} from "@/register";

export const createFormInstance = () => {
    const form = FormRegistry.getInstance().getFormInstance()?.();
    if (!form) {
        throw new Error('Form Instance must register.');
    }

    return React.useMemo(() => {
        return new FormInstance(form);
    }, []);
}