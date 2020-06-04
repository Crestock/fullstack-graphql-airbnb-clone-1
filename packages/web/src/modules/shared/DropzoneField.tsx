import * as React from "react";
import { FieldProps } from "formik";
import Dropzone from "react-dropzone";

export const DropzoneField: React.SFC<FieldProps<any>> = ({
  field: { name }, // { name, value, onChange, onBlur }
  form: { setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    // <Dropzone
    // accept="image/jpeg, image/png"
    // multiple={false}
    //   // tslint:disable-next-line: jsx-no-lambda
    //   onDrop={([file]) => {
    //     setFieldValue(name, file);
    //   }}
    //   {...props}
    // >
    //   <p>Click to select files</p>
    // </Dropzone>
    <Dropzone
      accept="image/jpeg, image/png"
      multiple={false}
      // tslint:disable-next-line: jsx-no-lambda
      onDrop={([file]) => {
        setFieldValue(name, file);
      }}
      {...props}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
