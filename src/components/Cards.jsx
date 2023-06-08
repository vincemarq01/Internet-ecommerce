import React from "react";
import Single from "../assets/single.png";

const Cards = () => {
	return (
		<div className="w-full py-[10rem] px-4 bg-white">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
				<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200">
					<img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} />
					<h2 className="text-2xl font-bold text-center py-8">Single User</h2>
					<p className="text-center font-medium">$149</p>
					<div>
						<p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
						<p className="py-2 border-b mx-8 ">1 Granted User</p>
						<p className="py-2 border-b mx-8 ">1 Granted User</p>
					</div>
					<button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
				</div>
				<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200">
					<img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} />
					<h2 className="text-2xl font-bold text-center py-8">Single User</h2>
					<p className="text-center font-medium">$149</p>
					<div>
						<p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
						<p className="py-2 border-b mx-8 ">1 Granted User</p>
						<p className="py-2 border-b mx-8 ">1 Granted User</p>
					</div>
					<button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
				</div>
				<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200">
					<img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} />
					<h2 className="text-2xl font-bold text-center py-8">Single User</h2>
					<p className="text-center font-medium">$149</p>
					<div>
						<p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
						<p className="py-2 border-b mx-8 ">1 Granted User</p>
						<p className="py-2 border-b mx-8 ">1 Granted User</p>
					</div>
					<button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
