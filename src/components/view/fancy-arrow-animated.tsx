import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface FancyArrowAnimatedProps {
	rotation?: number;
	scale?: number;
}

export const FancyArrowAnimated = ({
	rotation = 0,
	scale = 1,
}: FancyArrowAnimatedProps) => {
	const controls = useAnimation();

	useEffect(() => {
		// Define the animation sequence async function
		const sequence = async () => {
			// 1. The Appearing Animation
			// We await this so the next step doesn't start until this finishes.
			await controls.start({
				opacity: 1,
				scale,
				transition: { duration: 0.6, ease: "easeOut" },
			});

			// 2. The Infinite Shaking Animation
			// This starts after the await above completes.
			await controls.start({
				// Keyframes for a slight rotation wiggle
				rotate: [0, -3, 3, -2, 2, 0].map((degree) => degree + rotation),
				transition: {
					duration: 0.5, // How fast one shake cycle is
					ease: "easeInOut",
					repeat: Infinity, // Loop forever
					repeatDelay: 0.5, // Pause for 2 seconds between shakes
				},
			});
		};

		// Run the sequence on component mount
		sequence().then();
	}, [controls, rotation, scale]);

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
			{/* We wrap the SVG content in a motion group (<motion.g>).
          - initial: Sets starting state (invisible and slightly smaller).
          - animate: connects our 'controls' to manage the sequence.
          - style.transformOrigin: Crucial to ensure it rotates around the center
            of the 500x500 viewBox, rather than the top-left corner.
        */}
			<motion.g
				initial={{ opacity: 0, scale: scale - 0.3, rotate: rotation }}
				animate={controls}
				exit={{ opacity: 0, scale: scale - 0.3, rotate: rotation }}
				style={{ transformOrigin: "250px 250px" }}
			>
				<path
					style={{ fill: "#FFEBED", strokeWidth: 1 }}
					d="M 451.187 32.182 C 419.265 33.789 384.134 38.025 355.532 53.14 C 352.35 54.822 354.606 59.463 357.895 58.742 C 379.102 54.088 399.25 48.726 420.115 45.482 C 356.782 86.219 306.492 149.454 274.36 217.597 C 251.249 209.952 226.339 207.198 201.181 210.37 C 157.534 215.883 116.071 236.89 84.688 267.553 C 53.01 298.501 23.811 345.098 36.533 390.806 C 37.383 393.858 41.717 392.536 41.201 389.52 C 27.634 310.511 111.408 241.06 180.556 223.871 C 211.081 216.284 241.984 217.588 270.182 226.607 C 268.206 231.044 266.28 235.498 264.46 239.965 C 238.34 304.063 203.428 432.263 291.812 466.148 C 325.456 479.047 358.041 461.053 375.208 431.476 C 393.821 399.407 394.324 359.168 382.67 324.639 C 366.411 276.475 329.421 239.342 284.292 221.241 C 318.061 150.206 370.202 94.629 433.086 47.947 C 434.652 46.786 435.15 45.144 434.99 43.605 C 437.455 43.364 439.934 43.169 442.434 43.008 C 431.537 63.682 419.474 84.453 411.473 106.207 C 409.658 111.147 416.946 113.625 419.594 109.629 C 433.838 88.128 444.063 63.023 455.686 39.996 C 457.345 36.69 455.356 31.973 451.187 32.182 Z M 360.733 300.334 C 377.811 330.361 385.434 366.951 376.61 400.822 C 365.94 441.781 327.036 476.427 284.871 451.054 C 213.533 408.128 253.255 290.229 280.109 230.154 C 313.228 243.205 341.907 267.242 360.733 300.334 Z"
				/>
			</motion.g>
		</svg>
	);
};
