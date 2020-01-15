import APICall from "./api-call";
import {
  sendTokenToMobile,
  getMobileImage,
  qrScanner,
  sendInquiryToMobile
} from "./mobileComunication";
import {
  userDataManager,
  deviceIdManager,
  imageDataManager,
  scannerDataManager,
  tokenManager
} from "./dataManager";

class MiniApps {
  constructor(options) {
    this.input = "hallo";
    // this.options = options;

    this.api = new APICall(
      options.baseURL,
      options.httpsAgent,
      options.httpAgent,
      options.publicKey,
      options.secretKey
    );
  }
  getDeviceId() {
    return deviceIdManager.get();
  }
  async userLogin() {
    // TODO need to handle if device id is null
    const deviceId = this.getDeviceId();
    const payload = {
      deviceId
    };
    const data = await this.api.send("POST", "v1/session", payload);
    sendTokenToMobile(data.data.token);
    // return data
  }
  async checkDeviceId(deviceId) {
    const payload = {
      deviceId
      // add key => device: 'ios' or 'android'
    };
    deviceIdManager.set(deviceId);
    const data = await this.api.send(
      "POST",
      "v1/session/check-device",
      payload
    );
    // TODO undo comment if ready
    // return data;
    return false
  }
  getUserProfile() {
    return JSON.parse(userDataManager.get());
  }

  sendPicture() {
    getMobileImage();
  }
  sendQR() {
    qrScanner();
  }
  getPicture() {
    return imageDataManager.get();
  }
  getScanner() {
    return scannerDataManager.get();
  }
  payBill(payload) {
    sendInquiryToMobile(payload)
  }
  userLoginWithoutAuth() {
    userDataManager.remove();
    tokenManager.remove();
  }
  // async getUserProfile(id) {
  //     this.id = id
  //     const doc = `getUserProfile with id ${this.id}`

  //     return doc
  // }

  async getTokenAccess(cunsomer, accessToken) {
    this.cunsomer = cunsomer;
    this.accessToken = accessToken;
    const doc = `getTokenAccess with customer ${this.cunsomer} accessToken ${this.accessToken}`;

    return doc;
  }

  async getBalance(id) {
    this.id = id;
    const doc = `getBalance with id ${this.id}`;

    return doc;
  }

  async getUserTokenPayment(id, orderId) {
    this.id = id;
    this.orderId = orderId;
    const doc = `id : ${this.id} orderId : ${this.orderId}`;

    return doc;
  }

  async getUserQR(id) {
    this.id = id;
    const doc = `getUserQr with id ${this.id}`;

    return doc;
  }
}

// module.exports = MiniApps;
export default MiniApps;
