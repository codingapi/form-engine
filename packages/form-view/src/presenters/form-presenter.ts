import {Dispatch, FormViewProps} from "@/types";
import {FormState} from "@/types";

export class FormPresenter {
    private readonly props: FormViewProps;
    private state: FormState;
    private readonly dispatch: Dispatch<FormState>;

    constructor(props: FormViewProps, state: FormState, dispatch: Dispatch<FormState>) {
        this.props = props;
        this.state = state;
        this.dispatch = dispatch;
    }

    public syncState(state: FormState) {
        this.state = state;
    }


    public initialState() {
    }
}