import {FieldKey, FormEvent} from "@/types";

export class EventContext{

    private readonly events:FormEvent[];

    constructor(events:FormEvent[]){
        this.events = events;
    }


    public handlerOnChange(target:FieldKey,value:string){
        const event = this.getEvent(target);
        if(event){

        }
    }

    private getEvent(target:FieldKey){
        for(let event of this.events){
            console.log(typeof event)
        }
        return null;
    }

}