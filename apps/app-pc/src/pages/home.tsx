import {createFormInstance, FormView} from "@coding-form/form-engine";
import type {FormMeta} from "@coding-form/form-engine";
import {Button, Space} from "antd";
import {FormInstance} from "@coding-form/form-engine";
import type {CardLayout} from "@/layout/card-form-layout.tsx";

const HomePage = () => {

    const meta: FormMeta = {
        name: "请假单",
        code: "leave",
        fields: [
            {
                id: "id",
                name: 'id',
                code: 'id',
                type: "string",
                dataType: 'STRING',
                hidden: true,
                required: false,
            },
            {
                id: "name",
                name: '姓名',
                code: 'name',
                type: "string",
                dataType: 'STRING',
                hidden: false,
                required: true,
            },
            {
                id: "name2",
                name: '姓名2',
                code: 'name2',
                type: "string",
                dataType: 'STRING',
                hidden: false,
                required: true,
            }
        ],
        subForms: []
    }

    const form = createFormInstance(meta);

    return (
        <div>
            <FormView
                meta={meta}
                form={form}
                validators={[
                    {
                        target:'name',
                        validator:(_instance:FormInstance,value:any)=>{
                            if(value){
                                return true;
                            }
                            return '你可真行'
                        }
                    }
                ]}
                events={[
                    {
                        type: 'change',
                        target:'name',
                        event:(instance:FormInstance,value:any)=>{
                            console.log('value',value);
                            instance.setFieldValue('id',value);
                        }
                    }
                ]}
                layouts={[
                    {
                        formCode:'leave',
                        type:'card',
                        props:{
                            title:'测试',
                            layout:'vertical',
                            mainFields:[],
                            fields:[
                                {
                                    code:'id',
                                    span:0
                                },
                                {
                                    code:'name',
                                    span:24
                                }
                            ]
                        }
                    },
                    {
                        formCode:'leave',
                        type:'card',
                        props:{
                            title:'测试',
                            layout:'vertical',
                            mainFields:[],
                            fields:[
                                {
                                    code:'name2',
                                    span:12
                                },
                                {
                                    code:'name2',
                                    span:12
                                }
                            ]
                        } as CardLayout
                    }
                ]}
            />

            <Space>
                <Button
                    onClick={() => {
                        form.submit();
                    }}
                >submit</Button>

                <Button
                    onClick={() => {
                        form.refreshFields('name');
                    }}
                >refresh</Button>

                <Button
                    onClick={() => {
                        const values = form.getFieldsValue();
                        console.log(values);
                    }}
                >getValues</Button>

                <Button
                    onClick={async () => {
                        const values = await form.validateFields();
                        console.log(values);
                    }}
                >validate</Button>

                <Button
                    onClick={() => {
                        form.setFieldsValue({
                            name: "123"
                        });
                    }}
                >setValues</Button>

                <Button
                    onClick={() => {
                        form.hiddenFields(true,['name']);
                    }}
                >enable hidden</Button>

                <Button
                    onClick={() => {
                        form.hiddenFields(false,['name']);
                    }}
                >disable hidden</Button>

                <Button
                    onClick={() => {
                        form.requiredFields(true,['name']);
                    }}
                >enable required</Button>

                <Button
                    onClick={() => {
                        form.requiredFields(false,['name']);
                    }}
                >disable required</Button>
            </Space>
        </div>
    );
};

export default HomePage;
