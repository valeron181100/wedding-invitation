import { ThemeProvider } from "@emotion/react";
import { SnackbarProvider } from "notistack";
import { useEffect, useRef, useState } from "react";
import { Body } from "./layout";
import { MainSection } from "./sections/main-section/main-section";
import { theme } from "./theme";
import { InviteMessageSection } from "./sections/invite-message-section/invite-message-section";
import { WeddingCeremonyInvitationSection } from "./sections/wedding-ceremony-invitation-section/wedding-ceremony-invitation-section";
import { CelebratingInvitationSection } from "./sections/celebrating-invitation-section/celebrating-invitation-section";
import { FormSection } from "./sections/form-section/form-section";
import { ByeSection } from "./sections/bye-section/bye-section";
import ScrollTip from "./components/view/scroll-tip/scroll-tip";
import { ContactsSection } from "./sections/contacts-section/contacts-section";

const App = () => {
	const bodyRef = useRef<HTMLDivElement>(null);

	const [showScrollTip, setShowScrollTip] = useState(() => {
		return localStorage.getItem("hasSeenScrollTip") !== "true";
	});

	useEffect(() => {
		const scrollElement = bodyRef.current;

		if (!scrollElement || !showScrollTip) return;

		const handleScroll = () => {
			if (scrollElement.scrollTop > window.innerHeight - 100) {
				localStorage.setItem("hasSeenScrollTip", "true");
				setShowScrollTip(false);
			}
		};

		scrollElement.addEventListener("scroll", handleScroll);

		// eslint-disable-next-line consistent-return
		return () => {
			scrollElement.removeEventListener("scroll", handleScroll);
		};
	}, [showScrollTip]);

	return (
		<ThemeProvider theme={theme}>
			<SnackbarProvider maxSnack={1}>
				<Body ref={bodyRef}>
					<ScrollTip visible={showScrollTip} />
					<MainSection />
					<InviteMessageSection />
					<WeddingCeremonyInvitationSection />
					<CelebratingInvitationSection />
					<FormSection />
					<ContactsSection />
					<ByeSection />
				</Body>
			</SnackbarProvider>
		</ThemeProvider>
	);
};

export default App;
