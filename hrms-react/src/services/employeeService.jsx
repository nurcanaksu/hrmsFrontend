import axios from "axios";

export default class EmployeeService{
    getEmployees(){
        return axios.get("http://localhost:9090/api/employees/getall");
    }
}