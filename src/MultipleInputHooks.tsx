import React, { useState, useEffect, useRef } from 'react';
import TextInput from './TextInput';

import Pillbox from './Pillbox';
import './MultipleInput.css';

const MultipleInput: React.FunctionComponent = () => {

  // set state variables
  const [input, setInput] = useState<string>('');
  const [inputList, setInputList] = useState<string[]>([]);

  // state change trigger until I fix the problem
  // change on list (add one, remove one) doesn't trigger state change and rerender
  const [updater, setUpdate] = useState<boolean>(false);

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
        case 'Backspace':
          if (input.length < 1 && inputList.length > 0) {
            const reducedList: string[] = inputList;
            reducedList.pop();
            setInputList(reducedList);
            setUpdate(!updater);
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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    setInput(event.target.value);
  }

  const textInputRef: any = useRef<HTMLInputElement>(null);

  // function handleFocus(event: React.FocusEvent<HTMLDivElement>) {
  //   console.log('onFocus called');
  //   if (textInputRef.current !== null) {
  //     textInputRef.current.focus();
  //   }
  // }

  // const ForwardedRefTextInput = forwardRef((props, ref) => 
  //   <TextInput 
  //     forwardedRef={textInputRef}
  //     input={input}
  //     onChange={ handleChange }
  //   />
  // );

  return (
    <div
      id="MultipleValueInput"
      className="MultipleValueInput"
      // onFocus={ handleFocus }
    >
      { inputList.map((item: string) => (
        <Pillbox onClick={() => onRemove(item)} input={item} key={item}/>))
      }
      <TextInput
        forwardedRef={textInputRef}
        input={input}
        inputList={inputList}
        onChange={ handleChange }
        onRemoveAll={onRemoveAll}
      />
    </div>
  );
}

export default MultipleInput;
