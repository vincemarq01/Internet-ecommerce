import React from "react";
import ReactTyped from "react-typed";

const Hero = () => {
	return (
		<div className="text-white">
			<div className="max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
				<p className="text-[#00df9a] font-bold p-2">Growing Internet So Fast!</p>
				<h1 className="md:text-5xl md:py-3 sm:text-4xl text-3xl font-bold">Grown with data.</h1>
				<div className="flex justify-center items-center ">
					<p className="md:text-5xl sm:text-4xl text-xl">Are Internet </p>
					<ReactTyped className="pl-3 md:text-5xl sm:text-4xl text-xl" strings={["No Data Cap", "No Lag", "So Fast"]} typeSpeed={80} loop backSpeed={30} />
				</div>
				<button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-gray-600 text-black">Get Started</button>
			</div>
		</div>
	);
};

export default Hero;
