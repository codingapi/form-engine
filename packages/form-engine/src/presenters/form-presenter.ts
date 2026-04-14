import {Dispatch, FormMeta, FormState, NamePath, StateField} from "@/types";

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

    public initialState(meta: FormMeta) {
        this.state = meta;
        this.dispatch(meta);
    }


    public hiddenFields(hidden: boolean, nameList: NamePath[] | NamePath, formCode?: string) {
        this.dispatch(prevState => {
            const subFormList = prevState.subForms || [];
            return {
                ...prevState,
                fields: prevState.fields.map(item => {
                    if (formCode) {
                        if (formCode === prevState.code) {
                            return this.hiddenMapFields(hidden, item, nameList);
                        }
                    } else {
                        return this.hiddenMapFields(hidden, item, nameList);
                    }
                    return item;
                }),
                subForms: subFormList.map(item => {
                    if (formCode) {
                        if (formCode === item.code) {
                            return {
                                ...item,
                                fields: item.fields.map(item => {
                                    return this.hiddenMapFields(hidden, item, nameList);
                                })
                            }
                        }
                    }
                    return item;
                })
            }
        })
    }


    public refreshFields(nameList: NamePath[] | NamePath, formCode?: string) {
        this.dispatch(prevState => {
            const subFormList = prevState.subForms || [];
            return {
                ...prevState,
                fields: prevState.fields.map(item => {
                    if (formCode) {
                        if (formCode === prevState.code) {
                            return this.refreshMapFields(item, nameList);
                        }
                    } else {
                        return this.refreshMapFields(item, nameList);
                    }
                    return item;
                }),
                subForms: subFormList.map(item => {
                    if (formCode) {
                        if (formCode === item.code) {
                            return {
                                ...item,
                                fields: item.fields.map(item => {
                                    return this.refreshMapFields(item, nameList);
                                })
                            }
                        }
                    }
                    return item;
                })
            }
        })
    }

    public requiredFields(required: boolean, nameList: NamePath[] | NamePath, formCode?: string) {
        this.dispatch(prevState => {
            const subFormList = prevState.subForms || [];
            return {
                ...prevState,
                fields: prevState.fields.map(item => {
                    if (formCode) {
                        if (formCode === prevState.code) {
                            return this.requiredMapFields(required, item, nameList);
                        }
                    } else {
                        return this.requiredMapFields(required, item, nameList);
                    }
                    return item;
                }),
                subForms: subFormList.map(item => {
                    if (formCode) {
                        if (formCode === item.code) {
                            return {
                                ...item,
                                fields: item.fields.map(item => {
                                    return this.requiredMapFields(required, item, nameList);
                                })
                            }
                        }
                    }
                    return item;
                })
            }
        })
    }


    private hiddenMapFields(hidden: boolean, field: StateField, nameList: NamePath[] | NamePath) {
        if (typeof nameList === 'string') {
            if (field.code === nameList) {
                return {
                    ...field,
                    hidden: hidden,
                }
            }
        } else {
            if (nameList.includes(field.code)) {
                return {
                    ...field,
                    hidden: hidden,
                }
            }
        }
        return field;
    }


    private refreshMapFields(field: StateField, nameList: NamePath[] | NamePath) {
        if (typeof nameList === 'string') {
            if (field.code === nameList) {
                const version = field.version ? field.version : 0;
                return {
                    ...field,
                    version: version + 1
                }
            }
        } else {
            if (nameList.includes(field.code)) {
                const version = field.version ? field.version : 0;
                return {
                    ...field,
                    version: version + 1
                }
            }
        }
        return field;
    }

    private requiredMapFields(required: boolean, field: StateField, nameList: NamePath[] | NamePath) {
        if (typeof nameList === 'string') {
            if (field.code === nameList) {
                return {
                    ...field,
                    required: required,
                }
            }
        } else {
            if (nameList.includes(field.code)) {
                return {
                    ...field,
                    required: required,
                }
            }
        }
        return field;
    }
}