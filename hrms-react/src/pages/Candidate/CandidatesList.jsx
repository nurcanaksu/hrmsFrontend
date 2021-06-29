import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import CandidateService from "../../services/candidateService";
import { Header, Icon } from "semantic-ui-react";
const colors = ["blue"];

export default function CandidateList() {
    const [candidates, setCandidates] = useState([]);

  useEffect(()=>{
    let candidateService = new CandidateService()
    candidateService.getCandidates().then(result=>setCandidates(result.data.data))
  })
  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Candidates List</Header.Content>
      </Header>
      {colors.map((color) => (
        <Table color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>E-mail</Table.HeaderCell>
              <Table.HeaderCell>Oluşturma Tarihi</Table.HeaderCell>
              <Table.HeaderCell> Adı</Table.HeaderCell>
              <Table.HeaderCell>Soy-adı</Table.HeaderCell>
              <Table.HeaderCell>Tc Numarası</Table.HeaderCell>
              <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
              <Table.HeaderCell>Aktiflik durumu</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {candidates.map((candidate) => (
              <Table.Row>
                <Table.Cell>{candidate.email}</Table.Cell>
                <Table.Cell>{candidate.createdDate}</Table.Cell>
                <Table.Cell>{candidate.firstName}</Table.Cell>
                <Table.Cell>{candidate.lastName}</Table.Cell>
                <Table.Cell>{candidate.nationalityId}</Table.Cell>
                <Table.Cell>{candidate.birthDate}</Table.Cell>
                <Table.Cell>{candidate.active}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ))}
    </div>
  );
}
