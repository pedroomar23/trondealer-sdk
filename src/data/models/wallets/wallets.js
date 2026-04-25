// Wallet Request
export class WalletRequest {
    constructor(data) {
        this.label = data.label || ""
    }

    static fromJson(data) {
        return new WalletRequest(data);
    }

    toJson() {
        return {
            'label': this.label
        }
    }
}

// Wallet Response 
export class WalletResponse {
    constructor(data) {
        this.success = Boolean(data.success),
        this.wallet = Wallet(data.wallet)
    }

    static fromJson(data) {
        return new WalletResponse(data);
    }

    toJson() {
        return {
            'success': this.success,
            'wallet': this.wallet
        }
    }
}

class Wallet {
    constructor(data) {
        this.id = data.id || "",
        this.address = data.address || "",
        this.label = data.label || "",
        this.status = data.status || "",
        this.created_at = data.created_at || Date()
    }

    static fromJson(data) {
        return new Wallet(data);
    }

    toJson() {
        return {
            'id': this.id,
            'address': this.address,
            'label': this.label,
            'status': this.status,
            'created_at': this.created_at
        }
    }
}