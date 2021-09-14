import './Dashboard.scss'
import React from 'react'
import Sidebar from '../components/layout/Sidebar/Sidebar'
import Navbar from '../components/layout/Navbar'

const Dashboard = ({children}) => {
	return (
		<div className="dashboardLayout">

			<Navbar />
			<Sidebar />

			<div className="content">
				{children}
			</div>

			
		</div>
	)
}

export default Dashboard
