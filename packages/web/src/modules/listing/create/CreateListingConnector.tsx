import * as React from "react";
import { Form, Button } from "antd";
import { Formik, Form as FForm } from "formik";
import { RouteComponentProps } from "react-router-dom";
import { withCreateListing, IWithCreateListing } from "@abb/controller";
import { Page1 } from "./ui/Page1";
import { Page2 } from "./ui/Page2";
import { Page3 } from "./ui/Page3";

interface FormValues {
  // ImageFile
  picture: File | null;
  name: string;
  category: string;
  description: string;
  price: number;
  beds: number;
  guests: number;
  latitude: number;
  longitude: number;
  amenities: string[];
}

interface State {
  page: number;
}

// tslint:disable-next-line: jsx-key
const pages = [<Page1 />, <Page2 />, <Page3 />];

class C extends React.PureComponent<
  RouteComponentProps<{}> & IWithCreateListing,
  State
> {
  state = {
    page: 0,
  };

  submit = (
    values: FormValues
    // { setSubmitting }: FormikActions<FormValues> // FormikHelpers
  ) => {
    this.props.createListing(values);
    // setSubmitting(false);
  };

  nextPage = () => {
    this.setState((state) => ({ page: state.page + 1 }));
  };

  render() {
    return (
      <Formik<FormValues, {}>
        initialValues={{
          picture: null,
          name: "",
          category: "",
          description: "",
          price: 0,
          beds: 0,
          guests: 0,
          latitude: 0,
          longitude: 0,
          amenities: [],
        }}
        onSubmit={this.submit}
      >
        {() => (
          <FForm style={{ display: "flex", marginTop: 100 }}>
            <div style={{ width: 400, margin: "auto" }}>
              {pages[this.state.page]}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Form.Item>
                  {this.state.page === pages.length - 1 ? (
                    <div>
                      <Button type="primary" htmlType="submit">
                        create listing
                      </Button>
                    </div>
                  ) : (
                    <Button
                      type="primary"
                      htmlType="button"
                      onClick={this.nextPage}
                    >
                      next
                    </Button>
                  )}
                </Form.Item>
              </div>
            </div>
          </FForm>
        )}
      </Formik>
    );
  }
}

export const CreateListingConnector = withCreateListing(C);
