import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ChangePasswordView } from "./ui/ChangePasswordView";
import { ChangePasswordController } from "@abb/controller";

export class ChangePasswordConnector extends React.PureComponent<
  RouteComponentProps<{
    key: string;
  }>
> {
  render() {
    console.log(this.props);
    const {
      match: {
        params: { key },
      },
    } = this.props;
    console.log(key);
    return (
      <ChangePasswordController>
        {({ submit }) => (
          <ChangePasswordView
            // tslint:disable-next-line: jsx-no-lambda
            submit={async ({ newPassword }) =>
              submit({
                key,
                newPassword,
              })
            }
          />
        )}
      </ChangePasswordController>
    );
  }
}
