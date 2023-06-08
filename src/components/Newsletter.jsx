import React from "react";

const Newsletter = () => {
	return (
		<div className="w-full py-16 text-white px-4">
			<div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
				<div className="lg:col-span-2">
					<h1 className="md:text-5xl sm:text-4xl text-xl font-bold py-2">Want tips & tricks to optimize your flow</h1>
					<p className="">Want tips & tricks to optimize your flow</p>
				</div>
				<div className="my-4 ">
					<div className="flex flex-col items-center w-full sm:flex-row">
						<input className="p-3 flex w-full rounded-md  text-black" type="email" placeholder="Enter Email" />
						<button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-2 my-6 py-3 hover:bg-gray-600 text-black">Get Started</button>
					</div>
					<p className="mx-auto">Nice one, Curse one</p>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
