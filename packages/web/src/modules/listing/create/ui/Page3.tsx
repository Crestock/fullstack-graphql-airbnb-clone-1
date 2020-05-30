import * as React from "react";
import { InputField } from "../../../shared/InputField";
import { Field } from "formik";

export const Page3 = () => (
  <>
    <Field name="latitude" placeholder="Latitude" component={InputField} />
    <Field name="longitude" placeholder="Longitude" component={InputField} />
    <Field name="amenities" placeholder="Amenities" component={InputField} />
  </>
);
