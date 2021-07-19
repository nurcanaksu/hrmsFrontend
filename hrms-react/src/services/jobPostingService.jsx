import axios from "axios";

let baseUrl = "http://localhost:9090/api/jobpostings";

export default class JobPostingService{
    
    getJobPostings(){
        return axios.get(baseUrl + "/getall");
    }

    getByJobPostingId(id){
        return axios.get(baseUrl + "/getById?id="+id)
    }

    getAllByEmployerIdDto(employerId){
        return axios.get(baseUrl + "/getAllByEmployerIdDto?employerId="+employerId)
    }

    add(jobPosting){
        return axios.post(baseUrl + "/add", jobPosting);
    }
}