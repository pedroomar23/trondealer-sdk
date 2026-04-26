// Wallet Balance 
// Request and Response 
export class WalletBalanceReq {
    constructor(address) {
        this.address = address || ""
    }

    static fromJson(address) {
        return new WalletBalanceReq(address || "");
    }

    toJson() {
        return {
            'address': this.address
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

// Wallet Balance Response 
export class WalletBalanceResp {
    constructor(success, wallet, balances) {
        this.success = Boolean(success)
        this.wallet = new Wallet.toString(wallet)
        this.balances = new Balance.toString(balances)
    }

    toJson() {
        return {
            'success': this.success,
            'wallet': this.wallet.toString(),
            'balances': this.balances.toString()
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

// Wallet 
class Wallet {
    constructor(address, label, status) {
        this.address = address || "",
        this.label = label || "",
        this.status = status || ""
    }

    toJson() {
        return {
            'address': this.address,
            'label': this.label,
            'status': this.status
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

// Balance
class Balance {
    constructor(nativeToken, usdt, usdc) {
        this.nativeToken = nativeToken || "",
        this.usdt = usdt || "",
        this.usdc = usdc || ""
    }

    toJson() {
        return {
            'NativeToken': this.nativeToken,
            'USDT': this.usdt,
            'USDC': this.usdc
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}