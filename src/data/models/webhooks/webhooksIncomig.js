// WebHook Incoming 
// Request and Response 
export class WebhookIncomingRep {
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

class Data {
    constructor(tx_hash, block_number, from_address, to_address, asset, amount, confirmations, wallet_label, network) {
        this.tx_hash = tx_hash || '',
        this.block_number = Number(block_number) || 0,
        this.from_address = from_address || '',
        this.to_address = to_address || '',
        this.asset = asset || '',
        this.amount = amount || '',
        this.confirmations = Number(confirmations) || 0,
        this.wallet_label = wallet_label || '',
        this.network = network || ''
    }

    toJson() {
        return {
            'tx_hash': this.tx_hash,
            'block_number': this.block_number,
            'from_address': this.from_address,
            'to_address': this.to_address,
            'asset': this.asset,
            'amount': this.amount,
            'confirmations': this.confirmations,
            'wallet_label': this.wallet_label,
            'network': this.network
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

// WebHook Incoming Response
export class WebhookIncomingRes {
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