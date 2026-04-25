import { URL } from "../url/url.js";
import { RegisterRequest } from "../../data/models/register/registerRequest.js";
import { RegisterResponse } from "../../data/models/register/registerResponse.js";
import { ClientsResp } from "../../data/models/clients/clients.js";
import { WalletRequest, WalletResponse } from "../../data/models/wallets/wallets.js";
import { WalletBalanceReq } from "../../data/models/wallets/walletBalance.js";
import { WalletBalanceResp } from "../../data/models/wallets/walletBalance.js";

// URL
const urlRegister = URL.baseURL + URL.register;
const urlClient = URL.baseURL + URL.client;
const urlWallet = URL.baseURL + URL.walletsAssign;
const urlWalletBalance = URL.baseURL + URL.walletsBalance;

// Register 
export async function register() {
    const registerRequest = new RegisterRequest({
        'name': data.name ||'',
        'webhook_url': data.name || '',
        'webhook_secret': data.webhook_secret || '',
        'payout_method': data.payout_method || '',
        'sweep_wallet': data.sweep_wallet || '',
    })
    console.log('✅ DEBUG: REGISTER REQUEST SUCCESS', registerRequest);
    
    try {
        const data = await response.json();
        const response = await fetch(urlRegister, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(registerRequest)
    })

    switch (response.status) {
        case 200:
            const registerResponse = new RegisterResponse.fromJson(data);
            console.log('✅ DEBUG: REGISTER RESPONSE SUCCESS', registerResponse);
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

// Client 
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
                const clientResponse = new ClientsResp.fromJson(data);
                console.log('✅ DEBUG: Clients RESPONSE SUCCESS', clientResponse);
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
    const walletRequest = new WalletRequest({
        'label': data.label || ''
    })
    console.log('✅ DEBUG: Wallet REQUEST SUCCESS', walletRequest);

    try {
        const data = await response.json();
        const response = await fetch(urlWallet, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(walletRequest)
        })

        switch (response.status) {
            case 200: 
                const walletResp = new WalletResponse.fromJson(data);
                console.log('✅ DEBUG: SERVER RESPONSE SUCCESS', walletResp);
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