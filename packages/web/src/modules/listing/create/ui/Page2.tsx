import * as React from "react";
import { InputField } from "../../../shared/InputField";
import { Field } from "formik";

export const Page2 = () => (
  <>
    <Field name="price" placeholder="Price" component={InputField} />
    <Field name="beds" placeholder="Beds" component={InputField} />
    <Field name="guests" placeholder="Guests" component={InputField} />
  </>
);
