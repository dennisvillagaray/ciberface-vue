import ApiService from "@/services/api";

class FriendShipService extends ApiService {
  constructor() {
    super();
    this.endPoint = "friendship/";
  }

  getFriendShips = async () => {
    const response = await this.http({
      endPoint: this.endPoint,
      method: "GET"
    });
    return response;
  };

  createFriendShip = async (message) => {
    const response = await this.http({
      endPoint: this.endPoint,
      body: { message }
    });
    return response;
  };

  editFriendShip = async (id, message) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "PUT",
      body: { message }
    });
    return response;
  };

  findOneFriendShip = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "GET"
    });
    return response;
  };

  deleteFriendShip = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "DELETE"
    });
    return response;
  };

  // pendiente el /api/friendship/{id}/create-friendship/{friendId}
}
export default FriendShipService;
