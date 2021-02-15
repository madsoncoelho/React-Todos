import React from 'react';

import Todo from './Todo';

export default function Todos({ todosList }) {

  const sortedTodosList = todosList.sort((first, second) => first.day - second.day);

  return (
    <div style={styles.container}>
      {
        sortedTodosList.map((todo) => {
          return <Todo key={todo.id} todo={todo} />
        })
      }
    </div>
  );
}

const styles = {
  container: {
    marginTop: '20px',
  },
};

