import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
	const [nav, setNav] = useState(true);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white">
			<h1 className="w-full text-3xl pl-3 font-bold text-[#00df9a]">MARQ INTERNET</h1>
			<ul className="hidden md:flex w-full">
				<li className="p-4"> Home</li>
				<li className="p-4">Profile</li>
				<li className="p-4">Skills</li>
				<li className="p-4">About</li>
			</ul>

			<div onClick={handleNav} className="block md:hidden">
				{!nav ? <AiOutlineClose /> : <AiOutlineMenu size={20} />}
			</div>
			<div className={!nav ? "fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000 lg:hidden" : "fixed left-[-100%]"}>
				<h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

				<ul className="uppercase p-4">
					<li className="p-4 border-b border-gray-600"> Home</li>
					<li className="p-4 border-b border-gray-600">Profile</li>
					<li className="p-4 border-b border-gray-600">Skills</li>
					<li className="p-4 border-b border-gray-600">About</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
