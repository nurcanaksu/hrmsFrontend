import axios from "axios";

export default class EmployerService
{
  getEmployers()
  {
      return axios.get("http://localhost:9090/api/employers/getAll")
  }

}