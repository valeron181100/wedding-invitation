import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import type { SvgIconOwnProps } from "@mui/material";
import { IconButton } from "@mui/material";
import { SwiperSlide } from "swiper/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/pagination";
import { Swiper } from "swiper";
import { StyledSwiper } from "./styled-swiper";
import { Flex } from "../flex";

interface SliderProps {
	children?: React.ReactNode | React.ReactNode[];
	pagination?: boolean;
	navigation?: boolean;
	navButtonsColor?: SvgIconOwnProps["color"];
	paginationColor?: string;
}

export const Slider = ({
	children,
	navButtonsColor = "primary",
	paginationColor,
	pagination = false,
	navigation = false,
}: SliderProps) => {
	const [control, setControl] = useState<Swiper | null>(null);

	return (
		<Flex gap={"s2"} alignItems={"center"}>
			{navigation && (
				<IconButton size={"large"} onClick={() => control?.slidePrev()}>
					<ArrowBackIosNewRoundedIcon color={navButtonsColor} />
				</IconButton>
			)}
			<StyledSwiper
				spaceBetween={30}
				pagination={pagination}
				paginationColor={paginationColor}
				modules={[Pagination]}
				onSwiper={setControl}
			>
				{Array.isArray(children)
					? children?.map((child) => <SwiperSlide>{child}</SwiperSlide>)
					: children}
			</StyledSwiper>
			{navigation && (
				<IconButton size={"large"} onClick={() => control?.slideNext()}>
					<ArrowForwardIosRoundedIcon color={navButtonsColor} />
				</IconButton>
			)}
		</Flex>
	);
};
