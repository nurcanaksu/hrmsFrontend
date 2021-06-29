import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";

import EmployerService from "../../services/employerService";
import { Header, Icon } from "semantic-ui-react";
const colors = ["blue"];
export default function EmployersList() {

  const [employers, setEmployers] = useState([]);

  useEffect(()=>{
    let employerService = new EmployerService()
    employerService.getEmployers().then(result=>setEmployers(result.data.data))
  })

  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Employers List</Header.Content>
      </Header>
      {colors.map((color) => (
        <Table color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>E-mail</Table.HeaderCell>
              <Table.HeaderCell>Oluşturma Tarihi</Table.HeaderCell>
              <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
              <Table.HeaderCell>Web adresi</Table.HeaderCell>
              <Table.HeaderCell>İletişim</Table.HeaderCell>
              <Table.HeaderCell>Aktiflik durumu</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {employers.map((employer) => (
              <Table.Row>
                <Table.Cell>{employer.email}</Table.Cell>
                <Table.Cell>{employer.createdDate}</Table.Cell>
                <Table.Cell>{employer.companyName}</Table.Cell>
                <Table.Cell>{employer.webAddress}</Table.Cell>
                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                <Table.Cell>{employer.active}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ))}
    </div>
  );
}
