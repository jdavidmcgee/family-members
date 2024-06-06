import data from './data';
import { useState } from 'react';
import List from './List';

const App = () => {
	const [people, setPeople] = useState(data);
	console.log(people);

	return (
		<main>
			<section className="container">
				<h3 style={{textAlign: 'center'}}>Family Members</h3>
				<List people={people} />
				<button onClick={() => setPeople([])} className="btn btn-block">
					Clear All
				</button>
			</section>
		</main>
	);
};
export default App;
