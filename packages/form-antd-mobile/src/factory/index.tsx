import React from "react";
import {FormItemProps} from "@/types/item";
import {FormString} from "@/components/string";

export class FormFactory {

    private readonly cache: Map<string, React.ComponentType<FormItemProps>>;

    private constructor() {
        this.cache = new Map();
        this.initialize();
    }

    private static readonly instance = new FormFactory();

    public static getInstance() {
        return this.instance;
    }


    private initialize() {
        this.cache.set('string', FormString);
    }

    public getItem(type: string) {
        return this.cache.get(type);
    }

}