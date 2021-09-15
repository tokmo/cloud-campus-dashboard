import './OnlineMembers.scss'
import React from 'react'

import profilPicture2 from '../../../assets/img/navbar/profilPicture2.jpg'
import profilPicture3 from '../../../assets/img/navbar/profilPicture3.jpg'
import profilPicture4 from '../../../assets/img/navbar/profilPicture4.jpg'
import profilPicture5 from '../../../assets/img/navbar/profilPicture5.jpg'

const OnlineMembers = () => {
	return (
		<div className="onlineMemberNavbar">

			<div className="text">
				<div className="round"></div>
				<span className="s12 w700">ONLINE</span>
			</div>

			<div className="members">

				<MemberPhoto image={profilPicture2} />
				<MemberPhoto image={profilPicture3} />
				<MemberPhoto image={profilPicture4} />
				<MemberPhoto image={profilPicture5} />

			</div>
			
		</div>
	)
}


const MemberPhoto = ({image}) => {
	return (
		<div className="memberPhoto">
			<img src={image} alt="" />
		</div>
	)
}

export default OnlineMembers
