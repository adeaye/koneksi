import localStorageManager from "./storageManager";

export const deviceIdManager = localStorageManager('KONEKSI_DEVICE_ID');
export const tokenManager = localStorageManager('KONEKSI_USER_TOKEN');
export const userDataManager = localStorageManager('KONEKSI_USER_DATA');
export const imageDataManager = localStorageManager('KONEKSI_IMAGE_DATA');
export const scannerDataManager = localStorageManager('KONEKSI_SCANNER_DATA');