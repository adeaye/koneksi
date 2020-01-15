import isUrl from 'is-url';
// const joinUrl = require('proper-url-join')
// const queryString = require('query-string')
// const axios = require('axios')
import axios from 'axios'
// const OAuth = require('oauth')

// function createAuthHeader(requestData, consumerToken, accessToken) {
//     const oauth = new OAuth({
//         consumer: consumerToken
//     });

//     return oauth.toHeader(oauth.authorize(requestData, accessToken));
// }

/**
 * @classdesc Represents an API call.
 * @class
 * @abstract
 */
class APICall {
    /**
     * Create a APICall.
     * @constructor
     * @param {string} baseURL - A string with the base URL for account.
     * @param {string} httpsAgent - A https agent.
     * @param {string} httpAgent - A http agent.
     * @param {Object} privateKey - An object with both the public and secret consumer keys.
     * @param {Object} secretKey - An object with both the public and secret access keys.
     * @param {Object} [data={}] - An object containing the query parameters.
     */
    constructor(baseURL, httpsAgent, httpAgent, publicKey, secretKey) {
        if (!isUrl(baseURL)) throw new Error('The base URL provided is not valid');

        this.baseURL = baseURL;
        this.httpsAgent = httpsAgent;
        this.httpAgent = httpAgent;
        this.publicKey = publicKey;
        this.secretKey = secretKey;
    }

    /**
     * Fetch the information from the API.
     * @return {Promise} - Returns a Promise that, when fulfilled, will either return an JSON Object with the requested
     * data or an Error with the problem.
     */
    async send(method, url, data = {}) {
        // let callURL = joinUrl(this.baseURL, url, {
        //     trailingSlash: true
        // });

        // const callUrl = this.baseURL + url

        let headers = {}
        try {
            if (method === 'POST') {
                headers = {
                    'Content-Type': 'application/json',
                    'publicKey': this.publicKey,
                    'secretKey': this.secretKey
                }
            }

            const resp = await axios({
                method,
                url: this.baseURL + url,
                data,
                headers
            });

            return resp.data;
        } catch (err) {
            const respon = {
                status: '05',
                message: err.message,
                data: {},
            };
            if (err.response) {
                respon.status = err.response.data.status || '05';
                respon.msg = err.response.data.message || 'failed';
                respon.data = err.response.data.data || {};
            }
            return respon;
        }
    }
}

// module.exports = APICall;
export default APICall;