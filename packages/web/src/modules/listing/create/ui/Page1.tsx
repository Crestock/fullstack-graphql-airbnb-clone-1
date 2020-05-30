import * as React from "react";
import { InputField } from "../../../shared/InputField";
import { Field } from "formik";

export const Page1 = () => (
  <>
    <Field name="name" placeholder="Name" component={InputField} />
    <Field name="category" placeholder="Category" component={InputField} />
    <Field
      name="description"
      placeholder="Description"
      component={InputField}
    />
  </>
);
