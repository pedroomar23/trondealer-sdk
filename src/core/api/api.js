import { URL } from "../url/url.js";
import { RegisterRequest } from "../../data/models/register/registerRequest.js";
import { RegisterResponse } from "../../data/models/register/registerResponse.js";
import { ClientsResp } from "../../data/models/clients/clients.js";
import { WalletRequest, WalletResponse } from "../../data/models/wallets/wallets.js";
import { WalletBalanceReq } from "../../data/models/wallets/walletBalance.js";
import { WalletBalanceResp } from "../../data/models/wallets/walletBalance.js";
import { TranResp, Transaction, TransactionResq } from "../../data/models/transactions/transactions.js";
import { WebhookIncomingRep, WebhookIncomingRes } from "../../data/models/webhooks/webhooksIncomig.js";
import { WebhookConfirmedReq, WebhookConfirmedRes } from "../../data/models/webhooks/webhookConfirmed.js";

// URL
const urlRegister = URL.baseURL + URL.register;
const urlClient = URL.baseURL + URL.client;
const urlWallet = URL.baseURL + URL.walletsAssign;
const urlWalletBalance = URL.baseURL + URL.walletsBalance;
const urlTransaction = URL.baseURL + URL.walletsTransactions; 
const urlWebHookIncoming = URL.baseURL + URL.webhoobIncoming;
const urlWebHookConfirmed = URL.baseURL + URL.webhookConfirmed;

// Register 
export async function register() {
    const registerRequest = new RegisterRequest.toString();
    console.log('✅ DEBUG: REGISTER REQUEST SUCCESS', registerRequest);
    
    try {
        const data = await response.json();
        const response = await fetch(urlRegister, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: registerRequest
    })

    switch (response.status) {
        case 200:
            const registerResponse = new RegisterResponse.toString();
            console.log('✅ DEBUG: REGISTER RESPONSE SUCCESS', registerResponse);
            return registerResponse;
        case 400:
            console.error('❌ DEBUG: Server Failure:', error);
            throw new Error('❌ DEBUG: Server Failure:', response.status);
        case 401:
            console.error('❌ DEBUG: Server Failure:', error);
            throw new Error('❌ DEBUG: Server Failure:', response.status);
        case 404:
            console.error('❌ DEBUG: Server Failure:', error);
            throw new Error('❌ DEBUG: Server Failure:', response.status);
        default:
            console.error('❌ DEBUG: Server Failure:', error);
            throw new Error('❌ DEBUG: Server Failure:', response.status);
        }
    } catch (error) {
        console.log('❌ DEBUG: JSON FAILURE RESPONSE:', error);
    }
} 

// Clients
export async function clients() {
    try {
        const data = await response.json();
        const response = await fetch(urlClient, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        switch (response.status) {
            case 200:
                const clientResponse = new ClientsResp.toString();
                console.log('✅ DEBUG: Clients RESPONSE SUCCESS', clientResponse);
                return clientResponse;
            case 401: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            case 403: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            case 500: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            default:
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
        }
    } catch (error) {
        console.error('❌ DEBUG: JSON FAILURE RESPONSE', error);
    }
}

// Add Wallet 
export async function addWallet() {
    const walletRequest = new WalletRequest.toString();
    console.log('✅ DEBUG: Wallet REQUEST SUCCESS', walletRequest);

    try {
        const data = await response.json();
        const response = await fetch(urlWallet, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: walletRequest
        })

        switch (response.status) {
            case 200: 
                const walletResp = new WalletResponse.toString();
                console.log('✅ DEBUG: SERVER RESPONSE SUCCESS', walletResp);
                return walletResp;
            case 401: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            case 403: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            case 500: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            default:
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
        }
    } catch (error) {
        console.error('❌ DEBUG: JSON FAILURE RESPONSE', error)
    }

    // Wallet Balance 
    export async function getBalance() {
        const walletBalanceReq = new WalletBalanceReq.toString();
        console.log('✅ DEBUG: Wallet Balance REQUEST SUCCESS', walletBalanceReq);

        try {
            const data = await response.json();
            const response = await fetch(urlWalletBalance, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: walletBalanceReq
            })

            switch (response.status) {
                case 200: 
                    const walletBalanceResp = new WalletBalanceResp.toString();
                    console.log('✅ DEBUG: Wallet Balance RESPONSE SUCCESS', walletBalanceResp);
                    return walletBalanceResp;
                case 401: 
                    console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                    throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
                case 403: 
                    console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                    throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
                case 500: 
                    console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                    throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
                default:
                    console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                    throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            }
        } catch (error) {
            console.error('❌ DEBUG: JSON FAILURE RESPONSE', error)
        }
    }
}

// Transactions 
export async function transactions() {
    const transRequest = new TransactionResq.toString();
    console.log('✅ DEBUG: TRANSACTION REQUEST SUCCESS', transRequest);

    try {
        const data = await response.json();
        const response = await fetch(urlTransaction, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: transRequest
        });

        switch (response.status) {
            case 200: 
                const transResp = new TranResp.toString();
                console.log('✅ DEBUG: TRANSACTIONS RESPONSE SUCCESS', transResp)
                return transResp;
            case 401: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            case 403: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            case 500: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            default:
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
        }
    } catch (error) {
        console.error("❌ DEBUG: JSON FAILURE RESPONSE", error)
    }
}

// WeebHooks Incoming 
export async function webhookIncoming() {
    const webhookIncomingRep = new WebhookIncomingRep.toString();
    console.log('✅ DEBUG: WEBHOOK INCOMING REQUEST SUCCESS', webhookIncomingRep);    

    try {
        const data = await response.json();
        const response = await fetch(urlWebHookIncoming, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: webhookIncomingRep
        })

        switch (response.status) {
            case 200: 
                const webhookIncomingRes = new WebhookIncomingRes.toString();
                console.log('✅ DEBUG: WEBHOOK INCOMING RESPONSE SUCCESS', webhookIncomingRes);
                return webhookIncomingRes;
            case 401: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            case 403: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            case 500: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            default:
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
        }
    } catch (error) {
        console.error('❌ DEBUG: JSON FAILURE RESPONSE', error);
    }
}

// WeebHooks Confirmed
export async function webhookConfirmed() {
    const webhookConfirmedReq = new WebhookConfirmedReq.toString();
    console.log('✅ DEBUG: WEBHOOK CONFIRMED REQUEST SUCCESS', webhookConfirmedReq);

    try {
        const data = await response.json();
        const response = await fetch(urlWebHookConfirmed, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: webhookConfirmedReq
        })

        switch (response.status) {
            case 200: 
                const webhookConfirmedRes = new WebhookConfirmedRes.toString();
                console.log('✅ DEBUG: WEBHOOK CONFIRMED RESPONSE SUCCESS', webhookConfirmedRes);
                return webhookConfirmedRes;
            case 401: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            case 403: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            case 500: 
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
            default:
                console.error('❌ DEBUG: SERVER FAILURE RESPONSE', response.status);
                throw new Error('❌ DEBUG: SERVER FAILURE RESPONSE', error)
        }
    } catch (error) {
        console.error('❌ DEBUG: JSON FAILURE RESPONSE', error);
    }
}   