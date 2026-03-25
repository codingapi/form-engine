import React from "react";
import {FormItemProps} from "@/types/item";

export class FormItemFactory {

    private readonly cache: Map<string, React.ComponentType<FormItemProps>>;

    private constructor() {
        this.cache = new Map();
    }

    private static readonly instance = new FormItemFactory();

    public static getInstance() {
        return this.instance;
    }

    public register(type: string,componentType:React.ComponentType<FormItemProps>) {
        this.cache.set(type, componentType);
    }


    public getItem(type: string) {
        return this.cache.get(type);
    }

}