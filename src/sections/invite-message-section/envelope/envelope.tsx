import React, { useState } from "react";
import styles from "./envelope.module.css";
import { Flex } from "../../../components/view";

interface EnvelopeProps {
	children: React.ReactNode | React.ReactNode[];
}

export const Envelope = ({ children }: EnvelopeProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className={styles.envelopeWrapper}>
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
