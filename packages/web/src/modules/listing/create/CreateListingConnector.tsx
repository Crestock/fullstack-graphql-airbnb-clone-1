import * as React from "react";
import { Form, Button } from "antd";
import { Formik, Form as FForm } from "formik";
import { RouteComponentProps } from "react-router-dom";
import { Page1 } from "./ui/Page1";
import { Page2 } from "./ui/Page2";
import { Page3 } from "./ui/Page3";

interface FormValues {
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

export class CreateListingConnector extends React.PureComponent<
  RouteComponentProps<{}>,
  State
> {
  state = {
    page: 0,
  };

  submit = (values: any) => {
    console.log("values: ", values);
  };

  nextPage = () => {
    this.setState((state) => ({ page: state.page + 1 }));
  };

  render() {
    return (
      <Formik<FormValues, {}>
        initialValues={{
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
              <Form.Item>
                {this.state.page === pages.length - 1 ? (
                  <Button type="primary" htmlType="submit">
                    create listing
                  </Button>
                ) : (
                  <Button type="primary" onClick={this.nextPage}>
                    next
                  </Button>
                )}
              </Form.Item>
            </div>
          </FForm>
        )}
      </Formik>
    );
  }
}
