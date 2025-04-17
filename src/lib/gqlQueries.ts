import { gql } from "@apollo/client";

export const GET_LISTING_BY_PK = gql`
  query GetListingByPk($id: uuid!) {
    listing_by_pk(id: $id) {
      id
      title
      isProd
      price
      rating
      no_of_beds
      no_of_bathrooms
      no_of_guests
      inquire_now_mail_to
      nickname
      created_at
      rating
      title
      isProd
      space
      state
      summary
      tags
      transit
      updated_at
      video
      neighborhood
      house_rules
      country
      city
      access
      interaction_with_guests
      images {
        id
        url
      }
    }
  }
`;
export const GETT_LISTING_STATUS = gql`
  query GetListingByPk($id: uuid!) {
    listing_by_pk(id: $id) {
      isProd
    }
  }
`;
