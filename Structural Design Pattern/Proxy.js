class API {
  request(url) {
    console.log(`Fetching data from ${url}`);
  }
}

class APIProxy {
  constructor() {
    this.cache = {};
    this.api = new API();
  }

  request(url) {
    if (this.cache[url]) {
      console.log(`Returning cached response for ${url}`);
      return this.cache[url];
    }
    const response = this.api.request(url);
    this.cache[url] = response;
    return response;
  }
}

// Usage
const proxy = new APIProxy();
proxy.request("https://api.example.com/data");
proxy.request("https://api.example.com/data"); // Cached
