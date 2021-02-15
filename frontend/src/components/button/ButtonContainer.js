import React from 'react';

import Button from './Button';

export default function ButtonContainer(props) {
  const {selectedButton, buttonSet, onButtonClick } = props;

  return (
    <div style={styles.container}>
      {
        buttonSet.map((buttonText, index) => {
          return (
            <Button key={index}
              buttonText={buttonText}
              isSelected={index === selectedButton ? true : false}
              onButtonClick={() => onButtonClick(index)}
            />
          );
        })
      }
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
};