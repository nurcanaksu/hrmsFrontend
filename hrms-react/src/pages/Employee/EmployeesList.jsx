import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";

import EmployeeService from "../../services/employeeService";
import { Header, Icon } from "semantic-ui-react";
const colors = ["blue"];
export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  useEffect(()=>{
    let employeeService = new EmployeeService()
    employeeService.getEmployees().then(result=>setEmployees(result.data.data))
  })
  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Employees List</Header.Content>
      </Header>
      {colors.map((color) => (
        <Table color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>E-mail</Table.HeaderCell>
              <Table.HeaderCell>Oluşturma Tarihi</Table.HeaderCell>
              <Table.HeaderCell> Adı</Table.HeaderCell>
              <Table.HeaderCell>Soy-adı</Table.HeaderCell>
              <Table.HeaderCell>Aktiflik durumu</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {employees.map((employee) => (
              <Table.Row>
                <Table.Cell>{employee.email}</Table.Cell>
                <Table.Cell>{employee.createdDate}</Table.Cell>
                <Table.Cell>{employee.firstName}</Table.Cell>
                <Table.Cell>{employee.lastName}</Table.Cell>
                <Table.Cell>{employee.active}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ))}
    </div>
  );
}
