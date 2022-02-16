import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

export const Dogs = ({ onChangeSelected }) => {
  const { loading, data } = useQuery(GET_DOGS);

  if (loading) {
    return <span>Loading ....</span>;
  }

  return (
    <>
      <select name="dog" onChange={onChangeSelected}>
        {data.dogs.map(dog => (
          <option value={dog.breed} key={dog.id}>
            {dog.breed}
          </option>
        ))}
      </select>
    </>
  );
};
