import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
import { Container, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item as={Link} to={"/jobPostings"} name="building outline">
            <Icon name="building outline" size="large" />
            HRMS
          </Menu.Item>
          <Menu.Item as={Link} to={"/jobPostings"} name="Job Postings" />
          <Menu.Item as={Link} to={"/candidates"} name="Candidates" />
          <Menu.Item as={Link} to={"/employers"} name="Employers" />
          <Menu.Item as={Link} to={"/employees"} name="Employees" />
          <Menu.Item as={Link} to={"/resumes"} name="Resumes" />

          <Menu.Menu position="right">
            <Menu.Item>
              <Button
                color="grey"
                as={Link}
                to={"/addJobPosting"}
                style={{ marginRight: 1 + "em" }}
              >
                Advertise
              </Button>
              <Button.Group>
                <Button primary>Sign Up</Button>
                <Button.Or />
                <Button positive>
                  <Dropdown text="Sign In" pointing>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        as={Link}
                        to={"/candidateRegister"}
                        text="Candidate Register"
                      />
                      <Dropdown.Item
                        as={Link}
                        to={"/employerRegister"}
                        text="Employer Register"
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
