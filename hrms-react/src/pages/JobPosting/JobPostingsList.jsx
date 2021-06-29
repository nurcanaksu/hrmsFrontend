import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobPostingService from "../../services/jobPostingService";
import { Header, Icon } from "semantic-ui-react";
const colors = ["blue"];

export default function JobPostings() {
    const [jobPostings, setJobPostings] = useState([]);

    useEffect(()=>{
      let jobPostingService = new JobPostingService()
      jobPostingService.getJobPostings().then(result=>setJobPostings(result.data.data))
    })
  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Job Postings List</Header.Content>
      </Header>
      {colors.map((color) => (
        <Table color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Açıklama</Table.HeaderCell>
              <Table.HeaderCell>Oluşturma Tarihi</Table.HeaderCell>
              <Table.HeaderCell>Minimum Maaş</Table.HeaderCell>
              <Table.HeaderCell>Maximum Maaş</Table.HeaderCell>
              <Table.HeaderCell>Boş Pozisyon sayısı</Table.HeaderCell>
              <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {jobPostings.map((jobPosting) => (
              <Table.Row>
                <Table.Cell>{jobPosting.description}</Table.Cell>
                <Table.Cell>{jobPosting.createdDate}</Table.Cell>
                <Table.Cell>{jobPosting.minSalary}</Table.Cell>
                <Table.Cell>{jobPosting.maxSalary}</Table.Cell>
                <Table.Cell>{jobPosting.openPositionsCount}</Table.Cell>
                <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ))}
    </div>
  );
}
