import { gql } from "@apollo/client";

export const GET_LISTING_BY_PK = gql`
  query GetListingByPk($id: uuid!) {
    listing_by_pk(id: $id) {
      id
      title

      price
      rating
      no_of_beds
      no_of_bathrooms
      no_of_guests
      inquire_now_mail_to
      nickname
      created_at
      images {
        id
        url
      }
    }
  }
`;
