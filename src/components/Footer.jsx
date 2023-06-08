import React from "react";

const Footer = () => {
	return (
		<div className="max-w-[1240px] py-16 px-4 mx-auto grid lg:grid-cols-3 gap-8 bg-black">
			<div className=" grid grid-col">
				<div className="w-full flex flex-col ">
					<h2 className="text-[#00df9a] text-2xl font-bold">REACT.</h2>
					<p className="text-white">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled
					</p>
				</div>
			</div>

			<div className="lg:col-span-2 text-white flex justify-between mt-6">
				<div>
					<ul>
						<h6 className="font-medium text-gray-600">Support</h6>
						<li className="py-2 text-sm">Solutions</li>
						<li className="py-2 text-sm">Pricing</li>
						<li className="py-2 text-sm">Documentation</li>
						<li className="py-2 text-sm">Guidelines</li>
					</ul>
				</div>
				<div>
					<ul>
						<h6 className="font-medium text-gray-600">Support</h6>
						<li className="py-2 text-sm">Solutions</li>
						<li className="py-2 text-sm">Pricing</li>
						<li className="py-2 text-sm">Documentation</li>
						<li className="py-2 text-sm">Guidelines</li>
					</ul>
				</div>
				<div>
					<ul>
						<h6 className="font-medium text-gray-600">Support</h6>
						<li className="py-2 text-sm">Solutions</li>
						<li className="py-2 text-sm">Pricing</li>
						<li className="py-2 text-sm">Documentation</li>
						<li className="py-2 text-sm">Guidelines</li>
					</ul>
				</div>
				<div>
					<ul>
						<h6 className="font-medium text-gray-600">Support</h6>
						<li className="py-2 text-sm">Solutions</li>
						<li className="py-2 text-sm">Pricing</li>
						<li className="py-2 text-sm">Documentation</li>
						<li className="py-2 text-sm">Guidelines</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
