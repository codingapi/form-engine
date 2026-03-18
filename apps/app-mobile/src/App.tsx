import {createAntdForm, FormAntdView} from "@coding-form/form-antd-mobile";
import type {FormMeta} from "@coding-form/form-types";
import {Button, Space} from "antd-mobile";

const App = () => {

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

    const form = createAntdForm();

    return (
        <div>
            <FormAntdView
                meta={meta}
                form={form}
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
                    onClick={() => {
                        form.setFieldsValue({
                            name: "123"
                        });
                    }}
                >setValues</Button>

                <Button
                    onClick={() => {
                        form.hiddenFields(['name']);
                    }}
                >hidden</Button>

                <Button
                    onClick={() => {
                        form.showFields(['name']);
                    }}
                >show</Button>
            </Space>
        </div>
    );
};

export default App;
