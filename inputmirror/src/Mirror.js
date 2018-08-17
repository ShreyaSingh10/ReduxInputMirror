import React from 'react';
import {connect} from 'react-redux';

function Mirror(props){
	return(
		<div>
			<input value={props.inputValue} onChange={props.inputChanged}/>
			<p>{props.inputValue}</p>
		</div>
	)
}

const mapStateToProps = (state) => {
	return{
		inputValue: state.inputValue
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		inputChanged: (event) => {
			//console.log('changed', event.target.value);
			const action = {type: 'INPUT_CHANGE', text: event.target.value}
			dispatch(action);
			//dispatch({ type: 'INPUT_CHANGE', text: evt.target.value});
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Mirror);