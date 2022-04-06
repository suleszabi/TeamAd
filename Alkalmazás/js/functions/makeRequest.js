const makeRequest = (method, url, sendObj = {}) => {
    return new Promise(function (resolve, reject) {
        const dataToSend = new FormData();
        for(let key in sendObj) {
            dataToSend.append(key, sendObj[key]);
        }
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(dataToSend);
    });
}