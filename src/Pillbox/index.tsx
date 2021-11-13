import React from 'react';
import RemoveButton from '../RemoveButton';
import CloseIconSmall from '../CloseIcon/CloseIconSmall';
import './index.css';

type props = {
  input: string
  onClick: () => void
}

export default function Pillbox (props: props) {
  return (
    <div className="Pillbox" key={props.input}>
      <p className="Pillbox_label">{props.input}</p>
      <RemoveButton onClick={props.onClick}>
        <CloseIconSmall />
    </RemoveButton>
  </div>
  );
}