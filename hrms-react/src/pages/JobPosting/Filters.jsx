import React, { useState, useEffect } from "react";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";

import { Header, Menu } from "semantic-ui-react";

export default function Filters() {
  const [jobpositions, setJobpositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobpositions(result.data.data));
  }, []);

  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  return (
    <div>
      <Menu vertical>
        <Menu.Item>
          <Header as="h4">Filters</Header>
        </Menu.Item>

        <Menu.Item>
          <label htmlFor="jobposition">Job Position</label>
          <select name="" id="jobposition">
            {jobpositions.map((jobposition) => (
              <option key={jobposition.id} value={jobposition}>
                {jobposition.titleName}
              </option>
            ))}
          </select>
        </Menu.Item>
        <Menu.Item>
          <label htmlFor="city">City</label>
          <select name="" id="city">
            {cities.map((city) => (
              <option key={city.id} value={city}>
                {city.cityName}
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
