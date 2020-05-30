import * as React from "react";
import { FieldProps } from "formik";
import { Form, Select } from "antd";

export const TagField: React.SFC<FieldProps<any> & {}> = ({
  field: { onChange, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const errMsg = touched[field.name] && errors[field.name];

  return (
    <Form.Item help={errMsg}>
      <Select
        {...field}
        {...props}
        mode="tags"
        style={{ width: "100%" }}
        // tslint:disable-next-line: jsx-no-lambda
        onChange={(newValue: any) => setFieldValue(field.name, newValue)}
      />
    </Form.Item>
  );
};
