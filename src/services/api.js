import axios from "axios";

class ApiService {
  // #BASE_URL = process.env.API || "http://localhost:3000/api/";
  #BASE_URL = "https://646a555470b2302c85e2ed40.mockapi.io";

  #api = async ({ endPoint, method = "POST", body = {}, headers = {} }) => {
    try {
      const response = await axios({
        method: method,
        url: `${this.#BASE_URL}/${endPoint}`,
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        data: body
      });
      return { statusCode: response.status, data: response.data };
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
