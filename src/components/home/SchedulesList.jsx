import './SchedulesList.scss'
import React from "react";
import Schedule from "./Schedule";

const SchedulesList = () => {
	return (
		<div className="SchedulesList">
			<Schedule
				month="Jul"
				day={18}
				title="Write 5 microblog articles on Instagram"
				subtitle="Office / Marketing"
				completition={72}
			/>
			<Schedule
				month="Jul"
				day={24}
				title="Publish 20 post on Dribbbles"
				subtitle="Office / Marketing"
				completition={14}
			/>
			<Schedule
				month="Jul"
				day={26}
				title="Drafting Material for Travel Campaign"
				subtitle="Draft"
				completition={44}
				decoOff={true}
			/>
		</div>
	);
};

export default SchedulesList;
