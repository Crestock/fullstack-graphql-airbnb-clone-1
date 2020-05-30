import * as React from "react";
import { InputField } from "../../../shared/InputField";
import { Field } from "formik";

export const Page2 = () => (
  <>
    <Field
      name="price"
      label="Price"
      placeholder="Price"
      component={InputField}
      useNumberComponent={true}
    />
    <Field
      name="beds"
      label="Beds"
      placeholder="Beds"
      component={InputField}
      useNumberComponent={true}
    />
    <Field
      name="guests"
      label="Guests"
      placeholder="Guests"
      component={InputField}
      useNumberComponent={true}
    />
  </>
);
