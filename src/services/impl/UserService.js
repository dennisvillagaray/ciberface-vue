import ApiService from "@/services/api";

class UserService extends ApiService {
  constructor() {
    super();
    this.endPoint = "user";
  }

  getUsers = async () => {
    const response = await this.http({
      endPoint: this.endPoint,
      method: "GET"
    });
    return response;
  };

  createUser = async (message) => {
    const response = await this.http({
      endPoint: this.endPoint,
      body: message
    });
    return response;
  };

  editUser = async (id, message) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "PUT",
      body: { message }
    });
    return response;
  };

  findOneUser = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "GET"
    });
    return response;
  };

  deleteUser = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "DELETE"
    });
    return response;
  };

    // * temporal

  getContactsByUserId = async (userId) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${userId}/contacts`,
      method: "GET"
    });
    return response;
  };
}
export default UserService;
