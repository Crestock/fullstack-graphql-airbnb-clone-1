import * as React from "react";
import { Form, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field, Form as FForm } from "formik";
import { changePasswordSchema } from "@abb/common";
import { InputField } from "../../shared/InputField";
import { NormalizedErrorMap } from "@abb/controller";

interface FormValues {
  newPassword: string;
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <FForm
        style={{ display: "flex", marginTop: 100 }}
        onSubmit={handleSubmit}
      >
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
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(C);
