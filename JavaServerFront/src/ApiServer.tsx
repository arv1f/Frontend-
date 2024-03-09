export interface GetData {
  numberMy: number;
}
import axios from "axios";

class TodoService {
  private URL = "http://localhost:8080"; //`https://jsonplaceholder.typicode.com/todos`; //#url = `https://jsonplaceholder.typicode.com/todos`;
  async get() {
    return axios.get<GetData>(this.URL);
  }
  async create(numberMy: number) {
    console.log(numberMy, "create");
    return axios.post<GetData>(`${this.URL}/${numberMy}`, {
      data: { id: numberMy },
    });
  }
}
export default new TodoService();
