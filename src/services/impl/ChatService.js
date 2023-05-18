import ApiService from "@/services/api";

class ChatService extends ApiService {
  constructor() {
    super();
    this.endPoint = "chat/";
  }

  getChats = async () => {
    const response = await this.http({
      endPoint: this.endPoint,
      method: "GET"
    });
    return response;
  };

  createChat = async (message) => {
    const response = await this.http({
      endPoint: this.endPoint,
      body: { message }
    });
    return response;
  };

  editChat = async (id, message) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "PUT",
      body: { message }
    });
    return response;
  };

  findOneChat = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "GET"
    });
    return response;
  };

  deleteChat = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "DELETE"
    });
    return response;
  };
}
export default ChatService;
