import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input, InputNumber } from "antd";

export const InputField: React.SFC<
  FieldProps<any> & { label?: string; useNumberComponent?: boolean }
> = ({
  field: { onChange, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  useNumberComponent = false,
  ...props
}) => {
  const errMsg = touched[field.name] && errors[field.name];

  const Comp = useNumberComponent ? InputNumber : Input;

  return (
    <Form.Item help={errMsg} label={label}>
      <Comp
        {...field}
        {...props}
        onChange={
          useNumberComponent
            ? (newValue: any) => setFieldValue(field.name, newValue)
            : onChange
        }
      />
    </Form.Item>
  );
};
