import React from "react";

export const ArrowIcon = (
	props: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>,
) => {
	return (
		<div {...props}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
				<g
					xmlns="http://www.w3.org/2000/svg"
					transform="matrix(4.193305, 0, 0, 4.193305, -2372.339111, -2551.766357)"
					style={{
						fill: "#5c0607",
					}}
				>
					<path d="M597.975,727c-1.928,0.001-3.856-0.735-5.327-2.206c-2.942-2.942-2.942-7.712,0-10.654     l46.14-46.14l-46.14-46.14c-2.942-2.942-2.942-7.712,0-10.654c2.942-2.942,7.712-2.942,10.654,0l51.467,51.467     c1.413,1.413,2.206,3.329,2.206,5.327c0,1.998-0.793,3.914-2.206,5.327l-51.467,51.466C601.831,726.265,599.903,727,597.975,727z     " />
				</g>
			</svg>
		</div>
	);
};
