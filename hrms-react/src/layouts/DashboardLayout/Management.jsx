import React from "react";

import { Menu } from "semantic-ui-react";
export default function Management() {
  return (
    <div>
      <Menu inverted pointing vertical>
        <Menu.Item name="Job Position" />
        <Menu.Item name="Job Posting" />
        <Menu.Item name="Employer" />
      </Menu>
    </div>
  );
}
