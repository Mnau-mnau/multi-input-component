import React from 'react';
import RemoveButton from '../RemoveButton';
import CloseIconLarge from '../CloseIcon/CloseIconLarge';
import './index.css';

type props = {
	input: string,
	inputList: string[],
	onChange: (event: any) => void,
  onRemoveAll: () => void,
  onKeyDown: (event: any) => void,
  onPaste: (event: any) => void | unknown,

}

export default function TextInput(props: props) {
	return (
    <div className="TextInput" >
      <input
        className="TextInput_input"
        style={{ border: 'none', height: '32px  ' }}
        type="text"
        value={props.input}
        onChange={props.onChange}
        tabIndex={0}
        onKeyDown={props.onKeyDown}
        onPaste={props.onPaste}
      />
      {props.inputList.length > 0 ?
      <RemoveButton onClick={() => props.onRemoveAll()}>
        <CloseIconLarge/>
      </RemoveButton> :
      ''}
    </div>
	);
}
