import { API_URL } from "./settings";
import uuid4 from "uuid-v4";
/**
 * Return a fetch promise based on a JSONRPC call
 * @param endpoint The JSONRPC endpoint. Is added to API_URL
 * @param method The JSONRPC Method
 * @param params Object containing the method's parameters
 * @returns fetch promise
 */
export async function jsonRpcApiCall(endpoint: string, method: string, params: object) {

    const jsonrpcData = {
        jsonrpc: "2.0",
        method: method,
        params: params,
        id: uuid4()
    }
    const options = {
        method: "POST",
        body: JSON.stringify(jsonrpcData),
        headers: {
            "Content-Type": "application/json"
        }
    }

    return await fetch(API_URL + endpoint, options)

}