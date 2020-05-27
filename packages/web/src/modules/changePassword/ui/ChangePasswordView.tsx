import * as React from "react";
import { Form, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field, Form as FForm } from "formik";
import { changePasswordSchema } from "@abb/common";
import { InputField } from "../../shared/InputField";
import {
  NormalizedErrorMap,
  ForgotPasswordChangeMutationVariables,
} from "@abb/controller";

interface FormValues {
  newPassword: string;
}

interface Props {
  onFinish: () => void;
  token: string;
  submit: (
    values: ForgotPasswordChangeMutationVariables
  ) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <FForm style={{ display: "flex", marginTop: 100 }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            name="newPassword"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="New Password"
            component={InputField}
          />

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              change password
            </Button>
          </Form.Item>
        </div>
      </FForm>
    );
  }
}

export const ChangePasswordView = withFormik<Props, FormValues>({
  validationSchema: changePasswordSchema,
  mapPropsToValues: () => ({ newPassword: "" }),
  handleSubmit: async ({ newPassword }, { props, setErrors }) => {
    const errors = await props.submit({ newPassword, key: props.token });
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  },
})(C);
