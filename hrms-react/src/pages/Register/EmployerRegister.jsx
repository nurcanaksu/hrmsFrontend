import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Header, Form, Grid, Segment } from "semantic-ui-react";
import AuthService from "../../services/authService";

export default function EmployerRegister() {
  let authService = new AuthService();

  const employerRegisterSchema = Yup.object().shape({
    companyName: Yup.string()
      .required("Şirket adı zorunludur")
      .min(2, "Şirket adı en az iki uzunlukta olmalıdır"),

    phoneNumber: Yup.string()
      .required("Telefon numarası zorunludur")
      .length(10, "Telefon numarası hatalı '0' olmadan yazınız")
      .matches(/^[0-9]+$/, "Sadece rakam girilmelidir"),

    password: Yup.string()
      .required("Şifre zorunludur")
      .min(8, "Şifre en az 8 karakter uzunluğunda olmalıdır"),

    rePassword: Yup.string()
      .required("Şifre tekrarı zorunludur")
      .oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor"),

      webAddress: Yup.string()
      .required("Web sitesi zorunludur")
      .test("Http olmadan yazınız", function () {
        let site = this.parent["webAddress"];
        if (site) {
          return site.startsWith("http") ? false : true;
        }
      }),

    email: Yup.string()
      .required("Email zorunludur")
      .email("Geçerli bir email değil")
      .test("Email domaini ile web sitesi domaini aynı olmalıdır", function () {
        let site = this.parent["webAddress"];
        let email = this.parent["email"];
        if (site && email) {
          return email.endsWith(site) ? true : false;
        }
      }),
  });

  const formik = useFormik({
    initialValues: {
      companyName: "",
      password: "",
      rePassword: "",
      webAddress: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: employerRegisterSchema,
    onSubmit: (values) => {
      console.log(values);
      authService.registerForEmployer(values).then((result) => alert(result.data.message))
    },
  });

  return (
    <div>
      <Header as="h2" textAlign="center">
      Employer Registration Form
      </Header>
      <Form size="large" onSubmit={formik.handleSubmit}>
        <Segment>
          <Grid>
            <Grid.Column width={8}>
              <div style={{ marginTop: "1em" }}>
                <label>
                  <b>Company Name</b>
                </label>
                <Form.Input
                  fluid
                  icon="building"
                  iconPosition="left"
                  placeholder="Company Name"
                  type="text"
                  value={formik.values.companyName}
                  name="companyName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.companyName && formik.touched.companyName && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.companyName}
                  </div>
                )}
              </div>

              <div style={{ marginTop: "1em" }}>
                <label>
                  <b>Phone Number</b>
                </label>
                <Form.Input
                  fluid
                  icon="phone"
                  iconPosition="left"
                  placeholder="Phone Number"
                  type="text"
                  value={formik.values.phoneNumber}
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.phoneNumber}
                  </div>
                )}
              </div>

              <div style={{ marginTop: "1em" }}>
                <label>
                  <b>Web Address</b>
                </label>
                <Form.Input
                  fluid
                  icon="world"
                  iconPosition="left"
                  placeholder="Web Address"
                  type="text"
                  name="webAddress"
                  value={formik.values.webAddress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.webAddress && formik.touched.webAddress && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.webAddress}
                  </div>
                )}
              </div>
            </Grid.Column>

            <Grid.Column width={8}>
              <div style={{ marginTop: "1em" }}>
                <label>
                  <b>Email</b>
                </label>
                <Form.Input
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="Email"
                  type="email"
                  value={formik.values.email}
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div style={{ marginTop: "1em" }}>
                <label>
                  <b>Password</b>
                </label>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.password}
                  </div>
                )}
              </div>

              <div style={{ marginTop: "1em" }}>
                <label>
                  <b>Password Confirmation</b>
                </label>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password Confirmation"
                  type="password"
                  name="rePassword"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.rePassword && formik.touched.rePassword && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.rePassword}
                  </div>
                )}
              </div>
            </Grid.Column>
          </Grid>
        </Segment>

        <Grid width={6}>
          <Grid.Column textAlign="center">
            <Button positive size="large" type="submit">
            Register
            </Button>
          </Grid.Column>
        </Grid>
      </Form>
    </div>
  );
}
