import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import EmploymentTypeService from "../../services/employmentTypeService";
import JobPostingService from "../../services/jobPostingService";

export default function AddJobPosting() {
  let jobPostingService = new JobPostingService();

  const AddJobPostingSchema = Yup.object().shape({
    description: Yup.string().required("This field is required"),
    minSalary: Yup.number().min(0, "0 Dan az olamaz"),
    maxSalary: Yup.number().min(0, "0 Dan az olamaz"),
    openPositionsCount: Yup.string()
      .required("This field is required")
      .min(1, "Posizyon sayısı 1 den küçük olamaz"),
    applicationDeadline: Yup.date()
      .nullable()
      .required("This field is required"),
    jobPositionId: Yup.string().required("This field is required"),
    cityId: Yup.string().required("This field is required"),
    employmentTypeId: Yup.string().required("This field is required"),
    isRemote: Yup.string().required("This field is required"),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      minSalary: "",
      maxSalary: "",
      openPositionsCount: "",
      applicationDeadline: "",
      jobPositionId: "",
      cityId: "",
      employmentTypeId: "",
      isRemote: "",
    },
    validationSchema: AddJobPostingSchema,
    onSubmit: (values) => {
      console.log(values);
      let addJobPosting = {
        description: values.description,
        maxSalary: values.maxSalary,
        minSalary: values.minSalary,
        openPositionsCount: values.openPositionsCount,
        applicationDeadline: values.applicationDeadline,
        jobPosition: { id: values.jobPositionId },
        city: { id: values.cityId },
        employmentType: { id: values.employmentTypeId },
        remote: values.isRemote,
        employer: { id: 3 } //employerId login işlemleri olmadığı için manuel veriliyor
      }
      jobPostingService.add(addJobPosting).then((result) => console.log(result.data));
      alert("İş ilanı eklendi personelin onayı ardından listelenecektir");
    },
  });

  const [jobPositions, setJobPositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [employmentTypes, setEmploymentTypes] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    let cityService = new CityService();
    let employmentTypeService = new EmploymentTypeService();

    jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    employmentTypeService.getall().then((result) => setEmploymentTypes(result.data.data));
  }, []);

  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.titleName,
    value: jobPosition.id,
  }));

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));

  const employmentTypeOption = employmentTypes.map((employmentType, index) => ({
    key: index,
    text: employmentType.typeName,
    value: employmentType.id,
  }));

  const isRemoteOption = [{
    key: 'Yes',
    text: 'Yes',
    value: 'True',
  },
  {
    key: 'No',
    text: 'No',
    value: 'False',
  }
  ];
  
  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Card fluid>
        <Card.Content header="Add Job Posting" />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Grid>
              <Grid.Column width={8}>
                <Form.Field style={{ marginBottom: "1rem" }}>
                  <label>Job Position</label>
                  <Dropdown
                    clearable
                    item
                    placeholder="Job Position"
                    search
                    selection
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "jobPositionId")
                    }
                    onBlur={formik.onBlur}
                    id="jobPositionId"
                    value={formik.values.jobPositionId}
                    options={jobPositionOption}
                  />
                  {formik.errors.jobPositionId && formik.touched.jobPositionId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.jobPositionId}
                    </div>
                  )}
                </Form.Field>

                <Form.Field>
                  <label>City</label>
                  <Dropdown
                    clearable
                    item
                    placeholder="City"
                    search
                    selection
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "cityId")
                    }
                    onBlur={formik.onBlur}
                    id="cityId"
                    value={formik.values.cityId}
                    options={cityOption}
                  />
                  {formik.errors.cityId && formik.touched.cityId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.cityId}
                    </div>
                  )}
                </Form.Field>

                <Form.Field>
                  <label>Employment Type</label>
                  <Dropdown
                    clearable
                    item
                    placeholder="Employment Type"
                    search
                    selection
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "employmentTypeId")
                    }
                    onBlur={formik.onBlur}
                    id="employmentTypeId"
                    value={formik.values.employmentTypeId}
                    options={employmentTypeOption}
                  />
                  {formik.errors.employmentTypeId &&
                    formik.touched.employmentTypeId && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.employmentTypeId}
                      </div>
                  )}
                </Form.Field>

                <Form.Field style={{ marginBottom: "1rem" }}>
                  <label>Is Remote</label>
                  <Dropdown
                    clearable
                    item
                    placeholder="Is Remote"
                    search
                    selection
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "isRemote")
                    }
                    onBlur={formik.onBlur}
                    id="isRemote"
                    value={formik.values.isRemote}
                    options={isRemoteOption}
                  />
                  {formik.errors.isRemote && formik.touched.isRemote && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.isRemote}
                    </div>
                  )}
                </Form.Field>
              </Grid.Column>
              
              <Grid.Column width={8}>
                <Form.Field>
                  <label style={{ fontWeight: "bold" }}>
                  Minimum Salary
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Minimum Salary"
                    value={formik.values.minSalary}
                    name="minSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.minSalary && formik.touched.minSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.minSalary}
                    </div>
                  )}
                </Form.Field>

                <Form.Field>
                  <label style={{ fontWeight: "bold" }}>
                  Maximum Salary
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Maximum Salary"
                    value={formik.values.maxSalary}
                    name="maxSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.maxSalary && formik.touched.maxSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.maxSalary}
                    </div>
                  )}
                </Form.Field>

                <Form.Field>
                  <label style={{ fontWeight: "bold" }}>
                  Open Positions Count
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    id="openPositionsCount"
                    name="openPositionsCount"
                    error={Boolean(formik.errors.openPositionsCount)}
                    onChange={formik.handleChange}
                    value={formik.values.openPositionsCount}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Open Positions Count"
                  />
                  {formik.errors.openPositionsCount &&
                    formik.touched.openPositionsCount && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.openPositionsCount}
                      </div>
                    )}
                </Form.Field>

                <Form.Field>
                  <label style={{ fontWeight: "bold" }}>
                  Application Deadline
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="date"
                    error={Boolean(formik.errors.applicationDeadline)}
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "applicationDeadline")
                    }
                    value={formik.values.applicationDeadline}
                    onBlur={formik.handleBlur}
                    name="applicationDeadline"
                    placeholder="Application Deadline"
                  />
                  {formik.errors.applicationDeadline &&
                    formik.touched.applicationDeadline && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.applicationDeadline}
                      </div>
                    )}
                </Form.Field>

              </Grid.Column>
            </Grid>

            <Form.Field>
              <label>Description</label>
              <TextArea
                placeholder="Description"
                style={{ minHeight: 100 }}
                error={Boolean(formik.errors.description).toString()}
                value={formik.values.description}
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.description && formik.touched.description && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.description}
                </div>
              )}
            </Form.Field>
            <Button
              content="Add"
              labelPosition="right"
              icon="add"
              positive
              type="submit"
              style={{ marginLeft: "20px" }}
            />
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
