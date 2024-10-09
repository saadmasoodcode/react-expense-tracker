import './History.css';
import React from 'react';

function History({ amountArray }) {
	return (
		<div className="historyContainer">
			<h1>History</h1>
			{amountArray.map((amount, index) => {
				// const currentTime = moment().format('DD-MMM-YY hh:mm A');
				console.log(amountArray);
				return (
					<h4 key={index}>
						Rs.{amount.value.toLocaleString('en-US')} | The amount is
						debited | {amount.time}
					</h4>
				);
			})}
		</div>
	);
}

export default History;
