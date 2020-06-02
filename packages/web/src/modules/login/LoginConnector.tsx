import * as React from "react";

import { LoginController } from "@abb/controller";

import { LoginView } from "./ui/LoginView";
import { RouteComponentProps } from "react-router-dom";

export class LoginConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    const {
      history,
      location: { state },
    } = this.props;
    if (state && (state as any).next) {
      return history.push((state as any).next);
    }

    history.push("/");
  };

  render() {
    console.log(this.props);
    return (
      <LoginController>
        {({ submit }) => <LoginView submit={submit} onFinish={this.onFinish} />}
      </LoginController>
    );
  }
}
