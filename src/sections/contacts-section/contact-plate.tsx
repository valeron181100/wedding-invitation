import type { IconButtonProps } from "@mui/material";
import { IconButton } from "@mui/material";
import React from "react";

interface ContactPlateProps extends Pick<IconButtonProps, "size"> {
	to: string;
	children?: React.ReactNode;
}

export const ContactPlate = ({ to, children, ...rest }: ContactPlateProps) => {
	const isPhone = /^[\d\s\-\\+()]+$/.test(to.trim());

	const isUrl = /^(https?:\/\/|www\.)/i.test(to.trim());

	const getHref = () => {
		if (isPhone) {
			return `tel:${to.replace(/\s/g, "")}`;
		}
		if (isUrl) {
			return to.startsWith("http") ? to : `https://${to}`;
		}
		return to;
	};

	const href = getHref();

	return (
		<IconButton {...rest} href={href}>
			{children}
		</IconButton>
	);
};
