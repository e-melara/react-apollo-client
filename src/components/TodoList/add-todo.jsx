import React from 'react';

import { gql, useMutation } from '@apollo/client';

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(type: $text) {
      id
      type
    }
  }
`;

export const AddTodo = () => {
  let input;
  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            const newTodos = cache.writeFragment({
              data: addTodo,
              fragment: gql`
                fragment NewTodo on Todo {
                  id
                  type
                }
              `,
            });
            return existingTodos.concat(newTodos);
          },
        },
      });
    },
  });

  const handlerSubmit = event => {
    event.preventDefault();
    addTodo({ variables: { text: input.value } });
    input.value = '';
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input type="text" ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
