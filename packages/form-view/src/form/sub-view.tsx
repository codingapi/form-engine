import React from "react";
import {FormItemFactory} from "@/factory";
import {useFormContext} from "@/hooks";

interface FormSubViewProps {
    formCode: string;
    Form: React.ComponentType<any>;
    review: boolean;
}

export const FormSubView: React.FC<FormSubViewProps> = (props) => {
    const Form = props.Form;
    const formCode = props.formCode;
    const review = props.review;

    const {state, context} = useFormContext();

    const fields = React.useMemo(() => {
        const formList = [];
        formList.push(state);
        for (const subForm of state.subForms || []) {
            formList.push(subForm);
        }
        for (const subForm of formList) {
            if (subForm.code === formCode) {
                return subForm.fields;
            }
        }
        return [];
    }, [state]);

    const formControl = context.getFormControl(formCode);

    const formTarget = formControl?.getProxyTarget();

    React.useEffect(() => {
        const events = context.getEventContext().getLoadEvents();
        if (events && events.length > 0) {
            for (const event of events) {
                event.event();
            }
        }
    }, []);

    return (
        <Form
            form={formTarget}
        >
            {fields.map(field => {
                return FormItemFactory.getInstance().render(formCode, field, review, context);
            })}
        </Form>
    )
}