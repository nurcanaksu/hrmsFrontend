import React, { useState, useEffect } from "react";
import { Table, Button, Header, Icon } from "semantic-ui-react";
import ResumeService from "../../services/resumeService";
import { Link } from "react-router-dom";

export default function ResumesList() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService.getResumes().then((result) => setResumes(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Resumes List</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Nationality Id</Table.HeaderCell>
            <Table.HeaderCell>Birth Date</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {resumes.map((resume) => (
            <Table.Row key={resume.id}>
              <Table.Cell>{resume.candidate.firstName}</Table.Cell>
              <Table.Cell>{resume.candidate.lastName}</Table.Cell>
              <Table.Cell>{resume.candidate.email}</Table.Cell>
              <Table.Cell>{resume.candidate.nationalityId}</Table.Cell>
              <Table.Cell>{resume.candidate.birthDate}</Table.Cell>
              <Table.Cell>
                <Button as={Link} to={`/resumes/${resume.id}`}>View</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
