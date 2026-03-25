import {FormField, FormLayout} from "@/types";
import React from "react";
import {FormContextScope} from "@/context";
import {LayoutFactory} from "@/layout/factory";
import {DefaultLayout} from "@/layout/default-layout";
export * from "./factory";

export class LayoutContext {

    private readonly layouts: FormLayout[];

    constructor(layouts: FormLayout[]) {
        this.layouts = layouts;
    }

    public getLayout(formCode:string){
        for(const layout of this.layouts){
            if(layout.formCode === formCode){
                return layout;
            }
        }
        return undefined;
    }


    public render(formCode:string,fields:FormField[],review:boolean,context:FormContextScope){
        const layout = this.getLayout(formCode);

        if(layout) {
            const LayoutComponent = LayoutFactory.getInstance().getLayoutComponent(layout.type);
            if (LayoutComponent) {
                return (
                    <LayoutComponent
                        layout={layout}
                        fields={fields}
                        review={review}
                        context={context}
                        formCode={formCode}
                    />
                )
            }
        }

        return (
            <DefaultLayout
                layout={layout as any}
                fields={fields}
                review={review}
                context={context}
                formCode={formCode}
            />
        )
    }

}