import {FieldKey, FormTrigger} from "@/types";
import {FormInstance} from "@/instance";

export class TriggerContext {

    private readonly triggers: FormTrigger[];

    constructor(triggers: FormTrigger[]) {
        this.triggers = triggers;
    }

    private getTriggers(type: string, target?: FieldKey) {
        const triggers = [];
        for (const trigger of this.triggers) {
            if (trigger.type == type) {
                const eventTarget = trigger.target;

                if (target === eventTarget) {
                    triggers.push(trigger)
                }
                if (typeof target !== 'string' && typeof eventTarget === 'string') {
                    if (target?.fieldCode === eventTarget) {
                        triggers.push(trigger)
                    }
                }

                if (typeof target === 'string' && typeof eventTarget !== 'string') {
                    if (!eventTarget?.formCode && eventTarget?.fieldCode === target) {
                        triggers.push(trigger)
                    }
                }

                if (typeof target !== 'string' && typeof eventTarget !== 'string') {
                    if (eventTarget?.fieldCode === target?.fieldCode && eventTarget?.formCode === target?.formCode) {
                        triggers.push(trigger)
                    }
                }
            }
        }
        return triggers;
    }

    public trigger(type: string, formInstance: FormInstance, target: FieldKey) {
        const triggers = this.getTriggers(type, target);
        const promiseList = [];
        for (const trigger of triggers) {
            const result = trigger.trigger(formInstance);
            promiseList.push(result);
        }
        return Promise.all(promiseList);
    }

}