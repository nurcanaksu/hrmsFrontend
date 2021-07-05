import React from "react";
import { Grid } from "semantic-ui-react";
import Filters from "./Filters";
import JobPostingsList from "./JobPostingsList";

export default function JobPostings() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Filters />
          </Grid.Column>
          <Grid.Column width={12}>
            <JobPostingsList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
