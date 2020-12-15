import './App.css';
import { students, data, filteredDate, onElDateInputChange } from './data';
import All from './Components/Table-all/Table-all';

function App() {
	return (
		<div className='container'>
			<div className='form-group my-5 w-50 mx-auto'>
				<input
					onChange={onElDateInputChange}
					className='date__input-choice form-control js-date__input-choice'
					type='date'
					name='user_data'
				/>
			</div>

			<table className='attendance__table mx-auto mb-4'>
				<thead>
					<tr>
						<th>Students</th>
						<th>Attendance</th>
						<th>Score</th>
					</tr>
				</thead>

				<tbody className='attendance__table-body'>
					{filteredDate.map((element, index) => {
						return (
							<>
								<All
									keyValue={index}
									id={element.id}
									visited={element.visited ? '+' : '-'}
									score={element.score}
								/>
							</>
						);
					})}
				</tbody>
			</table>

			<table className='attendance__table-student d-none mx-auto'>
				<thead>
					<tr>
						<th>Student</th>
						<th>Attendance Day</th>
						<th>Visited</th>
					</tr>
				</thead>

				<tbody className='attendance__body-student'>
					<tr>
						<td>Akrom</td>
						<td>2012-12-09</td>
						<td>+</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;
