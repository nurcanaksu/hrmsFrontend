import axios from "axios";

let baseUrl = "http://localhost:9090/api/resumeJobExperiences";

export default class ResumeJobExperienceService{

    getall(){
        return axios.get(baseUrl + "/getall");
    }

    getById(id){
        return axios.get(baseUrl + "/getById?id="+id)
    }

    getAllByResume_Id(resumeId){
        return axios.get(baseUrl + "/getAllByResume_Id?resumeId="+resumeId)
    }

    getAllByResume_IdOrderByFinishDate(resumeId){
        return axios.get(baseUrl + "/getAllByResume_IdOrderByFinishDate?resumeId="+resumeId)
    }

    getAllByResume_IdOrderByFinishDateDesc(resumeId){
        return axios.get(baseUrl + "/getAllByResume_IdOrderByFinishDateDesc?resumeId="+resumeId)
    }
}