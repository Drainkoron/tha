export default function fetchPost(url, body) {
    return new Promise(function(resolve, reject) {
        fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then((data) => {
            resolve(data)
        }).catch((error) => {
            reject(error)
        });
    });
}