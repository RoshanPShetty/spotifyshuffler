"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
	return (
		<div>
			<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-spotifyBlack to-spotifyDarkGray">
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="text-5xl font-bold text-spotifyLightGray mb-6"
				>
					Tired of Spotify&apos;s Boring Shuffle?
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.3 }}
					className="text-lg text-spotifyGray mb-8 text-center"
				>
					Shake up your playlists with our permanent shuffle and keep the tunes
					fresh every time!
				</motion.p>
				<div className="flex items-center gap-4">
					<motion.a
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
						href="#"
						className="px-10 h-12 bg-spotifyGreen text-spotifyBlack font-semibold rounded-xl shadow-lg flex gap-2 items-center justify-center"
					>
						Install Extension{" "}
						<Image src="/chrome.svg" alt="chrome" width={20} height={20} />
					</motion.a>
					<motion.a
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
						href="#"
						className="px-10 h-12 text-white font-semibold rounded-xl shadow-lg shadow-white/10 border border-white flex gap-2 items-center justify-center"
                    >
                        Learn More
					</motion.a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
