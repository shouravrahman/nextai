const Background = ({ image }) => {
	return (
		<div
			className='hidden min-h-screen lg:flex lg:w-1/2 xl:w-1/2 2xl:w-3/4 bg-contain bg-no-repeat bg-center'
			style={{ backgroundImage: `url(${image})` }}
		></div>
	);
};

export default Background;
