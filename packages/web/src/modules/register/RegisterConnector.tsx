import * as React from "react";
import { RegisterController } from "@abb/controller";

import { RegisterView } from "./ui/RegisterView";
import { RouteComponentProps } from "react-router-dom";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/m/confirm-email", {
      message: "check your email to confirm your account",
    });
  };

  render() {
    return (
      <RegisterController>
        {({ submit }) => (
          <RegisterView onFinish={this.onFinish} submit={submit} />
        )}
      </RegisterController>
    );
  }
}
