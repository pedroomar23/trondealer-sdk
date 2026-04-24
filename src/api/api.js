import { URL } from "./url.js";
import { RegisterRequest } from "../models/register/registerRequest.js";
import { RegisterResponse } from "../models/register/registerResponse.js";

const urlRegister = URL.baseURL + Url.register;

// Register 
export async function register() {
    const registerRequest = new RegisterRequest({
        name: data.name ||'',
        webhook_url: data.name || '',
        webhook_secret: data.webhook_secret || '',
        payout_method: data.payout_method || '',
        sweep_wallet: data.sweep_wallet || '',
    })
    console.log('✅ DEBUG: REGISTER REQUEST:', registerRequest);
    
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
            return {
                success: true, 
                client: RegisterResponse.fromJson(data)
            }
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