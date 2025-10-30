class ApiService {
  fetchData(endpoint) {
    console.log(`Fetching from server: ${endpoint}`);
    return `Data from ${endpoint}`;
  }
}

class CachingProxy {
  constructor() {
    this.apiService = new ApiService();
    this.cache = {};
  }

  fetchData(endpoint) {
    if (this.cache[endpoint]) {
      console.log(`Returning cached data for ${endpoint}`);
      return this.cache[endpoint];
    }
    const data = this.apiService.fetchData(endpoint);
    this.cache[endpoint] = data;
    return data;
  }
}

// Usage
const api = new CachingProxy();
console.log(api.fetchData("/users")); // Fetching from server
console.log(api.fetchData("/users")); // Returning cached data
