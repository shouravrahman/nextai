"use client";

import {
	AiFillGithub,
	AiFillFacebook,
	AiFillTwitterCircle,
	AiFillLinkedin,
} from "react-icons/ai";

const socialIconsData = [
	{ name: "Github", icon: <AiFillGithub />, url: "http://github.com" },
	{ name: "Facebook", icon: <AiFillFacebook />, url: "http://facebook.com" },
	{ name: "Twitter", icon: <AiFillTwitterCircle />, url: "http://twitter.com" },
	{ name: "LinkedIn", icon: <AiFillLinkedin />, url: "http://linkedin.com" },
];
const SocialIcons = () => {
	return (
		<div className='flex justify-center gap-4 mt-4 pt-6 text-3xl'>
			{socialIconsData?.map((socialIcon) => (
				<a
					key={socialIcon.name}
					href={socialIcon.url}
					target='_blank'
					rel='noopener noreferrer'
				>
					{socialIcon.icon}
				</a>
			))}
		</div>
	);
};

export default SocialIcons;
