import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FancyArrowAnimated, Flex, Text } from "../../components/view";
import { theme } from "../../theme";

const TipMessageContainer = styled(Flex)`
	position: absolute;
	margin-top: 65vh;
	margin-left: -40%;
	overflow: hidden;
`;

export const TipMessage = () => {
	return (
		<TipMessageContainer
			width={"500px"}
			height={"300px"}
			direction={"column"}
			alignItems={"center"}
		>
			<Flex width={"50%"}>
				<FancyArrowAnimated rotation={-30} scale={0.7} />
			</Flex>
			<motion.div
				style={{
					marginLeft: "90%",
					marginTop: "-15%",
					width: "100%",
				}}
				initial={{ opacity: 0, translateY: -50 }}
				animate={{ opacity: 1, translateY: 0 }}
				exit={{ opacity: 0, translateY: -50 }}
				transition={{
					duration: 0.5,
					ease: "easeInOut",
				}}
			>
				<Text fontSize={"s8"} color={theme.colors.text.titleWarm}>
					Открой конверт...
				</Text>
			</motion.div>
		</TipMessageContainer>
	);
};
