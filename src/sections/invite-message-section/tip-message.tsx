import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Flex, Text } from "../../components/view";
import { theme } from "../../theme";

const TipMessageContainer = styled(Flex)`
	width: 100%;
`;

export const TipMessage = () => {
	return (
		<TipMessageContainer direction={"column"} alignItems={"center"} gap={"s8"}>
			<motion.div
				initial={{ opacity: 0, translateY: -50 }}
				animate={{ opacity: 1, translateY: 0 }}
				exit={{ opacity: 0, translateY: -50 }}
				transition={{
					duration: 0.5,
					ease: "easeInOut",
				}}
			>
				<Text fontSize={"s8"} color={theme.palette.primary.contrastText}>
					Открой конверт...
				</Text>
			</motion.div>
		</TipMessageContainer>
	);
};
