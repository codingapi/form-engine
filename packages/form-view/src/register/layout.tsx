import React from "react";
import {FormLayoutProps} from "@/types";

export class LayoutRegister {
    
    private readonly map:Map<string,React.ComponentType<FormLayoutProps>>;
    
    private constructor() {
        this.map = new Map<string, React.ComponentType<FormLayoutProps>>();
    }
    
    private static readonly instance: LayoutRegister = new LayoutRegister();
    
    public static getInstance(){
        return this.instance;
    }
    
    public register(type:string,componentType:React.ComponentType<FormLayoutProps>){
        this.map.set(type,componentType);
    }
    
    public getLayoutComponent(type:string){
        return this.map.get(type);
    }
}