import React, { useState, useEffect } from "react";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import EmploymentTypeService from "../../services/employmentTypeService";

import { Header,  Menu } from "semantic-ui-react";

export default function Filters() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  const [jobpositions, setJobpositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobpositions(result.data.data));
  }, []);
  
  const [employmentTypes, setEmploymentTypes] = useState([]);
  useEffect(() => {
    let employmentTypeService = new EmploymentTypeService();
    employmentTypeService.getall().then((result) => setEmploymentTypes(result.data.data));
  }, []);

  return (
    <div>
      <Menu vertical>

        <Menu.Item>
          <Header as='h4'>Filters</Header>
        </Menu.Item>

        <Menu.Item>
          <label htmlFor="city">City</label>
          <select name="" id="city" style={{ marginTop: "1em" }}>
            {cities.map((city) => (
              <option key={city.id} value={city}>
                {city.cityName}
              </option>
            ))}
          </select>
        </Menu.Item>

        <Menu.Item>
          <label htmlFor="jobposition">Job Position</label>
          <select name="" id="jobposition" style={{ marginTop: "1em" }}>
            {jobpositions.map((jobposition) => (
              <option key={jobposition.id} value={jobposition}>
                {jobposition.titleName}
              </option>
            ))}
          </select>
        </Menu.Item>
        
        <Menu.Item>
          <label htmlFor="employmentType">Employment Type</label>
          <select name="" id="employmentType"style={{ marginTop: "1em" }}>
            {employmentTypes.map((employmentType) => (
              <option key={employmentType.id} value={employmentType}>
                {employmentType.typeName}
              </option>
            ))}
          </select>
        </Menu.Item>

        <Menu.Item>
          <button type="submit">Apply</button>
        </Menu.Item>
      </Menu>

     
    </div>
  );
}
