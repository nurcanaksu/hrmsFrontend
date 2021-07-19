import axios from "axios";

let baseUrl = "http://localhost:9090/api/resumeLinks";

export default class ResumeLinkService{

    getResumes(){
        return axios.get(baseUrl + "/getall");
    }

    getById(id){
        return axios.get(baseUrl + "/getById?id="+id)
    }

    getAllByResume_Id(resumeId){
        return axios.get(baseUrl + "/getAllByResume_Id?resumeId="+resumeId)
    }
}