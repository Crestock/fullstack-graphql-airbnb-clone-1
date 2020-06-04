import * as React from "react";
import { Card } from "antd";
import { withFindListings, IWithFindListings } from "@abb/controller";

const { Meta } = Card;

class C extends React.PureComponent<IWithFindListings> {
  render() {
    const { listings, loading } = this.props;
    return (
      <div>
        {loading && <div>...loading</div>}
        {listings.map((l) => (
          <Card
            key={`${l.id}-card`}
            hoverable={true}
            style={{ width: 240 }}
            cover={l.pictureUrl && <img src={l.pictureUrl} alt="images" />}
          >
            <Meta title={l.name} description="www.instagram.com" />
          </Card>
        ))}
      </div>
    );
  }
}

export const FindListingsConnector = withFindListings(C);
