import React, { Component } from 'react';
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
    this.handleChange = this.handleChange.bind(this);
  }

  // remove single item from the list
  onRemove(index: number) {

  }

  // remove all items from the list
  onRemoveAll() {

  }

  // push text to the list on Enter
  onEnter(event: any) {
    if (event.key === 'Enter' && this.state.input.length > 0) {
      const inputList = this.state.inputList;
      inputList.push(this.state.input);
      this.setState({ inputList, input: '' })
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
          <div className="pillbox">
            {input}
            <button
              style={{
                background: 'none',
                border: 'none',
              }}
            >X</button>
          </div>))
        }
        <input
          style={{ border: 'none', marginLeft: '5px'}}
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
          onKeyPress={this.onEnter}
        />
      </div>
    );
  }
}

export default MultipleInput;
