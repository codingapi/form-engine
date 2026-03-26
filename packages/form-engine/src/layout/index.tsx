import {FormField, FormLayout} from "@/types";
import React from "react";
import {FormContextScope} from "@/context";
import {LayoutRegister} from "@/register/layout";
import {DefaultLayout} from "@/layout/default-layout";

export class LayoutContext {

    private readonly layouts: FormLayout[];

    constructor(layouts: FormLayout[]) {
        this.layouts = layouts;
    }

    public getLayouts(formCode:string){
        const layouts = [];
        for(const layout of this.layouts){
            if(layout.formCode === formCode){
                layouts.push(layout);
            }
        }
        return layouts;
    }


    public render(formCode:string,fields:FormField[],review:boolean,context:FormContextScope){
        const layouts = this.getLayouts(formCode);

        if(layouts && layouts.length > 0) {
            return (
                <>
                    {layouts.map((layout:FormLayout) => {
                        const LayoutComponent = LayoutRegister.getInstance().getLayoutComponent(layout.type);
                        console.log('LayoutComponent', layout);
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
                    })}
                </>
            )
        }

        return (
            <DefaultLayout
                fields={fields}
                review={review}
                context={context}
                formCode={formCode}
            />
        )
    }

}