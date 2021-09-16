import './Widget.scss'
import React from 'react'

const Widget = ({children, title}) => {
	return (
		<div className="widget">

			{
				title &&
				<div className="title">
					<h1 className="s20 w700">{title}</h1>

					<button className="s14 w600">
						See Detail
						<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17">
							<path d="m6.7 13.2 4.7-4.7-4.7-4.7-1.4 1.4 3.3 3.3-3.3 3.3 1.4 1.4Z" fill="#017EFA"/>
						</svg>
					</button>
				</div>
			}
			
			<div className="content">
				{children}
			</div>

		</div>
	)
}

export default Widget
