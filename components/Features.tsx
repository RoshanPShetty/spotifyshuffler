"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const BounceCard = ({
	className,
	children,
}: {
	className: string;
	children: React.ReactNode;
}) => {
	return (
		<motion.div
			whileHover={{ scale: 0.95, rotate: "-1deg" }}
			className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl  border-white/15 bg-white/10 p-8 ${className}`}
		>
			{children}
		</motion.div>
	);
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
	return (
		<h3 className="font-serif mx-auto text-center text-3xl font-semibold">
			{children}
		</h3>
	);
};

const Features = () => {
	const [isSelected, setSelected] = useState(false);

	return (
		<div className="container" id="features">
			<div className="flex justify-center">
				<p className="uppercase font-semibold tracking-widest n-gradient text-transparent bg-clip-text">
					Real-World Impact
				</p>
			</div>
			<h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-6">
				Highlighted Features
			</h2>

			<p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
				Discover how Spotify Shuffler elevates your music experience with
				advanced, personalized shuffle options.
			</p>
			<section className="mx-auto max-w-7xl px-4 py-12">
				<div className="mb-4 grid grid-cols-12 gap-4">
					<BounceCard className="col-span-12 md:col-span-4 n-gradient">
						<CardTitle>Smart Shuffle</CardTitle>
						<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-black p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
							<span className="block text-center font-semibold text-indigo-50 uppercase">
								Auto-shuffle after full play.
							</span>
							<div className="flex gap-4 px-5 py-4 items-center justify-between rounded-3xl mt-4">
								<span className="text-lg text-indigo-50">Auto Shuffle</span>
								<div
									className={`cursor-pointer w-16 h-10 flex items-center bg-gray-300 rounded-full p-1 ${
										isSelected ? "n-gradient justify-end" : "justify-start"
									}`}
									onClick={() => setSelected(!isSelected)}
								>
									<motion.div
										layout
										className="bg-white w-8 h-8 rounded-full shadow-md"
									></motion.div>
								</div>
							</div>
						</div>
					</BounceCard>
					<BounceCard className="col-span-12 md:col-span-8">
						<CardTitle>Custom Shuffle Settings</CardTitle>
						<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
							<span className="block text-center font-semibold text-orange-50 uppercase">
								Shuffle by genre, artist, or mood.
							</span>
							<Image
								src="/concert.jpg"
								alt="concert"
								width={1920}
								height={1080}
								className="mt-4 w-full h-full object-cover rounded-t-2xl"
							/>
						</div>
					</BounceCard>
				</div>
				<div className="grid grid-cols-12 gap-4">
					<BounceCard className="col-span-12 md:col-span-8">
						<CardTitle>Playlist Insights</CardTitle>
						<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-red-800 to-red-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
							<span className="block text-center font-semibold text-emerald-50 uppercase">
								View top tracks and trends.
							</span>
							<Image
								src="/trends.jpg"
								alt="laptop"
								width={1920}
								height={1080}
								className="mt-4 w-full h-full object-cover rounded-t-2xl"
							/>
						</div>
					</BounceCard>

					<BounceCard className="col-span-12 md:col-span-4 n-gradient">
						<a href="#" target="_blank">
							<CardTitle>One-Click Installation</CardTitle>
							<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-black p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
								<span className="block text-center font-semibold text-red-50 uppercase">
									Quick setup via Chrome Store.
								</span>
								<Image
									src="/chrome.svg"
									alt="chrome"
									width={1920}
									height={1080}
									className="mt-4 w-full h-2/3"
								/>
							</div>
						</a>
					</BounceCard>
				</div>
			</section>
		</div>
	);
};

export default Features;
