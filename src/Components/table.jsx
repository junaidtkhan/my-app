import "./table.css"
export const Table = (props) => {
	const totalConsumption = props.tableData[0] * props.tableData[2]
	let MTDUnitCostPerDay = 0
	MTDUnitCostPerDay = totalConsumption <= 200 ? props.tableData[4] / 365 : props.tableData[5] / 365
	parseFloat(MTDUnitCostPerDay).toFixed(2)

	const totalMTDCost = (props.tableData[1] * MTDUnitCostPerDay) + (props.tableData[3] * totalConsumption)
	parseFloat(totalMTDCost).toFixed(2)
	const TotaltankeringCost = (props.tableData[6] / 20) * props.tableData[0] * props.tableData[2] * props.tableData[1]

	return (
		// Table with 2 colomns and 14 rows
		<>
			<div
				style={{
					height: "3rem",
					width: "10rem",
					marginLeft: "10rem",
					marginBottom: "2rem",
					backgroundColor: totalMTDCost > TotaltankeringCost ? "red" : "green",
					borderRadius: "1rem",
					border: "3px solid #658",
					paddingTop: "1rem",
				}}>
				{
					totalMTDCost > TotaltankeringCost ? "Not Feasible" : "Feasible"
				}
			</div>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Number of People</td>
						<td>{props.tableData[0]}</td>
					</tr>
					<tr>
						<td>Rental Period</td>
						<td>{props.tableData[1]}</td>
					</tr>
					<tr>
						<td>Average consumption per person</td>
						<td>{props.tableData[2]}</td>
					</tr>
					<tr>
						<td>Total Consumption per day</td>
						<td>{totalConsumption}</td>
					</tr>
					<tr>
						<td>Annual rental cost silver label 200</td>
						<td>{props.tableData[4]}</td>
					</tr>
					<tr>
						<td>Annual rental cost silver label 600</td>
						<td>{props.tableData[5]}</td>
					</tr>
					<tr>
						<td>Waste water tanker cost per cubic meter</td>
						<td>{props.tableData[6] / 20}</td>
					</tr>
					<tr>
						<td>Total consumable cost</td>
						<td>{parseFloat(props.tableData[3] * totalConsumption).toFixed(2)}</td>
					</tr>
					<tr>
						<td>MTD Unit Cost per day</td>
						<td>{parseFloat(MTDUnitCostPerDay).toFixed(2)}</td>
					</tr>
					<br />
					<tr>
						<td><b>Total MTD Cost</b></td>
						<td><b>{parseFloat(totalMTDCost).toFixed(2)}</b></td>
					</tr>
					<tr>
						<td><b>Total waste water tankering cost</b></td>
						<td><b>{parseFloat(TotaltankeringCost).toFixed(2)}</b></td>
					</tr>


				</tbody>
			</table >
			<button
				style={{
					marginTop: "1rem",
					backgroundColor: "#fff",
					color: "#000",
				}}
				onClick={() => {
					props.onClose(false)
				}}
			>
				Close table
			</button>
		</>
	)
}
