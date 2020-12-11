import React from 'react';

export interface ICharProp {
  character: string;
  clicked: (event: any) => void
}

const char = (props: ICharProp) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center' as const
  };

  return (
    <div style={style} onClick={props.clicked}>
      {props.character}
    </div>
  );
};

export default char;