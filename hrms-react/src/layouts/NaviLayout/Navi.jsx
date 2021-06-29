import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Icon.Group size="huge">
            <Icon loading size="small" name="circle notch" />
            <Icon name="user" />
          </Icon.Group>
          <Menu.Item hospital symbol name="HRMS" />
          <Menu.Item name="Home" />
          <Menu.Item name="JobPosting" />
          <Menu.Item name="Corporation" />

          <Menu.Menu position="right">
            <Menu.Item>
              <Button primary>Sign In</Button>
              <Button secondary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
