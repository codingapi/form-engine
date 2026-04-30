import {FieldKey, FormEvent} from "@/types";
import {FormInstance} from "@/instance";

export class EventContext {

    private readonly events: FormEvent[];

    constructor(events: FormEvent[]) {
        this.events = events;
    }

    public handlerOnChange(formInstance: FormInstance, target: FieldKey, value: any, option: any) {
        const events = this.getEvents('change', target);
        if (events && events.length > 0) {
            for (const event of events) {
                event.event(formInstance, value, option);
            }
        }
    }


    public handlerOnBlur(formInstance: FormInstance, target: FieldKey, value: any) {
        const events = this.getEvents('blur', target);
        if (events && events.length > 0) {
            for (const event of events) {
                event.event(formInstance, value);
            }
        }
    }

    public getLoadEvents(): FormEvent[] {
        return this.getEvents('load');
    }


    private getEvents(type: string, target?: FieldKey) {
        const events = [];
        for (const event of this.events) {
            if (event.type == type) {
                const eventTarget = event.target;

                if (target === eventTarget) {
                    events.push(event)
                }
                if (typeof target !== 'string' && typeof eventTarget === 'string') {
                    if (target?.fieldCode === eventTarget) {
                        events.push(event)
                    }
                }

                if (typeof target === 'string' && typeof eventTarget !== 'string') {
                    if (!eventTarget?.formCode && eventTarget?.fieldCode === target) {
                        events.push(event)
                    }
                }

                if (typeof target !== 'string' && typeof eventTarget !== 'string') {
                    if (eventTarget?.fieldCode === target?.fieldCode && eventTarget?.formCode === target?.formCode) {
                        events.push(event)
                    }
                }
            }
        }
        return events;
    }

}