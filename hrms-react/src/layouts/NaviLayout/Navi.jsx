import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" size="large">
        <Container>
          <Link to="/jobPostings">
            <Menu.Item name="building outline">
              <Icon name="building outline" size="large" />
              HRMS
            </Menu.Item>
          </Link>
          <Link to="/jobPostings">
            <Menu.Item name="Job Postings" />
          </Link>
          <Link to="/candidates">
            <Menu.Item name="Candidates" />
          </Link>
          <Link to="/employers">
            <Menu.Item name="Employers" />
          </Link>
          <Link to="/employees">
            <Menu.Item name="Employees" />
          </Link>
          <Link to="/resumes">
            <Menu.Item name="Resumes" />
          </Link>

          <Menu.Menu position="right">
            <Menu.Item>
              <Button primary>Sign In</Button>
              <Button secondary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
