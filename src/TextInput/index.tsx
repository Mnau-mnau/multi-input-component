import React from 'react';
import './index.css';

type props = {
	input: string,
	onChange: (event: any) => void,
	onKeyUp: (event: any) => void,
}
export default function TextInput(props: props) {
	return (
		<input
			className="TextInput"
			style={{ border: 'none', marginLeft: '5px', alignSelf: 'stretch'}}
			type="text"
			value={props.input}
			onChange={props.onChange}
			onKeyUp={props.onKeyUp}
		/>
	);
}
