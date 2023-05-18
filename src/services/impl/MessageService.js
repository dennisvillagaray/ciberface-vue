import ApiService from "@/services/api";

class MessageService extends ApiService {
  constructor() {
    super();
    this.endPoint = "message/";
  }

  getMessages = async () => {
    const response = await this.http({
      endPoint: this.endPoint,
      method: "GET"
    });
    return response;
  };

  createMessage = async (message) => {
    const response = await this.http({
      endPoint: this.endPoint,
      body: { message }
    });
    return response;
  };

  editMessage = async (id, message) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "PUT",
      body: { message }
    });
    return response;
  };

  findOneMessage = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "GET"
    });
    return response;
  };

  deleteMessage = async (id) => {
    const response = await this.http({
      endPoint: `${this.endPoint}/${id}`,
      method: "DELETE"
    });
    return response;
  };

  // /api/message/chat/{chatId}
  // /api/message/get-messages-by-chat/{id}
}
export default MessageService;
