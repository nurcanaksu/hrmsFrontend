import React from "react";
import { Route } from "react-router-dom";
import JobPostingDetail from "../../pages/JobPosting/JobPostingDetailPage/JobPostingDetail";
import JobPostings from "../../pages/JobPosting/JobPostings";
import AddJobPosting from "../../pages/JobPosting/AddJobPosting";
import CandidatesList from "../../pages/Candidate/CandidatesList";
import CandidateDetail from "../../pages/Candidate/CandidateDetail";
import EmployersList from "../../pages/Employer/EmployersList";
import EmployerDetail from "../../pages/Employer/EmployerDetail";
import EmployeesList from "../../pages/Employee/EmployeesList";
import ResumesList from "../../pages/Resume/ResumesList";
import ResumeDetail from "../../pages/Resume/ResumeDetail";
import CandidateRegister from "../../pages/Register/CandidateRegister";
import EmployerRegister from "../../pages/Register/EmployerRegister";
export default function Dashboard() {
  return (
    <div>
      <Route exact path="/" component={JobPostings} />
      <Route exact path="/candidateRegister" component={CandidateRegister} />
      <Route exact path="/employerRegister" component={EmployerRegister} />

      <Route exact path="/jobPostings" component={JobPostings} />
      <Route exact path="/addJobPosting" component={AddJobPosting} />
      <Route path="/jobPosting/:id" component={JobPostingDetail} />

      <Route exact path="/candidates" component={CandidatesList} />
      <Route exact path="/candidates/:id" component={CandidateDetail} />

      <Route exact path="/employers" component={EmployersList} />
      <Route exact path="/employers/:id" component={EmployerDetail}/>

      <Route path="/employees" component={EmployeesList} />

      <Route exact path="/resumes" component={ResumesList} />
      <Route exact path="/resumes/:id" component={ResumeDetail} />

    </div>
  );
}
