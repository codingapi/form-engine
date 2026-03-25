import {Dispatch, FormField, FormMeta, FormState} from "@/types";

export class FormPresenter {
    private state: FormState;
    private readonly dispatch: Dispatch<FormState>;

    constructor(state: FormState, dispatch: Dispatch<FormState>) {
        this.state = state;
        this.dispatch = dispatch;
    }

    public syncState(state: FormState) {
        this.state = state;
    }

    public initialState(meta:FormMeta) {
        this.state = meta;
        this.dispatch(meta);
    }


    public hiddenFields(hidden: boolean, nameList: string[]|string, formCode?: string) {
        this.dispatch(prevState => {
            const subFormList = prevState.subForms || [];
            return {
                ...prevState,
                fields:prevState.fields.map(item=>{
                    if(formCode){
                        if(formCode===prevState.code){
                            return this.hiddenMapFields(hidden,item,nameList);
                        }
                    }else {
                        return this.hiddenMapFields(hidden,item,nameList);
                    }
                    return item;
                }),
                subForms:subFormList.map(item=>{
                    if(formCode){
                        if(formCode===item.code){
                            return {
                                ...item,
                                fields:item.fields.map(item=>{
                                    return this.hiddenMapFields(hidden,item,nameList);
                                })
                            }
                        }
                    }
                    return item;
                })
            }
        })
    }

    public requiredFields(required: boolean, nameList: string[]|string, formCode?: string) {
        this.dispatch(prevState => {
            const subFormList = prevState.subForms || [];
            return {
                ...prevState,
                fields:prevState.fields.map(item=>{
                    if(formCode){
                        if(formCode===prevState.code){
                            return this.requiredMapFields(required,item,nameList);
                        }
                    }else {
                        return this.requiredMapFields(required,item,nameList);
                    }
                    return item;
                }),
                subForms:subFormList.map(item=>{
                    if(formCode){
                        if(formCode===item.code){
                            return {
                                ...item,
                                fields:item.fields.map(item=>{
                                    return this.requiredMapFields(required,item,nameList);
                                })
                            }
                        }
                    }
                    return item;
                })
            }
        })
    }


    private hiddenMapFields(hidden: boolean,field:FormField,nameList: string[]|string) {
        if(typeof nameList === 'string'){
            if(field.code ===nameList){
                return {
                    ...field,
                    hidden:hidden,
                }
            }
        }else {
            if(nameList.includes(field.code)){
                return {
                    ...field,
                    hidden:hidden,
                }
            }
        }
        return field;
    }

    private requiredMapFields(required: boolean,field:FormField,nameList: string[]|string) {
        if(typeof nameList === 'string'){
            if(field.code ===nameList){
                return {
                    ...field,
                    required:required,
                }
            }
        }else {
            if(nameList.includes(field.code)){
                return {
                    ...field,
                    required:required,
                }
            }
        }
        return field;
    }
}