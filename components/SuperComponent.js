import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

class SuperComponent extends React.Component {
  constructor() {
    super();

    this.someVariable = "just some variable;";
  }

  alertName(title) {
    alert(title);
  }

  render() {
    return (
      <BaseLayout>
        <div>SuperComponent</div>
      </BaseLayout>
    );
  }
}

export default SuperComponent;
