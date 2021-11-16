import React, { useState } from 'react';
import TextInput from './TextInput';

import Pillbox from './Pillbox';
import './MultipleInput.css';

const MultipleInput: React.FunctionComponent = () => {

  // set state variables
  const [input, setInput] = useState('');
  const [inputList, setInputList] = useState<string[]>([]);

  // remove single item from the list
  function onRemove(item: string) {
    const filtered: string[] = inputList.filter(inputString => inputString !== item);
    setInputList(filtered);
    setInput(input);
  }

  // remove all items from the list
  function onRemoveAll() {
    setInputList([]);
    setInput('');
  }

  // keyboard events
  const onKeyDown = (event: any) => {
    switch (event.key) {
      case 'Enter':
      case ';':
        const trimmed: string = input.trim();
        if (input.length > 0 
        && !inputList.includes(trimmed)) {
          inputList.push(trimmed);
          setInputList(inputList);
          setInput('');
        }
        break;
      case 'Backspace':
        if (input.length === 0 && inputList.length > 0) {
          setInputList(inputList.slice(0, -1));
        }
        break;
      default:
        break;
    }
  }

  // handle writing into the text input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    setInput(event.target.value);
  }

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>): void => {
    console.log(event.clipboardData.getData('Text'));
    const pastedString = event.clipboardData.getData('Text')
    const stringArray = pastedString.split(';').filter(item => item !== '')
    setInputList([...inputList, ...stringArray]);
  }

  return (
    <div
      id="MultipleValueInput"
      className="MultipleValueInput"
    >
      { inputList.map((item: string) => (
        <Pillbox onClick={() => onRemove(item)} input={item} key={item}/>))
      }
      <TextInput
        input={ input }
        inputList={ inputList }
        onChange={ handleChange }
        onRemoveAll={ onRemoveAll }
        onKeyDown={ onKeyDown }
        onPaste={ handlePaste }
      />
    </div>
  );
}

export default MultipleInput;
