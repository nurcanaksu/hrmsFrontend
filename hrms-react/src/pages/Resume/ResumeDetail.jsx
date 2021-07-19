import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Table, Card } from "semantic-ui-react";
import ResumeCoverLetterService from "../../services/resumeCoverLetterService";
import ResumeEducationService from "../../services/resumeEducationService";
import ResumeJobExperienceService from "../../services/resumeJobExperienceService";
import ResumeLanguageService from "../../services/resumeLanguageService";
import ResumeLinkService from "../../services/resumeLinkService";
import ResumeService from "../../services/resumeService";
import ResumeSkillService from "../../services/resumeSkillService";

export default function ResumeDetail() {
  let { id } = useParams();

  const [resumeCoverLetters, setResumeCoverLetter] = useState([]);
  const [resumeEducations, setResumeEducation] = useState([]);
  const [resumeJobExperiences, setResumeJobExperience] = useState([]);
  const [resumeLanguages, setResumeLanguage] = useState([]);
  const [resumeLinks, setResumeLink] = useState([]);
  const [resume, setResume] = useState([]);
  const [resumeSkills, setResumeSkill] = useState([]);

  useEffect(() => {
    let resumeCoverLetterService = new ResumeCoverLetterService();
    let resumeEducationService = new ResumeEducationService();
    let resumeJobExperienceService = new ResumeJobExperienceService();
    let resumeLanguageService = new ResumeLanguageService();
    let resumeLinkService = new ResumeLinkService();
    let resumeService = new ResumeService();
    let resumeSkillService = new ResumeSkillService();

    resumeCoverLetterService
      .getAllByResume_Id(id)
      .then((result) => setResumeCoverLetter(result.data.data));

    resumeEducationService
      .getAllByResume_IdOrderByGraduationDateDesc(id)
      .then((result) => setResumeEducation(result.data.data));

    resumeJobExperienceService
      .getAllByResume_IdOrderByFinishDateDesc(id)
      .then((result) => setResumeJobExperience(result.data.data));

    resumeLanguageService
      .getAllByResume_Id(id)
      .then((result) => setResumeLanguage(result.data.data));

    resumeLinkService
      .getAllByResume_Id(id)
      .then((result) => setResumeLink(result.data.data));

    resumeService.getById(id).then((result) => setResume(result.data.data));

    resumeSkillService
      .getAllByResume_Id(id)
      .then((result) => setResumeSkill(result.data.data));
  }, [id]);

  return (
    <div>
      <Card fluid>
        <Card.Content header={resume.title} />
      </Card>

      <Card fluid>
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
              <Table.Cell>{resume.candidate?.firstName}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>
                <Header as="h4">
                  <Header.Content>Last Name</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{resume.candidate?.lastName}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>
                <Header as="h4">
                  <Header.Content>Nationality Id</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{resume.candidate?.nationalityId}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>
                <Header as="h4">
                  <Header.Content>Birth Date</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{resume.candidate?.birthDate}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>
                <Header as="h4">
                  <Header.Content>Email</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{resume.candidate?.email}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>
                <Header as="h4">
                  <Header.Content>Created Date</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{resume.candidate?.createdDate}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Card>

      <Card fluid>
        <Card.Content header="Links" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Link Name</Table.HeaderCell>
              <Table.HeaderCell>Link Url</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {resumeLinks.map((resumeLink) => (
              <Table.Row key={resumeLink.id}>
                <Table.Cell collapsing>{resumeLink.id}</Table.Cell>
                <Table.Cell>{resumeLink.linkName}</Table.Cell>
                <Table.Cell>{resumeLink.linkUrl}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      <Card fluid>
        <Card.Content header="Cover Letters" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Cover Letter</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {resumeCoverLetters.map((resumeCoverLetter) => (
              <Table.Row key={resumeCoverLetter.id}>
                <Table.Cell collapsing>{resumeCoverLetter.id}</Table.Cell>
                <Table.Cell>{resumeCoverLetter.title}</Table.Cell>
                <Table.Cell>{resumeCoverLetter.coverLetter}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      <Card fluid>
        <Card.Content header="Job Experiences" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Job Position</Table.HeaderCell>
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.HeaderCell>Start Date</Table.HeaderCell>
              <Table.HeaderCell>Finish Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {resumeJobExperiences.map((resumeJobExperience) => (
              <Table.Row key={resumeJobExperience.id}>
                <Table.Cell>{resumeJobExperience.id}</Table.Cell>
                <Table.Cell>
                  {resumeJobExperience.jobPosition?.titleName}
                </Table.Cell>
                <Table.Cell>{resumeJobExperience.companyName}</Table.Cell>
                <Table.Cell>{resumeJobExperience.startDate}</Table.Cell>
                <Table.Cell>{resumeJobExperience.finishDate}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      <Card fluid>
        <Card.Content header="Educations" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>School Name</Table.HeaderCell>
              <Table.HeaderCell>Department Name</Table.HeaderCell>
              <Table.HeaderCell>Start Date</Table.HeaderCell>
              <Table.HeaderCell>Graduation Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {resumeEducations.map((resumeEducation) => (
              <Table.Row key={resumeEducation.id}>
                <Table.Cell>{resumeEducation.id}</Table.Cell>
                <Table.Cell>{resumeEducation.schoolName}</Table.Cell>
                <Table.Cell>{resumeEducation.departmentName}</Table.Cell>
                <Table.Cell>{resumeEducation.startDate}</Table.Cell>
                <Table.Cell>{resumeEducation.graduationDate}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      <Card fluid>
        <Card.Content header="Skills" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Skill Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {resumeSkills.map((resumeSkill) => (
              <Table.Row key={resumeSkill.id}>
                <Table.Cell>{resumeSkill.id}</Table.Cell>
                <Table.Cell>{resumeSkill.name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      <Card fluid>
        <Card.Content header="Languages" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Language Name</Table.HeaderCell>
              <Table.HeaderCell>Level</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {resumeLanguages.map((resumeLanguage) => (
              <Table.Row key={resumeLanguage.id}>
                <Table.Cell>{resumeLanguage.id}</Table.Cell>
                <Table.Cell>{resumeLanguage.language?.languageName}</Table.Cell>
                <Table.Cell>{resumeLanguage.level}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>
    </div>
  );
}
