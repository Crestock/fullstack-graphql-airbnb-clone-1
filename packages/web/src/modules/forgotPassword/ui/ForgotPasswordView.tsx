import * as React from "react";
import { Form, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field, Form as FForm } from "formik";
import { InputField } from "../../shared/InputField";
import { NormalizedErrorMap } from "@abb/controller";

interface FormValues {
  email: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <FForm style={{ display: "flex", marginTop: 100 }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            name="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            component={InputField}
          />

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              reset password
            </Button>
          </Form.Item>
        </div>
      </FForm>
    );
  }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  },
})(C);
