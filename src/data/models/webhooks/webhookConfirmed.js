// WebHook Confirmed 
// JSON Request and Response 

import { Data } from '../webhooks/webhooksIncomig'

export class WebhookConfirmedReq {
    constructor(event, timestamp, data) {
        this.event = event || "",
        this.timestamp = timestamp || "",
        this.data = new Data.toString(data)
    }

    toJson() {
        return {
            'event': this.event,
            'timestamp': this.timestamp,
            'data': this.data.toString()
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

export class WebhookConfirmedRes {
    constructor(event, timestamp, data) {
        this.event = event || "",
        this.timestamp = timestamp || "",
        this.data = new Data.toString(data)
    }

    toJson() {
        return {
            'event': this.event,
            'timestamp': this.timestamp,
            'data': this.data.toString()
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}   