import axios from "axios";

export default class CityService{
    getCities(){
        return axios.get("http://localhost:9090/api/cities/getAll");
    }
}