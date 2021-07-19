import React, { useState, useEffect } from 'react'
import { Table, Button, Header, Icon } from "semantic-ui-react";
import JobPostingService from "../../services/jobPostingService";
import { Link } from 'react-router-dom';

export default function JobPostingsList() {
    const [jobPostings, setJobPostings] = useState([]);
  
    useEffect(()=>{
      let jobPostingService = new JobPostingService()
      jobPostingService.getJobPostings().then(result=>setJobPostings(result.data.data))
    },[])
    
    return (
        <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Job Postings List</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Employment Type</Table.HeaderCell>
            <Table.HeaderCell>Remote</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {jobPostings.map((jobPosting) => (

            <Table.Row key={jobPosting.id}>
              <Table.Cell>{jobPosting.jobPosition.name}</Table.Cell>
              <Table.Cell>{jobPosting.employer.company_name}</Table.Cell>
              <Table.Cell>{jobPosting.city.city_name}</Table.Cell>
              <Table.Cell>{jobPosting.employmentType.type_name}</Table.Cell>
              <Table.Cell>{jobPosting.remote.toString()}</Table.Cell>
              <Table.Cell>
                <Button as={Link} to={`/jobPosting/${jobPosting.id}`}>View</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
