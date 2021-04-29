import Ajax from "./ajax.js";

const ajax = (url, options) => {
	return new Ajax(url, options).getXHR();
};

const get = (url, options) => {
	return ajax(url, { ...options, method: "GET" });
};

const getJSON = (url, options) => {
	return ajax(url, { ...options, method: "GET", responseType: "json" });
};

const post = (url, options) => {
	return ajax(url, { ...options, method: "POST" });
};

export { ajax, get, getJSON, post };
