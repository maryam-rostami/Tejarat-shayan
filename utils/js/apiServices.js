
// "برای API زدن چه برای گرفتن و چه ارسال دیتا از آبجکت apiServices استفاده و مشابه زیر متد های آن صدا زده میشوند"
// apiSerivces.baseUrl("https://jsonplaceholder.typicode.com/").path("users").method("GET").request((res) => {console.log(res)}, () => {});

export const apiSerivces = {
        baseUrl(baseUrl) {
            this._baseUrl = baseUrl;
            console.log("baseUrl", this);
            return this;
        },

        path(urlPath) {
            this._path = urlPath;
            console.log("path", this);
            return this;
        },

        method(methodName) {
            this._method = methodName;
            return this;
        },

        data(params) {
            this._data = params;
            return this;
        },

        request(onSuccess, onError) {
            const link = this._baseUrl + this._path;
            let requestHeaders = {
                "Content-Type": "application/json",
                Accept: "application/json",
            };
            // let oldToken = this.getToken();
            // if (oldToken != null && oldToken !== undefined) {
            //     requestHeaders["Authorization"] = `${oldToken}`;
            // }
            const requestMethod = this._method || "GET";
            let requestProps = {
                method: requestMethod,
                headers: requestHeaders,
                json: true,
            };
            if (requestMethod !== "GET") {
                requestProps.body = JSON.stringify(this._data || {});
            }
            return fetch(link, requestProps)
                .then((res) => res.json())
                .then((result) => {
                    onSuccess(result, this._data);
                })
                .catch((error) => {
                    if (onError && typeof onError === "function") {
                        onError(error, this._data);
                    }
                });
        },
    };


