export interface FormItemProps{
    name:string;
    label?:string;
    hidden?:boolean;
    required?:boolean;
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?:string;
    readOnly?:boolean;
    rules?:any[];
}