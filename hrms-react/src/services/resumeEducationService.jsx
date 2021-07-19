import axios from "axios";

let baseUrl = "http://localhost:9090/api/resumeEducations";

export default class ResumeEducationService{

    getall(){
        return axios.get(baseUrl + "/getall");
    }

    getById(id){
        return axios.get(baseUrl + "/getById?id="+id)
    }

    getAllByResume_Id(resumeId){
        return axios.get(baseUrl + "/getAllByResume_Id?resumeId="+resumeId)
    }

    getAllByResume_IdOrderByGraduationDate(resumeId){
        return axios.get(baseUrl + "/getAllByResume_IdOrderByGraduationDate?resumeId="+resumeId)
    }

    getAllByResume_IdOrderByGraduationDateDesc(resumeId){
        return axios.get(baseUrl + "/getAllByResume_IdOrderByGraduationDateDesc?resumeId="+resumeId)
    }
}