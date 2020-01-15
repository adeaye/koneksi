# Starlord SDK - LAPS

This sdk to get access to LAPS service

## Installation

Use the package manager [npm](https://sdk-miniapps.LAPS/en/stable/) to install starlord.
using NPM
```bash
npm install startlord --save // when we have publish to npm
```
or 
using Yarn
```bash
yarn add startlord
```
## Usage
create this usingSDK.js file
```javascript
import MiniApps from 'miniapps-sdk';

const options = {
    baseURL: "http://api-url.starlord-LAPS.io/api/",
    httpsAgent: true,
    httpAgent: true,
    consumerToken: '902328248jksjds',
    accessToken: 'wallet',
}
/** Initiate MiniApps */
const MiniApp = new MiniApps(options)

export default MiniApp;
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Available Function
| Function  | params | Description |
| ----- | --- |--------------------|
| checkDeviceId | deviceId | checking device id is it already login or not |
| userLogin | | login to LAPS to get token, checkDeviceId need to be executed first |
| getUserProfile |  | get data user |
|userLoginWithoutAuth| | user enter partner site without login in LAPS |
| getTokenAccess | cunsomer, accesToken | --- |
| getBalance | id | get balance user by id|
| getUserTokenPayment | id, oderId | get user token payment by userId , orderId |
| getUserQR| id | get QR code by id |

## EXAMPLE

```javascript
<!--using Import-->
import MiniAppSDK from './usingSDK';
<!--using require-->
const MiniAppSDK = require('./usingSDK');

<!--Check device ID-->
MiniAppSDK.checkDeviceId(yourDeviceId);
<!--User login-->
MiniAppSDK.userLogin();
<!--Get user Profile-->
MiniAppSDK.getUserProfile();
```
## License
[MIT](https://choosealicense.com/licenses/mit/)