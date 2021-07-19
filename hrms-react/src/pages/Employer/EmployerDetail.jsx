import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Table, Icon, Card, Button } from "semantic-ui-react";
import EmployerService from "../../services/employerService";
import JobPostingService from "../../services/jobPostingService";
import { Link } from "react-router-dom";

export default function EmployerDetail() {
  let { id } = useParams();

  const [employer, setEmployer] = useState([]);
  const [jobPostings, setJobPosting] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    let jobPostingService = new JobPostingService();

    employerService.getById(id).then((result) => setEmployer(result.data.data));
    jobPostingService.getAllByEmployerIdDto(id).then((result) => setJobPosting(result.data.data));
  }, [id]);

  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2" textAlign="center" inverted>
              Employer Information
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>
                  <Icon name="building" />
                  Company Name
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.companyName}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>
                  <Icon name="world" />
                  Web Address
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.webAddress}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>
                  <Icon name="mail" />
                  Email
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.email}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>
                  <Icon name="phone" />
                  Phone Number
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.phoneNumber}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>
                  <Icon name="calendar alternate outline" />
                  Membership Date
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.createdDate}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Card fluid>
        <Card.Content header="Company Job Postings" />
        <Card.Content>
          <Table color={"black"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Job Position Name</Table.HeaderCell>
                <Table.HeaderCell>Open Positions Count</Table.HeaderCell>
                <Table.HeaderCell>Created Date</Table.HeaderCell>
                <Table.HeaderCell>Application Deadline</Table.HeaderCell>
                <Table.HeaderCell>Detail</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {jobPostings.map((jobPosting) => (
                <Table.Row key={jobPosting.id}>
                  <Table.Cell>{jobPosting.jobPositionName}</Table.Cell>
                  <Table.Cell>{jobPosting.openPositionsCount}</Table.Cell>
                  <Table.Cell>{jobPosting.createdDate}</Table.Cell>
                  <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
                  <Table.Cell>
                    <Button as={Link} to={`/jobPosting/${jobPosting.id}`}>
                        View
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    </div>
  );
}
