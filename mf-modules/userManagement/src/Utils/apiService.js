

const apiSerivces = {
    baseUrl:' https://jsonplaceholder.typicode.com/',

    path(urlPath) {
        this._path = urlPath
        console.log("path", this)
        return this;
    },

    method(methodName) {
        this._method = methodName
        return this;
    },

    data(params) {
        this._data = params
        return this;
    },

    request(onSuccess, onError) {
        const link = this.baseUrl + this._path;
        let requestHeaders = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        // let oldToken = this.getToken();
        // if (oldToken != null && oldToken !== undefined) {
        //     requestHeaders["Authorization"] = `${oldToken}`;
        // }
        const requestMethod = this._method || "GET"
        let requestProps = {
            method: requestMethod,
            headers: requestHeaders,
            json: true
        }
        if (requestMethod !== "GET") {
            requestProps.body = JSON.stringify(this._data || {});
        }
        return fetch(link, requestProps)
            .then(res => res.json())
            .then(
                (result) => {
                    onSuccess(result, this._data)
                }
            )
            .catch(error => {
                if (onError && typeof onError === "function") {
                    onError(error, this._data)
                }
            });
    },
    
	}

   module.exports = apiSerivces;