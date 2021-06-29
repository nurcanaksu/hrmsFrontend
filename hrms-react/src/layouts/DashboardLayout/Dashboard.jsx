import React from "react";
import EmployersList from "../../pages/Employer/EmployersList";
import EmployeesList from "../../pages/Employee/EmployeesList";
import JobPostingsList from "../../pages/JobPosting/JobPostingsList";
import CandidatesList from "../../pages/Candidate/CandidatesList";
import ResumesList from "../../pages/Resume/ResumesList";
import Management from "./Management";
import { Grid } from "semantic-ui-react";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Management />
          </Grid.Column>
          <Grid.Column width={12}>
            <EmployersList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={12}>
            <JobPostingsList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={12}>
            <EmployeesList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={12}>
            <CandidatesList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={12}>
            <ResumesList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
    </div>
  );
}
