import React, { Component } from 'react';
import TextInput from './TextInput';
import Pillbox from './Pillbox';
import './MultipleInput.css';

type Props = {};
type MultipleInputState = {
  input: string,
  inputList: string[]
};

class MultipleInput extends Component<Props, MultipleInputState> {
  constructor(props: any) {
    super(props);

    // default state definition
    this.state = {
      input: '',
      inputList: [],
    };

    // binders
    this.onRemove = this.onRemove.bind(this);
    this.onRemoveAll = this.onRemoveAll.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onBackspace = this.onBackspace.bind(this);
    this.onKeyupHandler = this.onKeyupHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // remove single item from the list
  onRemove(input: string){
    const newInputList = this.state.inputList.filter(inputString => inputString !== input)
    this.setState({ inputList: newInputList });
  }

  // remove all items from the list
  onRemoveAll() {
    this.setState({ inputList: [] });
  }

  onKeyupHandler(event: any): void {
    switch (event.key) {
      case 'Enter':
        this.onEnter();
        break;
      case 'Backspace':
        this.onBackspace();
        break;
      default:
        break;
    }
  }
  // push text to the list on Enter
  // if there is any text input and if the same text is not already selected

  onEnter() {
    if (this.state.input.length > 0 
    && !this.state.inputList.includes(this.state.input)) {
      const inputList = this.state.inputList;
      inputList.push(this.state.input);
      this.setState({ inputList, input: '' });
    }
  }

  onBackspace() {
    if (this.state.input.length < 1 && this.state.inputList.length > 0) {
      const inputList = this.state.inputList;
      inputList.pop();
      this.setState({ inputList });
    }
  }

  // handle writing into the text input
  handleChange(event: any) {
    this.setState({input: event.target.value});
  }

  render() {
    // render removeAll button on condition
    // style is still WIP
    return (
      <div
        className="MultipleValueInput"
      >
        { this.state.inputList.map((input: string) => (
          <Pillbox onClick={() => this.onRemove(input)} input={input} />))
        }
        <TextInput
          input={this.state.input}
          inputList={this.state.inputList}
          onChange={this.handleChange}
          onRemoveAll={this.onRemoveAll}
          onKeyDown={this.onKeyupHandler}
        />
      </div>
    );
  }
}

export default MultipleInput;
