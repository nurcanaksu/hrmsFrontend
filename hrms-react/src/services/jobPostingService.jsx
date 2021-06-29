import axios from "axios";

export default class JobPostingService
{
  getJobPostings()
  {
      return axios.get("http://localhost:9090/api/jobpostings/getAllActiveJobPosting")
  }

}