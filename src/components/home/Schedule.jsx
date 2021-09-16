import './Schedule.scss'
import React from 'react'

const Schedule = ({month, day, title, subtitle, completition, decoOff}) => {
	const classNames = decoOff ? "schedule scheduleDecoOff" : "schedule"

	return (
		<div 
			className={classNames}
		>

			<div className="row1">
				<div className="col1">

					<div className="date">
						<h2 className="s12 w600">{month}</h2>
						<h1 className="s18 w600">{day}</h1>
					</div>

				</div>
				<div className="col2">

					<h1 className="s16 w600">{title}</h1>
					<h2 className="s12 w400">{subtitle}</h2>
				</div>
			</div>

			<div className="row2 s12 w400">

				<div className="progressBar">
					<div 
						className="progressBarFull"
						style={{
							width: completition + '%'
						}}
					>
					</div>
				</div>

				{completition + ' '}% Complete
			</div>
			
		</div>
	)
}

export default Schedule
