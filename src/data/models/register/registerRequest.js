// Register Request
export class RegisterRequest {
    constructor(data) {
        this.name = data.name || "";
        this.webhook_url = data.webhook_url || "";
        this.webhook_secret = data.webhook_secret || "";
        this.payout_method = data.payout_method || "";
        this.sweep_wallet = data.sweep_wallet || "";
    }

    static fromJson(data) {
        return new Register(data);
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
}