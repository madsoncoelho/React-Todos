import React from 'react';

export default function Summary({ tasksList }) {

  const tasksNumber = tasksList.length;

  const finishedTasksNumber = tasksList.filter((task) => task.done).length;

  const unfinishedTasksNumber = tasksNumber - finishedTasksNumber;

  return (
    <div style={styles.container}>
      <div style={styles.summaryItem}>
        Total de Tarefas: <span style={{ fontWeight: 'bold' }}>{tasksNumber}</span>
      </div>
      <div style={styles.summaryItem}>
        Tarefas Finalizadas: <span style={
          { fontWeight: 'bold', color: 'green' }}>{finishedTasksNumber}</span>
      </div>
      <div style={styles.summaryItem}>
        Tarefas incompletas: <span style={
          { fontWeight: 'bold', color: 'coral' }}>{unfinishedTasksNumber}</span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  },
  summaryItem: {
    marginRight: '10px',
  },
};