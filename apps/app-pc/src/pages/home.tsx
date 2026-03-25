import {createFormInstance, FormView} from "@coding-form/form-view";
import type {FormMeta} from "@coding-form/form-view";
import {Button, Space} from "antd";

const HomePage = () => {

    const meta: FormMeta = {
        name: "请假单",
        code: "leave",
        fields: [
            {
                id: "1",
                name: '姓名',
                code: 'name',
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
                        validator:(value,instance)=>{
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
                        event:(value)=>{
                            console.log('value',value)
                        }
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
