import React from 'react';
import './Form.css'
import { Table } from './table';


export const FormPage = ({ setFormPage }) => {
	const [table, setTable] = React.useState(false)
	const [tableData, setTableData] = React.useState([])
	const [q1, setQ1] = React.useState(null)
	const [q2, setQ2] = React.useState(null)
	const [q3, setQ3] = React.useState(null)
	const [q4, setQ4] = React.useState(null)
	const [q5, setQ5] = React.useState(null)
	const [q6, setQ6] = React.useState(null)
	const [q7, setQ7] = React.useState(null)
	const [q8, setQ8] = React.useState(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		// store all the data in an array
		setTableData([
			q1, q2, q3, q4, q5, q6, q7, q8
		])

		if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8) {
			setTable(true)
		}
		else {
			alert("Please fill all the fields")
		}
	}
	// const 
	return (
		<div className='form-container'>
			{table
				?
				<Table onClose={setTable} tableData={
					tableData
				} />
				:

				<div>
					<h1
						style={{
							color: "#963",
						}}>MTD Questionaire</h1>
					<form onSubmit={
						handleSubmit
					}>
						<ol>
							<li>

								<div className='questions'>

									<h2>What is the capacity of the Camp? (persons)</h2>
									<input className="input" type="number" name="capacity" id="q1"
										placeholder="Enter a number"
										value={q1}
										onChange={(e) =>
											setQ1(e.target.value)
										}
									/>

								</div>
							</li>
							<li>

								<div className='questions'>
									<div
										style={{
											margin: "0 0",
											padding: "0 0",
										}}
									>
										<h2>Total Rental Duration </h2>
										<p>(Days)</p>
									</div>
									<input className="input" type="number" name="capacity" id="q2"
										placeholder="Enter the number"
										value={q2}
										onChange={
											(e) => setQ2(e.target.value)
										}
									/>
								</div>
							</li>
							<li>

								<div className='questions' style={{

								}}>
									<div>
										<h2>Average consumption of potable water.  </h2>
										<p>(As per noms its is considered as 1.3 CubicMeter per person per day) </p>
									</div>
									<input className="input" type="number" name="capacity" id="q3"
										placeholder="Enter a number"
										value={q3}
										// increment pageNum when input is filled
										onChange={
											(e) => setQ3(e.target.value)
										}
									/>
								</div>
							</li>
							<li>

								<div className='questions'>
									<h2>Consumable cost per cubic meter for MTD system.</h2>
									<input className="input" type="number" name="capacity" id="q4"
										placeholder="Enter a number"
										value={q4}
										onChange={
											(e) => setQ4(e.target.value)
										}
									/>
								</div>
							</li>
							<li>
								<div className='questions'>
									<div>
										<h2>Annual rental cost for MTD system.</h2>
										<p>(Silver Label 200 {"=>"}200 meter Cube per day)</p>
									</div>
									<input className="input" type="number" name="capacity" id="q5"
										placeholder="Enter a number"
										value={q5}
										onChange={
											(e) => setQ5(e.target.value)
										} />
								</div>
							</li>
							<li>
								<div className='questions'>
									<div>

										<h2>Annual rental cost for MTD system.</h2>
										<p>(Silver Label 600 {"=>"}600 meter Cube per day)</p>
									</div>
									<input className="input" type="number" name="capacity" id="q6"
										placeholder="Enter a number"
										value={q6}
										onChange={
											(e) => setQ6(e.target.value)
										} />
								</div>
							</li>
							<li>
								<div className='questions'>
									<h2 style={{
										display: "inline",
									}}
									>What is the cost of waste water rental tanker per trip</h2>

									<input className="input" type="number" name="capacity" id="q7"
										placeholder="Enter a number"
										value={q7}
										onChange={
											(e) => setQ7(e.target.value)
										} />
								</div>
							</li>
							<li>
								<div className='questions'>
									<h2 style={{
										display: "inline",
									}}>
										What is the cost of potable water rental tanker per trip</h2>

									<input className="input" type="number" name="capacity" id="q8"
										placeholder="Enter a number"
										value={q8}
										onChange={
											(e) => setQ8(e.target.value)
										} />
								</div>
							</li>

						</ol>
						<button style={{
							marginTop: "1rem",
							backgroundColor: "#fff",
							color: "#000",
						}}>Analyze</button>
					</form>
					<button style={{
						marginTop: "1rem",
						backgroundColor: "#fff",
						color: "#000",
						float: "right",
					}} onClick={() => {
						setFormPage(false)
					}}>Back to Welcome Page</button>

				</div>
			}
		</div>
	)
} 