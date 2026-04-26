// Clients 
export class ClientsResp {
    constructor(success, clients) {
        this.success = Boolean(success),
        this.clients = new Clients.toString(clients)
    }

    toJson() {
        return {
            'success': this.success,
            'clients': this.clients.toString()
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

export class Clients {
    constructor(id, name, webhook_url, webhook_secret_masked, has_webhook_secret, min_confirmations, sweep_wallet, payout_method, qvapay_account, zelle_contact, created_at) {
        this.id = id || "",
        this.name = name || "",
        this.webhook_url = webhook_url || "",
        this.webhook_secret_masked = webhook_secret_masked || "",
        this.has_webhook_secret = Boolean(has_webhook_secret),
        this.min_confirmations = Number(min_confirmations),
        this.sweep_wallet = sweep_wallet || "",
        this.payout_method = payout_method || "",
        this.qvapay_account = qvapay_account || "",
        this.zelle_contact = zelle_contact || "",
        this.created_at = created_at || ""
    }

    toJson() {
        return {
            'id': this.id,
            'name': this.name,
            'webhook_url': this.webhook_url,
            'webhook_secret_masked': this.webhook_secret_masked,
            'has_webhook_secret': this.has_webhook_secret,
            'min_confirmations': this.min_confirmations,
            'sweep_wallet': this.sweep_wallet,
            'payout_method': this.payout_method,
            'qvapay_account': this.qvapay_account,
            'zelle_contact': this.zelle_contact,
            'created_at': this.created_at
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}