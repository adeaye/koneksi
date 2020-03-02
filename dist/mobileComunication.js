import {
  userDataManager,
  imageDataManager,
  scannerDataManager
} from "./dataManager";

window.androidObj = function AndroidClass() {};

export function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera; // Windows Phone must come first because its UA also contains "Android"

  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

export function qrScanner() {
  try {
    if (getMobileOperatingSystem() === "iOS") {
      window.webkit.messageHandlers.qrScanner.postMessage("");
    } else if (getMobileOperatingSystem() === "Android") {
      window.androidObj.qrScanner();
    }
  } catch (err) {}
}
/**
 * @param  {string} token
 */
export function sendTokenToMobile(token) {
  try {
    if (getMobileOperatingSystem() === "iOS") {
      window.webkit.messageHandlers.sendToken.postMessage(token);
    } else if (getMobileOperatingSystem() === "Android") {
      window.androidObj.sendToken(token);
    }
  } catch (error) {}
}
/**
 * @param  {{name: string, phone: string, email: string, photo_url: string}} payload
 */
window.receiveUserData = function(payload) {
  userDataManager.set(payload);
  // receiveUserProfile(JSON.parse(payload));
};

export function getMobileImage() {
  try {
    if (getMobileOperatingSystem() === "iOS") {
      window.webkit.messageHandlers.getImage.postMessage("");
    } else if (getMobileOperatingSystem() === "Android") {
      window.androidObj.getImage();
    } else {
    }
  } catch (error) {
    console.log("err", error);
  }
}
/**
 * @param  {string} base64String
 */
window.receiveImage = function(base64String) {
  imageDataManager.set(base64String);
  // receiveMobileImage(base64String);
};
/**
 * @param  {string} scannerString
 */
window.receiveScannerData = function(scannerString) {
  scannerDataManager.set(scannerString);
  // receiveScanner(scannerString);
};

export function openMobileModal() {
  try {
    if (getMobileOperatingSystem() === "iOS") {
      window.webkit.messageHandlers.dialogConfirm.postMessage("");
    } else if (getMobileOperatingSystem() === "Android") {
      window.androidObj.dialogConfirm();
    } else {
    }
  } catch (error) {
    console.log("err", error);
  }
}

export function sendInquiryToMobile(payload) {
  const stringifiedPayload = JSON.stringify(payload);
  console.log("in", stringifiedPayload);
  try {
    if (getMobileOperatingSystem() === "iOS") {
      // console.log('token masuk IOS', token)
      console.log("stringify", stringifiedPayload);
      window.webkit.messageHandlers.sendInquiry.postMessage(stringifiedPayload);
    } else if (getMobileOperatingSystem() === "Android") {
      // console.log('token masuk Android', token)
      console.log("stringify", stringifiedPayload);
      window.androidObj.sendInquiry(stringifiedPayload);
    } else {
      console.log("Unknown");
      // cb();
    }
  } catch (error) {}
}
