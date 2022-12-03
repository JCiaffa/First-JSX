import React, { Component } from "react";

class MyNewComponent extends Component {
  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div>
        <div>
          <h2>
            {firstName} {lastName}
          </h2>
          <h3>{age}</h3>
          <h3>{hairColor}</h3>
        </div>
      </div>
    );
  }
}

export default MyNewComponent;
