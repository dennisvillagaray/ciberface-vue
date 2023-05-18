import ApiService from "@/services/api";

class LikeService extends ApiService {
  constructor() {
    super();
    this.endPoint = "like/";
  }

  getLikes = async () => {
    const response = await this.http({
      endPoint: this.endPoint,
      method: "GET"
    });
    return response;
  };

  createLike = async (message) => {
    const response = await this.http({
      endPoint: this.endPoint,
      body: { message }
    });
    return response;
  };

  editLike = async (id, message) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "PUT",
      body: { message }
    });
    return response;
  };

  findOneLike = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "GET"
    });
    return response;
  };

  deleteLike = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "DELETE"
    });
    return response;
  };
}
export default LikeService;
