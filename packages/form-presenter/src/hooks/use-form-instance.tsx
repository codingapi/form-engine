import {useContext} from "react";
import {FormInstanceContext} from "@/context";

export const useFormInstance = ()=> {
    return useContext(FormInstanceContext);
}
