import {FormInstance} from "@/instance";
import {FormMeta} from "@/types";

export const createFormInstance = (meta:FormMeta) => {

    return new FormInstance(meta);
}