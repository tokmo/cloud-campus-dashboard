import "./Home.scss";
import React from "react";
import Widget from "../components/common/Widget";
import SchedulesList from "../components/home/SchedulesList";
import SocialStats from "../components/home/SocialStats";

const Home = () => {
	return (
		<div className="pageHome">
			{/* <h1>Page d'accueil</h1>	 */}

			<div className="left">
				<div className="title">
					<h1 className="s32 w700">Dashboard</h1>
					<h2 className="s16 w400">Welcome back, Erza Miller!</h2>
				</div>

				<Widget title="Schedule Content">
					<SchedulesList />
				</Widget>

				<Widget title="Top Channels">
					<SocialStats />
				</Widget>
			</div>

			<div className="right"></div>
		</div>
	);
};

export default Home;
