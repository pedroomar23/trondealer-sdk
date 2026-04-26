export class TransactionResq {
    constructor(address, limit, offset, status) {
        this.address = address || "",
        this.limit = parseInt(limit) || 0,
        this.offset = parseInt(offset) || 0,
        this.status = status || ""
    }

    toJson() {
        return {
            'address': this.address,
            'limit': this.limit,
            'offset': this.offset,
            'status': this.status
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

// Transactions Response 
export class TranResp {
    constructor(success, wallet, total, limit, offset, transactions) {
        this.success = Boolean(success),
        this.wallet = new Wallets.toString(wallet),
        this.total = Number(total) || 0,
        this.limit = Number(limit) || 0,
        this.offset = Number(offset) || 0,
        this.transactions = [new Transactions.toString(transactions)]
    }

    toJson() {
        return {
            'success': this.success,
            'wallet': this.wallet.toString(),
            'total': this.total,
            'limit': this.limit,
            'offset': this.offset,
            'transactions': this.transactions.toString()
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

class Wallets {
    constructor(address, label) {
        address || '',
        label || ''
    }

    static fromJson(address, label) {
        return new Wallets(
            address || '',
            label || ''
        )
    }

    toJson() {
        return {
            'address': this.address,
            'label': this.label
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

class Transactions {
    constructor(tx_hash, log_index, block_number, from_address, to_address, asset, amount, confirmations, status, detected_at, created_at) {
        this.tx_hash = tx_hash || '',
        this.log_index = Number(log_index) || 0,
        this.block_number = Number(block_number) || 0,
        this.from_address = from_address || 0
        this.to_address = to_address || '',
        this.asset = asset || '',
        this.amount = Number(amount) || '',
        this.confirmations = Number(confirmations) || 0,
        this.status = status || '',
        this.detected_at = detected_at || '',
        this.created_at = created_at || ''
    }

    toJson() {
        return {
            'tc_hash': this.tx_hash,
            'log_index': this.log_index,
            'block_number': this.block_number,
            'from_address': this.from_address,
            'to_address': this.to_address,
            'asset': this.asset,
            'amount': this.amount,
            'confirmations': this.confirmations,
            'status': this.status,
            'detected_at': this.detected_at,
            'created_at': this.created_at
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

