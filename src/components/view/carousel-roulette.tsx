import React, { useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";

export type CarouselRouletteProps = {
	items: React.ReactNode[];
	selectedId: number; // index of the item that should be selected
	itemWidth?: number; // width of each slide (px)
	rounds?: number; // how many full loops before ending
	duration?: number; // animation duration
};

export const CarouselRoulette = ({
	items,
	selectedId,
	itemWidth = 200,
	rounds = 4,
	duration = 4,
}: CarouselRouletteProps) => {
	const controls = useAnimation();

	// Duplicate items to allow smooth looping spin
	const extendedItems = useMemo(() => [...items, ...items, ...items], [items]);

	// Total width to travel:
	// - full rounds: rounds * items.length * itemWidth
	// - plus offset to land exactly on selectedId
	const totalDistance =
		rounds * items.length * itemWidth + selectedId * itemWidth - itemWidth;

	useEffect(() => {
		const runAnimation = async () => {
			await controls.start({
				x: -totalDistance,
				transition: {
					duration,
					ease: [0.1, 0.9, 0.1, 1], // slow deceleration
				},
			});
		};

		runAnimation();
	}, [controls, totalDistance, duration]);

	return (
		<div
			style={{
				width: itemWidth,
				overflow: "hidden",
				border: "2px solid #ddd",
				borderRadius: 12,
				position: "relative",
			}}
		>
			<motion.div
				animate={controls}
				initial={{ x: 0 }}
				style={{
					display: "flex",
				}}
			>
				{extendedItems.map((item, i) => (
					<div
						key={i}
						style={{
							width: itemWidth,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: 8,
						}}
					>
						{item}
					</div>
				))}
			</motion.div>
		</div>
	);
};
