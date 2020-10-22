export const fetchGet = (url, token) => {
    return new Promise(function(resolve, reject) {
        fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((data) => {
            resolve(data)
        }).catch((error) => {
            reject(error)
        });
    });
}

export const fetchPost = (url, body, token) => {
    
    var headerToken
    token != null ? headerToken = {'Authorization': `Bearer ${token}`} : headerToken = null

    return new Promise(function(resolve, reject) {
        fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                ...headerToken
            },
            body: JSON.stringify(body)
        }).then((data) => {
            resolve(data)
        }).catch((error) => {
            reject(error)
        });
    });
}