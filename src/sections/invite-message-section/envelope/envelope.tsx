import React, { useState } from "react";
import styles from "./envelope.module.css";
import { Flex } from "../../../components/view";

interface EnvelopeProps {
	children: React.ReactNode | React.ReactNode[];
	style?: React.CSSProperties;
	onOpenChange?: (opened: boolean) => void;
}

export const Envelope = ({ children, style, onOpenChange }: EnvelopeProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
		onOpenChange?.(!isOpen);
	};

	return (
		<div className={styles.envelopeWrapper} style={style}>
			<div
				className={`${styles.envelope} ${isOpen ? styles.open : styles.close}`}
				onMouseDown={handleClick}
			>
				<div className={`${styles.front} ${styles.flap}`} />
				<div className={`${styles.front} ${styles.pocket}`} />

				<Flex className={styles.letter} height={"90%"} width={"90%"} p={"s6"}>
					{children}
				</Flex>

				<div className={styles.hearts}>
					<div className={`${styles.heart} ${styles.a1}`} />
					<div className={`${styles.heart} ${styles.a2}`} />
					<div className={`${styles.heart} ${styles.a3}`} />
				</div>
			</div>
		</div>
	);
};
