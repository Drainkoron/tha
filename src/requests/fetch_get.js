export default function fetchGet(url) {
    return new Promise(function(resolve, reject) {
        fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAyNzYzODMxLCJqdGkiOiI3YTNjYTg1YTVmODY0ZTNlODI0OWI5YjdlMWQ3NGY3NyIsInVzZXJfaWQiOjcyfQ.YBa8qInM_UBNRNvdIoEDNuRwz5RToYV8BrbqXlOPNIM'
            }
        }).then((data) => {
            resolve(data)
        }).catch((error) => {
            reject(error)
        });
    });
}