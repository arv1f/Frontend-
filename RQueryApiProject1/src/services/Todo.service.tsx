import { GetData, ICreateUser } from "../interface";
import axios from "axios";
class TodoService {
  private URL = `https://jsonplaceholder.typicode.com/todos`; //#url = `https://jsonplaceholder.typicode.com/todos`;
  async getById(id: string) {
    return axios.get<GetData>(`${this.URL}/${id}`);
  }
  async getAll() {
    return axios.get<GetData[]>(`${this.URL}/?_start=0&_limit=5x`);
  }
  async create(title: string) {
    return axios.post<any, any, ICreateUser>(this.URL, {
      title,
      userId: 1,
      completed: false,
    });
  }
}
export default new TodoService();
