import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Table, Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CandidateService from "../../services/candidateService";
import ResumeService from "../../services/resumeService";

export default function CandidateDetail() {
  let { id } = useParams();

  const [candidate, setCandidate] = useState([]);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    let resumeService = new ResumeService();

    candidateService
      .getById(id)
      .then((result) => setCandidate(result.data.data));

    resumeService
      .getByCandidateId(id)
      .then((result) => setResumes(result.data.data));
  }, [id]);

  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2" textAlign="center" inverted>
              Candidate Information
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>First Name</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{candidate.firstName}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>Last Name</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{candidate.lastName}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>Nationality Id</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{candidate.nationalityId}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>Birth Date</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{candidate.birthDate}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>Email</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{candidate.email}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>Created Date</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{candidate.createdDate}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Card fluid>
        <Card.Content header="Resumes" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Detail</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {resumes.map((resume) => (
              <Table.Row key={resume.id}>
                <Table.Cell>{resume.id}</Table.Cell>
                <Table.Cell>{resume.title}</Table.Cell>
                <Table.Cell>
                  <Button as={Link} to={`/resumes/${resume.id}`}>
                    View
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>
    </div>
  );
}
