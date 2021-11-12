import React, { Component } from 'react';
import CloseIconLarge from './CloseIcon/CloseIconLarge';
import CloseIconSmall from './CloseIcon/CloseIconSmall';
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
    // I'd say going for a bounding box of <div> for the beginning 
    // could be good, with pills and input type text
    // style is WIP
    console.log(this.state);
    return (
      <div style={{ 
        margin: '3rem', 
        border: '1px solid black', 
        borderRadius: '5px', 
        width: '320px', 
        height: '32px', 
        display:'flex',
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignContent: 'center',
        }}>
        { this.state.inputList.map((input: string) => (
          <div className="pillbox" key={input}>
            {input}
            <button onClick={() => this.onRemove(input)}>
              <CloseIconSmall />
            </button>
          </div>))
        }
        <input
          style={{ border: 'none', marginLeft: '5px'}}
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
          onKeyUp={this.onKeyupHandler}
        />
        <button onClick={() => this.onRemoveAll()}>
          <CloseIconLarge/>
        </button>

      </div>
    );
  }
}

export default MultipleInput;
