import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";

interface Props {
  children: (data: {
    submit: (values: any) => Promise<null>;
  }) => JSX.Element | null;
}

class C extends React.PureComponent<ChildMutateProps<Props, any, any>> {
  submit = async (values: any) => {
    console.log(values);
    await this.props.mutate({
      variables: values,
    });
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const RegisterMutation = gql`
  mutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const RegisterController = graphql<Props, any, any, any>(
  RegisterMutation
)(C);
