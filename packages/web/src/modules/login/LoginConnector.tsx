import * as React from "react";

import { LoginController } from "@abb/controller";

import { LoginView } from "./ui/LoginView";
import { RouteComponentProps } from "react-router-dom";

export class LoginConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <LoginController>
        {({ submit }) => <LoginView submit={submit} onFinish={this.onFinish} />}
      </LoginController>
    );
  }
}
