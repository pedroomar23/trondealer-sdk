# TrondealerSdk 
`TrondealerSdk` es un sdk escrito en JavaScript que trabaja con la API de [Trondealer](https://trondealer.com). 

## Instalación de dependencias

```javascript
npm install
```

## Instalación de SDK

```javascript
npm install trondealer-sdk
```

## Uso

```javascript
import { TrondealerSdk } from 'trondealer-sdk'; 
```

## API 

```javascript

### Register 
const register = new RegisterRequest.toString();

### Transactions 
const transactionsResp = new TransactionResq.toString();

### Clients 
const clientsResp = new ClientsResp.toString();

### Wallet
const wallet = new WalletRequest.toString();

### Wallet Balance
const walletBalance = new WalletBalanceResp.toString();

### WebHook Incommig 
const webhookIncoming = new WebHookIncomingRep.toString();

### WebHook Confirmed 
const webhookConfirmed = new WebHookConfirmedReq.toString();
```

## Funciones 
    - Register 
    - Clients 
    - Add Wallet 
    - Get Balance 
    - Transactions 
    - WebHook Incoming 
    - WebHook Confirmed

## Ejemplos
```javascript
import { TrondealerSdk } from 'trondealer-sdk'; 

const trondealer = new TrondealerSdk();

const register = trondealer.register();
const clients = trondealer.clients();
const addWallet = trondealer.addWallet();
const getBalance = trondealer.getBalance();
const transactions = trondealer.transactions();
const webhookIncoming = trondealer.webhookIncoming();
const webhookConfirmed = trondealer.webhookConfirmed();     
```
## Contribuciones 

    - Haz un fork al repositorio
    - Crea un nueva rama y haz git push origin -m nueva rama
    - Haz un pull request con tus cambios 

## Licencia 
``TrondealerSdk`` es un sdk de código abierto bajo la [Licencia MIT](https://github.com/pedroomar23/trondealer-sdk/blob/main/license.md).

               