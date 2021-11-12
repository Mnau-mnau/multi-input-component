import React from 'react';
import './index.css';

type props = {
  children: any
  onClick: () => void
}

export default function RemoveButton (props: props) {
  return (
      <button className="RemoveButton" onClick={props.onClick} >
        {props.children}
      </button>

  );   
}
