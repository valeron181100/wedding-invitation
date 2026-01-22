import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)<{ paginationColor?: string }>`
	width: 100%;
	height: 100%;

	.swiper-wrapper {
		${({ pagination }) => (pagination ? "padding-bottom: 30px;" : "")}
	}

	.swiper-pagination-bullet-active {
		opacity: 1;
		background: ${(props) =>
			props.paginationColor
				? props.paginationColor
				: props.theme.palette.primary.main};
	}
`;

export const SwiperNavButton = styled(IconButton)`
	z-index: 1;
`;
