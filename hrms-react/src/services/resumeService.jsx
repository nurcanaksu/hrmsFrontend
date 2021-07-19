import axios from "axios";

export default class ResumeService {
  getResumes() {
    return axios.get("http://localhost:9090/api/resumes/getall");
  }
}
