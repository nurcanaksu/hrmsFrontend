import React from "react";
import { Route } from "react-router-dom";
import JobPostingDetail from "../../pages/JobPosting/JobPostingDetailPage/JobPostingDetail";
import JobPostings from "../../pages/JobPosting/JobPostings";
import CandidatesList from "../../pages/Candidate/CandidatesList";
import EmployersList from "../../pages/Employer/EmployersList";
import EmployeesList from "../../pages/Employee/EmployeesList";
import ResumesList from "../../pages/Resume/ResumesList";

export default function Dashboard() {
  return (
    <div>
      <Route exact path="/" component={JobPostings} />
      <Route exact path="/jobPostings" component={JobPostings} />
      <Route path="/jobPosting/:id" component={JobPostingDetail} />
      <Route path="/candidates" component={CandidatesList} />
      <Route path="/employers" component={EmployersList} />
      <Route path="/employees" component={EmployeesList} />
      <Route path="/resumes" component={ResumesList} />
    </div>
  );
}
