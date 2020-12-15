// Users info
export const students = [
	{
		id: 1,
		name: 'Ilhom',
	},
	{
		id: 2,
		name: 'Akrom',
	},
	{
		id: 3,
		name: 'Ibrohim',
	},
	{
		id: 4,
		name: 'Shoikrom',
	},
];

// Attendance data
export const data = [
	{
		id: 1,
		userId: 1,
		visitDate: '2020-12-09',
		visited: false,
		score: 0,
	},
	{
		id: 2,
		userId: 2,
		visitDate: '2020-12-09',
		visited: true,
		score: 3,
	},
	{
		id: 3,
		userId: 3,
		visitDate: '2020-12-09',
		visited: true,
		score: 2,
	},
	{
		id: 4,
		userId: 4,
		visitDate: '2020-12-09',
		visited: true,
		score: 1,
	},
	{
		id: 1,
		userId: 1,
		visitDate: '2020-12-10',
		visited: true,
		score: 1,
	},
	{
		id: 2,
		userId: 2,
		visitDate: '2020-12-10',
		visited: false,
		score: 0,
	},
	{
		id: 3,
		userId: 3,
		visitDate: '2020-12-10',
		visited: true,
		score: 4,
	},
	{
		id: 4,
		userId: 4,
		visitDate: '2020-12-10',
		visited: true,
		score: 5,
	},
];

const TODAY = new Date();
const YEAR = String(TODAY.getFullYear());

const MONTH = String(TODAY.getMonth() + 1);
const DAY = String(TODAY.getDate());

const defaultDay = `${YEAR}-${MONTH.padStart(2, 0)}-${DAY.padStart(2, 0)}`;
let filterDate = 0;
export let filteredDate = [];

export const onElDateInputChange = (evt) => {
	if (evt && evt.type === 'change') {
		filterDate = evt.currentTarget.value;
		console.log(filterDate);
	} else {
		filterDate = defaultDay;
	}

	filteredDate = data.filter((element) => {
		return element.visitDate === filterDate;
	});
	console.log(filteredDate);
};
