// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  CreateListingMutation,
  CreateListingMutationVariables,
} from "../../schemaTypes";

export const createListingMutation = gql`
  mutation CreateListingMutation(
    $picture: Upload
    $name: String!
    $category: String!
    $description: String!
    $price: Int!
    $beds: Int!
    $guests: Int!
    $latitude: Float!
    $longitude: Float!
    $amenities: [String!]!
  ) {
    createListing(
      input: {
        picture: $picture
        name: $name
        category: $category
        description: $description
        price: $price
        beds: $beds
        guests: $guests
        latitude: $latitude
        longitude: $longitude
        amenities: $amenities
      }
    )
  }
`;

export interface IWithCreateListing {
  createListing: (variables: CreateListingMutationVariables) => void;
}

export const withCreateListing = graphql<
  any,
  CreateListingMutation,
  CreateListingMutationVariables,
  IWithCreateListing
>(createListingMutation, {
  props: ({ mutate }) => ({
    createListing: async (variables) => {
      if (!mutate) {
        return;
      }

      const response = await mutate({
        variables,
      });

      console.log(response);
    },
  }),
});
