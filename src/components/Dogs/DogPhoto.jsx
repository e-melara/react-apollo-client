import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export const DogPhoto = ({ breed }) => {
  const { loading, data, refetch } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <img
        src={data.dog.displayImage}
        alt="imgs for dog"
        style={{ height: 100, width: 100 }}
      />
      <br />
      <button onClick={() => refetch()}>Refetch!</button>
    </>
  );
};
