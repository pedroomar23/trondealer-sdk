// Wallet Request
export class WalletRequest {
    constructor(label) {
        this.label = label || ""
    }

    toJson() {
        return {
            'label': this.label
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

// Wallet Response 
export class WalletResponse {
    constructor(success, wallet) {
        this.success = Boolean(success),
        this.wallet = new Wallet.toString(wallet);
    }

    toJson() {
        return {
            'success': this.success,
            'wallet': this.wallet.toString()
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

class Wallet {
    constructor(id, address, label, status, created_at) {
        this.id = id || "",
        this.address = address || "",
        this.label = label || "",
        this.status = status || "",
        this.created_at = created_at || Date()
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

    toString() {
        return JSON.stringify(this.toJson());
    }
}