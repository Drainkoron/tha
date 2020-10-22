import { fetchGet, fetchPost } from './fetchMethodes'
import { URL } from './constants'

export const getReq = (endpoint, token = null) => {
    return new Promise(function(resolve, reject) {
        fetchGet(`${URL}/${endpoint}`, token).then((response) => {
            if(response.status == 200) {
                response.json().then((data) => {
                    resolve(data)
                })
            } else {
                response.text().then((data) => {
                    reject(data)
                })
            }
        }).catch((error) => {
            reject(error);
        });
    })
}

export function postReq(endpoint, requestObject, token = null) {
    return new Promise(function(resolve, reject) {
        fetchPost(`${URL}/${endpoint}/`, requestObject, token).then((response) => {
            if(response.status == 200) {
                response.json().then((data) => {
                    resolve(data)
                })
            } else {
                response.text().then((data) => {
                    reject(data)
                })
            }
        }).catch((error) => {
            reject(error);
        });
    })
}
