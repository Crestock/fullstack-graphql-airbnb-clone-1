import * as React from "react";
import { InputField } from "../../../shared/InputField";
import { Field } from "formik";
import { TagField } from "../../../shared/TagField";

export const Page3 = () => (
  <>
    <Field
      name="latitude"
      label="Latitude"
      placeholder="Latitude"
      component={InputField}
    />
    <Field
      name="longitude"
      label="Longitude"
      placeholder="Longitude"
      component={InputField}
    />
    <Field name="amenities" placeholder="Amenities" component={TagField} />
  </>
);
