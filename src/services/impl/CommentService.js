import ApiService from "@/services/api";

class CommentService extends ApiService {
  constructor() {
    super();
    this.endPoint = "comment/";
  }

  getComments = async () => {
    const response = await this.http({
      endPoint: this.endPoint,
      method: "GET"
    });
    return response;
  };

  createComment = async (message) => {
    const response = await this.http({
      endPoint: this.endPoint,
      body: { message }
    });
    return response;
  };

  editComment = async (id, message) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "PUT",
      body: { message }
    });
    return response;
  };

  findOneComment = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "GET"
    });
    return response;
  };

  deleteComment = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "DELETE"
    });
    return response;
  };
}
export default CommentService;
