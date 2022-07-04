import fetch from '@system.fetch';

const url = "http://127.0.0.1:8080/multimedia";
/**
 * POST请求
 * @param params
 */
export function post(params,method) {
    fetch.fetch({
        url: url + method,
        data: params,
        method: 'POST',
        header: [],
        responseType: "json",
        success(data) {
            return data;
        },
        fail() {
            console.log("是啊不");
        }
    })
}

export const ParamsEntity = {
    data: Object,
    key: String,
}