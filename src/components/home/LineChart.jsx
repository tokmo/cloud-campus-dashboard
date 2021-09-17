import "./LineChart.scss";
import React from "react";
import { Line } from "react-chartjs-2";

// const datas = [
// 	{
// 		date: 'Jan',
// 		value: '134000'
// 	},
// 	{
// 		date: 'Fev',
// 		value: '114000'
// 	},
// 	{
// 		date: 'Mar',
// 		value: '57420'
// 	},
// 	{
// 		date: 'Avr',
// 		value: '23000'
// 	},
// 	{
// 		date: 'Mai',
// 		value: '184000'
// 	},
// 	{
// 		date: 'Jui',
// 		value: '156000'
// 	},
// 	{
// 		date: 'Jui',
// 		value: '124000'
// 	},
// 	{
// 		date: 'Aou',
// 		value: '98000'
// 	},
// 	{
// 		date: 'Sept',
// 		value: '58000'
// 	},
// 	{
// 		date: 'Oct',
// 		value: '125000'
// 	},
// 	{
// 		date: 'Nov',
// 		value: '195000'
// 	},
// 	{
// 		date: 'Dec',
// 		value: '142500'
// 	},

// ]

const data = {
	labels: [
		"Jan",
		"Fev",
		"Mar",
		"Avr",
		"Mai",
		"Jui",
		"Jui",
		"Aou",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	],
	datasets: [
		{
			label: "# of Votes",
			data: [
				134000, 114000, 45000, 55000, 158000, 195000, 24200, 134200,
				174000, 78000, 125000, 165000,
			],
			fill: false,
			backgroundColor: "#FD1F9B",
			borderColor: "#FD1F9B",
			borderWidth: 2
		},
		{
			label: "test",
			data: [
				78000, 130000, 185000, 25000, 87000, 125000, 142000, 64000,
				32000, 185000, 174000, 153000,
			],
			fill: false,
			backgroundColor: "#017EFA",
			borderColor: "#017EFA",
			borderWidth: 2
		},
	],
};

const options = {
	scales: {
		x: {
			grid: {
				display: false,
				drawBorder: false
			},
			ticks:{
				color:"#8E8E8E",
				padding: 30,
				font:{
					size:14
				}
			}
		},
		y: {
			grid: {
				display: false,
				drawBorder: false,
			},
			ticks:{
				padding: 30,
				color:"#8E8E8E",
				font:{
					size:14
				},
				autoSkip: true,
				maxTicksLimit: 5
			}
		},
		

	},
	plugins: {
		legend: {
			display: false,

		},
	},
	elements: {
		point: {
			radius: 4,
		},
	},

};

const LineChart = () => {
	return (
		<div className="lineChart">
			<Line data={data} options={options} height={110} />
		</div>
	);
};

export default LineChart;
