import moment from 'moment';
import './Form.css';
import { useState } from 'react';

function Form(props) {
	let [amount, setAmount] = useState('');

	function onChange(e) {
		setAmount(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();
		const value = parseFloat(amount);
		const currentTime = moment().format('DD-MMM-YY hh:mm A');
		props.setAmountArray([
			...props.amountArray,
			{ value, time: currentTime },
		]);
		setAmount('');
	}

	return (
		<div className="formContainer">
			<h2>Add new Transaction</h2>
			<hr />
			<form onSubmit={onSubmit}>
				<label>Enter Amount</label>
				<br />
				<input value={amount} onChange={onChange} type="number" />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Form;
