import React from 'react';

export default function Button({ buttonText, isSelected, onButtonClick }) {

  return (
    <div style={styles.button}>
      <button className={"waves-effect waves-light btn" + (isSelected ? '-large' : '')}
        style={isSelected ? styles.selectedButton : styles.unselectedbutton}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

const styles = {
  button: {
    margin: '10px',
  },
  selectedButton: {
    backgroundColor: 'gray',
  },
  unselectedButton: {

  },
};