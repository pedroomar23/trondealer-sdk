// Register Response
export class RegisterResponse {
    constructor(success, client) {
        this.success = Boolean(success)
        this.client = new Client(client)
    }

    toJson() {
        return {
            'success': this.success,
            'client': this.client.toJson()
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

// Client
class Client {
    constructor(id, name, api_key, webhook_url, min_confirmations, sweep_wallet, payout_method, qvapay_account, zelle_contact, isActive, created_at) {
        this.id = id || "",
        this.name = name || "",
        this.api_key = api_key || "",
        this.webhook_url = webhook_url || "",
        this.min_confirmations = min_confirmations || "",
        this.sweep_wallet = sweep_wallet || "",
        this.payout_method = payout_method || "", 
        this.qvapay_account = qvapay_account || "",
        this.zelle_contact = zelle_contact || "", 
        this.isActive = Boolean(isActive),
        this.created_at = created_at || ""
    }

    toJson() {
        return {
            'id': this.id, 
            'name': this.name, 
            'api_key': this.api_key,
            'webhook_url': this.webhook_url,
            'min_confirmations': this.min_confirmations,
            'sweep_wallet': this.api_key.sweep_wallet,
            'payout_method': this.payout_method,
            'qvapay_account': this.qvapay_account,
            'zelle_contact': this.zelle_contact,
            'isActive': this.isActive,
            'created_at': this.api_key.created_at
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}