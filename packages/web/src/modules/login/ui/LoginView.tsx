import * as React from "react";
import { Form, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field, Form as FForm } from "formik";
import { loginSchema } from "@abb/common";
import { InputField } from "../../shared/InputField";
import { Link } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<{ [key: string]: string } | null>;
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
            name="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            component={InputField}
          />
          <Field
            name="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            component={InputField}
          />

          <Form.Item>
            <a className="login-form-forgot" href="/forgot-password">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </div>
      </FForm>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  validateOnBlur: false,
  validateOnChange: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(C);
