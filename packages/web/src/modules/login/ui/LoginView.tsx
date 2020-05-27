import * as React from "react";
import { Form, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field, Form as FForm } from "formik";
import { loginSchema } from "@abb/common";
import { InputField } from "../../shared/InputField";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@abb/controller";

interface FormValues {
  email: string;
  password: string;
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
          <Field
            name="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            component={InputField}
          />

          <Form.Item>
            <Link to="/forgot-password">Forgot password</Link>
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
    } else {
      props.onFinish();
    }
  },
})(C);
