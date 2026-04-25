// Clients 
export class ClientsResp {
    constructor(data) {
        this.success = Boolean(data.success),
        this.clients = Clients(data.clients)
    }

    static fromJson(data) {
        return new ClientsResp(data);
    }

    toJson() {
        return {
            'success': this.success,
            'clients': this.clients
        }
    }
}

export class Clients {
    constructor(data) {
        this.id = data.id || "",
        this.name = data.name || "",
        this.webhook_url = data.webhook_url || "",
        this.webhook_secret_masked = this.webhook_secret_masked || "",
        this.has_webhook_secret = Boolean(data.has_webhook_secret),
        this.min_confirmations = int(this.min_confirmations),
        this.sweep_wallet = data.sweep_wallet || "",
        this.payout_method = data.payout_method || "",
        this.qvapay_account = data.qvapay_account || "",
        this.zelle_contact = data.zelle_contact || "",
        this.created_at = data.created_at || ""
    }

    static fromJson(data) {
        return new Clients(data);
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
}