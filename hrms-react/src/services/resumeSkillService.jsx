import axios from "axios";

let baseUrl = "http://localhost:8080/api/resumeSkills";

export default class ResumeSkillService{

    getall(){
        return axios.get(baseUrl + "/getall");
    }

    getById(id){
        return axios.get(baseUrl + "/getById?id="+id)
    }

    getAllByResume_Id(resumeId){
        return axios.get(baseUrl + "/getAllByResume_Id?resumeId="+resumeId)
    }
}