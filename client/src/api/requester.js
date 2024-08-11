import { getAccessToken } from "../utils/authUtils";

async function request(method, url, data) {

    const options = {
        method,
    };

    const accessToken = getAccessToken();

    if(accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken,
        }
    }

    if(data) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        };
        options.body = JSON.stringify(data)
    };

    try {
        const response = await fetch(url, options);        

        if(response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if(response.status === 204) {
            return response;
        }

        return await response.json();

    } catch (error) {
        console.log(error.message);
    }
};

export function get(url) {
    return request('GET', url);
}

export function post(url, data) {
    return request('POST', url, data);
}

export function put(url, data) {
    return request('PUT', url, data);
}

export function del(url) {
    return request('DELETE', url);
}