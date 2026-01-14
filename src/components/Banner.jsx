'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
		title: "Unlock Your Potential",
		subtitle: "with CodeAcademy",
		description:
			"Learn modern technologies, build real-world skills, and join the next generation of developers.",
	},


	{
		id: 2,
		image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=600&fit=crop",
		title: "Learn at Your Pace",
		subtitle: "Flexible Learning Schedule",
		description:
			"Access courses anytime, anywhere with our flexible learning platform tailored for your lifestyle.",
	},

	{
		id: 3,
		image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop",
		title: "Live Projects",
		subtitle: "Real-World Experience",
		description:
			"Work on actual projects and build a portfolio that impresses employers.",
	},


	{
		id: 4,
		image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop",
		title: "Job Placement",
		subtitle: "Your Next Career",
		description:
			"Get hired by top tech companies with our job placement assistance.",
	},
];

export default function Banner() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
	const prevSlide = () =>
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

	const slide = slides[currentSlide];

	return (
		<section 
			// changed: use 60vh on mobile, 70vh on md+, remove top padding to center content vertically
			className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slide.image}')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				transition: 'background-image 1s ease-in-out, height 300ms ease',
			}}
		>
			{/* Content */}
			<div className="relative z-10 px-4 sm:px-6 max-w-xl md:max-w-3xl mx-auto">
				<h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
					{slide.title}
					<br />
					<span className="text-teal-400">{slide.subtitle}</span>
				</h1>

				<p className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 mb-6">
					{slide.description}
				</p>

				{/* Buttons: single row, wrap if necessary, responsive padding & text */}
				<div className="flex flex-row flex-wrap items-center justify-center gap-3">
					<Link
						href="/allCourses"
						aria-label="Explore Courses"
						className="flex-shrink-0 px-6 py-2 sm:px-8 sm:py-3 bg-teal-500 hover:bg-teal-600 text-white text-sm sm:text-lg font-bold rounded-full shadow-xl transition transform hover:scale-105"
					>
						Explore Courses
					</Link>
					<Link
						href="/aboutUs"
						aria-label="Learn More"
						className="flex-shrink-0 px-6 py-2 sm:px-8 sm:py-3 text-white border-2 border-white rounded-full text-sm sm:text-lg font-semibold hover:bg-white hover:text-indigo-900 transition transform hover:scale-105"
					>
						Learn More
					</Link>
				</div>
			</div>

			{/* Slider Controls - Previous */}
			<button
				onClick={prevSlide}
				className="absolute left-4 md:left-6 z-20 p-2 md:p-3 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full transition"
				aria-label="Previous slide"
			>
				<ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
			</button>

			{/* Slider Controls - Next */}
			<button
				onClick={nextSlide}
				className="absolute right-4 md:right-6 z-20 p-2 md:p-3 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full transition"
				aria-label="Next slide"
			>
				<ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
			</button>

			{/* Dots Indicator */}
			<div className="absolute bottom-6 md:bottom-8 z-20 flex gap-2">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`h-3 rounded-full transition flex items-center ${
							index === currentSlide
								? "bg-teal-400 px-3"
								: "w-3 bg-white bg-opacity-50"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</section>
	);
}
