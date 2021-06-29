import axios from "axios";

export default class CandidateService
{
  getCandidates()
  {
      return axios.get("http://localhost:9090/api/candidates/getAll")
  }

}