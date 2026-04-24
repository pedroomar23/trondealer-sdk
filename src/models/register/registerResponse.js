// Register Response
export class RegisterResponse {
    constructor(data) {
        this.success = Boolean(data.success)
        this.client = Client(data.client)
    }

    static fromJson(data) {
        return new RegisterResponse(data);
    }

    toJson() {
        return {
            'success': this.success,
            'client': this.client
        }
    }
}

// Client
class Client {
    constructor(data) {
        this.id = data.id || "",
        this.name = data.name || "",
        this.api_key = data.api_key || "",
        this.webhook_url = data.webhook_url || "",
        this.min_confirmations = data.min_confirmations || "",
        this.sweep_wallet = data.sweep_wallet || "",
        this.payout_method = data.payout_method || "", 
        this.qvapay_account = data.qvapay_account || "",
        this.zelle_contact = data.zelle_contact || "", 
        this.isActive = Bool(data.isActive),
        this.created_at = data.created_at || ""
    }

    static fromJson(data) {
        return new Client(data);
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
}