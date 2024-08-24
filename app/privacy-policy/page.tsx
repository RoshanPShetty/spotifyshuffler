"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
	return (
		<div className="min-h-screen bg-spotifyBlack text-spotifyLightGray p-8">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="max-w-3xl mx-auto"
			>
				<h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
				<p className="mb-4">
					Your privacy is important to us. This Privacy Policy explains how we
					collect, use, and protect your information when you use our Spotify
					Playlist Randomizer Chrome extension.
				</p>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					Information We Collect
				</h2>
				<p className="mb-4">
					We may collect the following types of information:
				</p>
				<ul className="list-disc list-inside mb-4">
					<li>
						<strong>Spotify Account Information:</strong> When you use the
						extension, we may collect basic information from your Spotify
						account, such as your username and playlist details, to provide the
						shuffling functionality.
					</li>
					<li>
						<strong>Usage Data:</strong> We may collect information about how
						you use the extension, such as how often you shuffle playlists, to
						improve our services.
					</li>
				</ul>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					How We Use Your Information
				</h2>
				<p className="mb-4">We use the information we collect to:</p>
				<ul className="list-disc list-inside mb-4">
					<li>Provide and improve the functionality of the extension.</li>
					<li>Analyze usage patterns to enhance user experience.</li>
				</ul>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					How We Protect Your Information
				</h2>
				<p className="mb-4">
					We implement a variety of security measures to protect your personal
					information. However, please note that no method of transmission over
					the Internet or method of electronic storage is 100% secure.
				</p>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					Third-Party Services
				</h2>
				<p className="mb-4">
					Our extension may use third-party services, such as Spotify&apos;s
					API, to provide its functionality. These services may collect
					information in accordance with their own privacy policies.
				</p>

				<h2 className="text-2xl font-semibold mt-8 mb-4">Your Consent</h2>
				<p className="mb-4">
					By using our extension, you consent to our Privacy Policy.
				</p>

				<h2 className="text-2xl font-semibold mt-8 mb-4">
					Changes to Our Privacy Policy
				</h2>
				<p className="mb-4">
					We may update our Privacy Policy from time to time. Any changes will
					be posted on this page with an updated revision date.
				</p>

				<h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
				<p className="mb-4">
					If you have any questions about this Privacy Policy, please contact us
					at{" "}
					<a
						href="mailto:roshanshetty2000@gmail.com"
						className="text-spotifyGreen"
					>
						roshanshetty2000@gmail.com
					</a>
					.
				</p>
			</motion.div>
		</div>
	);
}
