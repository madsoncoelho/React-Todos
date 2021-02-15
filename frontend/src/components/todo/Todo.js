import React from 'react';

export default function Todo({ todo }) {

  const { date, description, done } = todo;

  return (
    <div style={done ? {...styles.container, ...styles.finishedTask}
      : {...styles.container, ...styles.unfinishedTask}}>
      <div style={styles.date}>
        {date}
      </div>
      <div>
        {description}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px',
  },
  finishedTask: {
    backgroundColor: 'lightgreen'
  },
  unfinishedTask: {
    backgroundColor: 'lightsalmon',
  },
  date: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginRight: '10px',
  },  
};