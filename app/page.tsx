"use client";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Countdown from "@/components/CountDown";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<Countdown />
			<Features />
			<Reviews />
			<Contact />
		</div>
	);
}
