import {
  getMobileImage,
  qrScanner,
  sendInquiryToMobile
} from "./mobileComunication";
import {
  userDataManager,
  deviceIdManager,
  imageDataManager,
  scannerDataManager
} from "./dataManager";

import { format } from "date-fns";

class MiniApps {
  constructor(options) {
    // this.options = options;
    this.appId = options.appId;
    this.developerId = options.developerId;
    this.publicKey = options.publicKey;
  }
  getDeviceId() {
    console.log("test device id");
    return deviceIdManager.get();
  }
  getUserProfile() {
    return JSON.parse(userDataManager.get());
  }

  activateMobileCamera() {
    getMobileImage();
  }
  activateMobileScanner() {
    console.log("asd", this.appId);
    qrScanner();
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
  /**
   * Brief description of the function here.
   * @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
   * @param {{transactionId: string, totalAmount: number, items: Array[{name: string, qty: number, unitPrice: number}]}} payload - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
   * @return {ReturnValueDataTypeHere} Brief description of the returning value here.
   */
  payBill(payload) {
    // TODO validation check required value

    // Terminalname and redirecturl handled by mobile
    const inquiryPayload = {
      ...payload,
      trxDate: format(new Date(), "yyyyMMddHHMMSS"),
      appId: this.appId,
      appTrxId: payload.transactionId,
      developerId: this.developerId,
      totalAmount: payload.totalAmount,
      items: payload.items
    };
    sendInquiryToMobile(inquiryPayload);
  }
  // TODO remove this below
  // userLoginWithoutAuth() {
  //   userDataManager.remove();
  //   tokenManager.remove();
  // }
}

// module.exports = MiniApps;
export default MiniApps;
