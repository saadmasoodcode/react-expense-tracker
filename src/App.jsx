import { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import History from './Components/History/History';

function App(props) {
	let [amountArray, setAmountArray] = useState([]);

	const totalSum = amountArray.reduce(
		(accumulator, currentValue) => accumulator + currentValue.value,
		0
	);

	useEffect(() => {
		setAmountArray(JSON.parse(localStorage.getItem('amountArray')));
	}, []);

	useEffect(() => {
		if (amountArray) {
			localStorage.setItem('amountArray', JSON.stringify(amountArray));
		}
	}, [amountArray]);

	return (
		<>
			<div className="container">
				<div>
					<h1>Expense Tracker</h1>
					<h3>Total Expense: Rs.{totalSum.toLocaleString('en-US')}</h3>
					<Form
						amountArray={amountArray}
						setAmountArray={setAmountArray}
					/>
				</div>
				<div>
					<History amountArray={amountArray} />
				</div>
			</div>
		</>
	);
}

export default App;
