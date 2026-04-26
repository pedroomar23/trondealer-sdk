// Register Request
export class RegisterRequest {
    constructor(name, webhook_url, webhook_secret, payout_method, sweep_wallet) {
        this.name = name || "";
        this.webhook_url = webhook_url || "";
        this.webhook_secret = webhook_secret || "";
        this.payout_method = payout_method || "";
        this.sweep_wallet = sweep_wallet || "";
    }

    toJson() {
        return {
            'name': this.name,
            'webhook_url': this.webhook_url,
            'webhook_secret': this.webhook_secret,
            'payout_method': this.payout_method,
            'sweep_wallet': this.sweep_wallet,
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}