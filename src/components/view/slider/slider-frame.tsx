import styled from "@emotion/styled";
import { Flex, type FlexProps } from "../flex";

export const SliderFrame = styled((props: Omit<FlexProps, "p">) => (
	<Flex {...props} p={"s1"} />
))``;
