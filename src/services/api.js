class ApiService {
  #BASE_URL = process.env.API || "http://localhost:3000/api/";

  #api = async ({ endPoint, method = "POST", body = {}, headers = {} }) => {
    try {
      const response = await fetch(`${this.#BASE_URL}/${endPoint}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          ...headers
        },
        body: new URLSearchParams(body),
        method
      });
      const responseJSON = await response.json();
      return { statusCode: response.status, data: responseJSON };
    } catch (err) {
      return { statusCode: 502, data: null };
    }
  };
  http = async ({ endPoint, method = "POST", body = {}, headers = {} }) => {
    const response = await this.#api({ endPoint, method, body, headers });
    return response;
  };
}
export default ApiService;
