import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

const GET_TODOS = gql`
  query Todos {
    todos {
      id
      type
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;

export const Todo = () => {
  const { loading, data } = useQuery(GET_TODOS);
  const [updateTodo, { loading: mutationLoading, error: mutationError }] =
    useMutation(UPDATE_TODO);

  if (loading) return <span>Loading ...</span>;

  return data.todos.map(({ id, type }) => {
    let input;

    return (
      <div key={id}>
        <p>{type}</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            updateTodo({ variables: { id, type: input.value } });
            input.value = '';
          }}
        >
          <input
            type="text"
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Update Todo</button>
          {mutationLoading && <p>Loading update ...</p>}
          {mutationError && <p>Error :( Update</p>}
        </form>
      </div>
    );
  });
};
