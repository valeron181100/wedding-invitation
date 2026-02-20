import "./styles.css";
import { AnimatePresence, motion } from "framer-motion";

interface ScrollTipProps {
	visible: boolean;
}

const ScrollTip = ({ visible = false }: ScrollTipProps) => {
	const color = "#ffffff";

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="scroll-tip-container"
				>
					<p
						className="scroll-text"
						style={{
							color,
							whiteSpace: "nowrap",
						}}
					>
						Смахните вверх
					</p>
					<div className="scroll-arrow">
						<svg
							width="30"
							height="30"
							viewBox="0 0 24 24"
							stroke={color}
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							style={{
								transform: "scale(2.5)",
								rotate: "180deg",
								filter: "drop-shadow( 0px 0px 2px rgba(0, 0, 0, .7))",
							}}
						>
							<path d="M7 13l5 5 5-5M7 6l5 5 5-5" fill={"transparent"} />
						</svg>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ScrollTip;
