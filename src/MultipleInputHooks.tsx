import React, { useState, useEffect, useRef, forwardRef } from 'react';
import TextInput from './TextInput';
import RemoveButton from './RemoveButton';
import Pillbox from './Pillbox';
import CloseIconLarge from './CloseIcon/CloseIconLarge';
import './MultipleInput.css';

const MultipleInput: React.FunctionComponent = () => {

  // set state variables
  const [input, setInput] = useState<string>('');
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
  }

  // keyboard events
  useEffect(() => {
    const onKeyUp = (event: any) => {
      switch (event.key) {
        case 'Enter':
          const trimmed: string = input.trim();
          if (input.length > 0 
          && !inputList.includes(trimmed)) {
            inputList.push(trimmed);
            setInputList(inputList);
            setInput('');
          }
          break;
        // this works but doesn't rerender
        case 'Backspace':
          if (input.length < 1 && inputList.length > 0) {
            const reducedList = inputList;
            reducedList.pop();
            console.log(reducedList)
            setInputList(reducedList);
          }
          break;
        default:
          break;
      }
    }

    document.addEventListener('keyup', onKeyUp);

    return () => {
        document.removeEventListener('keyup', onKeyUp);
    }
  });

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

export default MultipleInput;
