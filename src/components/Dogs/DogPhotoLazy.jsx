import React from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GET_DOG_PHOTO = gql`
  query GetDogs($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export const DogPhotoLazy = ({ breed }) => {
  const [getDogs, { loading, data }] = useLazyQuery(GET_DOG_PHOTO);

  if (loading) {
    return <span>Loading ....</span>;
  }

  console.log(data, loading);

  return (
    <div>
      {data?.dog && <img src={data.dog.displayImage} alt="imgs for dog" />}
      <div>
        <button onClick={() => getDogs({ variables: { breed } })}>
          Click Me!
        </button>
      </div>
    </div>
  );
};
