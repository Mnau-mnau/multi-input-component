import React, { useState } from 'react';
import TextInput from './TextInput';
import RemoveButton from './RemoveButton';
import Pillbox from './Pillbox';
import CloseIconLarge from './CloseIcon/CloseIconLarge';
import './MultipleInput.css';

export default function MultipleInput() {

  // set state variables
  const [input, setInput] = useState<string>('');
  const [inputList, setInputList] = useState<string[]>([]);

  // remove single item from the list
  function onRemove(input: string) {
    const newInputList = inputList.filter(inputString => inputString !== input)
    setInputList(newInputList);
  }

  // remove all items from the list
  function onRemoveAll() {
    setInputList([]);
  }

  function onKeyupHandler(event: any): void {
    switch (event.key) {
      case 'Enter':
        onEnter();
        break;
      case 'Backspace':
        onBackspace();
        break;
      default:
        break;
    }
  }
  // push text to the list on Enter
  // if there is any text input and if the same text is not already selected

  const onEnter = () => {
    const trimmed: string = input.trim();
    if (input.length > 0 
    && !inputList.includes(trimmed)) {
      const newInputList: string[] = inputList;
      newInputList.push(trimmed);
      setInputList(newInputList);
    }
  }

  function onBackspace() {
    if (input.length < 1 && inputList.length > 0) {
      const newInputList: string[] = inputList;
      newInputList.pop();
      setInputList(newInputList);
    }
  }

  // handle writing into the text input
  const handleChange = (event: any) =>  {
    setInput(event.target.value);
  }


  return (
    <div
      className="MultipleValueInput"
    >
      { inputList.map((inputString: string) => (
        <Pillbox onClick={() => onRemove(input)} input={inputString} />))
      }
      <TextInput
        input={input}
        onChange={handleChange}
        onKeyUp={onKeyupHandler}
      />
      {inputList.length > 0 ?
      <RemoveButton onClick={() => onRemoveAll()}>
        <CloseIconLarge/>
      </RemoveButton> :
      ''}
    </div>
  );
}
