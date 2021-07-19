import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Table, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import JobPostingService from "../../../services/jobPostingService";

export default function JobPostingDetail() {
  let { id } = useParams();

  const [jobPosting, setJobPosting] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();

    jobPostingService
      .getByJobPostingId(id)
      .then((result) => setJobPosting(result.data.data));
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
            <Table.Cell>{jobPosting.employer?.companyName}</Table.Cell>
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
            <Table.Cell>{jobPosting.employer?.webAddress}</Table.Cell>
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
            <Table.Cell>{jobPosting.employer?.email}</Table.Cell>
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
            <Table.Cell>{jobPosting.employer?.phoneNumber}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell colSpan="2">
              <Button as={Link} to={`/employers/${jobPosting.employer?.id}`}>
                Employer Details
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2" textAlign="center" inverted>
              Job Posting Information
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>Job Position</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobPosting.jobPosition?.titleName}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>City</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobPosting.city?.cityName}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>Remote</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobPosting.remote ? "Yes" : "No" }</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>Employment Type</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobPosting.employmentType?.typeName}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>Minimum Salary</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobPosting.minSalary}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>Maximum Salary</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobPosting.maxSalary}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>Open Positions Count</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobPosting.openPositionsCount}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>Description</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobPosting.description}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Header as="h4">
                <Header.Content>Application Deadline</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell colSpan="2">
              <Button as={Link} to={`/#`}>
                Apply
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
