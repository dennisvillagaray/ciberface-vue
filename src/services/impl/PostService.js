import ApiService from "@/services/api";

class PostService extends ApiService {
  constructor() {
    super();
    this.endPoint = "post/";
  }

  getPosts = async () => {
    const response = await this.http({
      endPoint: this.endPoint,
      method: "GET"
    });
    return response;
  };

  createPost = async (message) => {
    const response = await this.http({
      endPoint: this.endPoint,
      body: { message }
    });
    return response;
  };

  editPost = async (id, message) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "PUT",
      body: { message }
    });
    return response;
  };

  findOnePost = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "GET"
    });
    return response;
  };

  deletePost = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "DELETE"
    });
    return response;
  };
}
export default PostService;
