// Wallet Balance 
// Request and Response 
export class WalletBalanceReq {
    constructor(data) {
        this.address = data.address || ""
    }

    static fromJson(data) {
        return new WalletBalanceReq(data);
    }

    toJson() {
        return {
            'address': this.address
        }
    }
}

// Wallet Balance Response 
export class WalletBalanceResp {
    constructor(data) {
        this.success = Boolean(data.success)
        this.wallet = Wallet(data.wallet)
        this.balances = Balance(this.balances)
    }

    static fromJson(data) {
        return new WalletBalanceResp(data);
    }

    toJson() {
        return {
            'success': this.success,
            'wallet': this.wallet,
            'balances': this.balances
        }
    }
}

// Wallet 
class Wallet {
    constructor(data) {
        this.address = data.address || "",
        this.label = data.label || "",
        this.status = data.status || ""
    }

    static fromJson(data) {
        return new Wallet(data);
    }

    toJson() {
        return {
            'address': this.address,
            'label': this.label,
            'status': this.status
        }
    }
}

// Balance
class Balance {
    constructor(data) {
        this.nativeToken = data.nativeToken || "",
        this.usdt = data.usdt || "",
        this.usdc = data.usdc || ""
    }

    static fromJson(data) {
        return new Balance(data);
    }

    toJson() {
        return {
            'NativeToken': this.nativeToken,
            'USDT': this.usdt,
            'USDC': this.usdc
        }
    }
}