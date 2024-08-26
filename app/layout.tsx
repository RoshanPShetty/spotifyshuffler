import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
	subsets: ["latin"],
	variable: "--font-serif",
	weight: "400",
});

export const metadata: Metadata = {
	title: "Spotify Shuffler",
	description:
		"Sick of Spotify's boring shuffle? Shake up your playlists with our permanent shuffle and keep the tunes fresh every time!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={twMerge(
					inter.variable,
					calistoga.variable,
					"bg-black text-white antialiased font-sans"
				)}
			>
				{children}
				<GoogleAnalytics gaId={process.env.TAG_ID as string} />
			</body>
		</html>
	);
}
