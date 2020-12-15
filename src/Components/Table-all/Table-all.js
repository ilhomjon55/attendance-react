function All(props) {
	return (
		<tr key={props.keyValue}>
			<td>{props.id}</td>
			<td>{props.visited}</td>
			<td>{props.score}</td>
		</tr>
	);
}

export default All;
