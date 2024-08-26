"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ArrowDown from "../public/arrow-down.svg";
import { albums } from "@/data";

const Hero = () => {
	return (
		<div className="py-16 lg:pb-24" id="home">
			<section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
				<div>
					<span className="uppercase mb-4 text-xs md:text-sm n-gradient bg-clip-text text-transparent font-medium flex gap-2 items-end">
						Spotify Shuffler{" "}
						<Image
							src="/logo.png"
							alt="logo"
							width={40}
							height={40}
							className="roundex-xl size-6"
						/>
					</span>
					<h3 className="font-serif text-4xl md:text-6xl font-semibold">
						Tired of Spotify&apos;s Boring Shuffle?
					</h3>
					<p className="text-base md:text-lg text-slate-400 my-4 md:my-6">
						Shake up your playlists with our permanent shuffle and keep the
						tunes fresh every time!
					</p>
					<div className="flex items-center gap-4">
						<motion.a
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
							href="#"
							className="px-10 h-12 n-gradient font-semibold rounded-xl shadow-lg flex gap-2 items-center justify-center"
						>
							Install Extension{" "}
							<Image src="/chrome.svg" alt="chrome" width={20} height={20} />
						</motion.a>
						<motion.a
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
							href="#countdown"
							className="px-10 h-12 text-white font-semibold rounded-xl shadow-lg shadow-white/10 border border-white flex gap-2 items-center justify-center"
						>
							Learn More
							<ArrowDown className="size-4" />
						</motion.a>
					</div>
				</div>
				<ShuffleGrid />
			</section>
		</div>
	);
};

const shuffle = (array: any) => {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};


const generateSquares = () => {
	return shuffle(albums).map((albumb: any) => (
		<motion.div
			key={albumb.id}
			layout
			transition={{ duration: 1.5, type: "spring" }}
			className="w-full h-full rounded-xl"
			style={{
				backgroundImage: `url(${albumb.src})`,
				backgroundSize: "cover",
			}}
		></motion.div>
	));
};

const ShuffleGrid = () => {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Update the type of timeoutRef
	const [squares, setSquares] = useState(generateSquares());

	useEffect(() => {
		shuffleSquares();

		return () => clearTimeout(timeoutRef.current ?? undefined);
	}, []);

	const shuffleSquares = () => {
		setSquares(generateSquares());

		timeoutRef.current = setTimeout(shuffleSquares, 3000);
	};

	return (
		<div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
			{squares.map((sq: any) => sq)}
		</div>
	);
};

export default Hero;
