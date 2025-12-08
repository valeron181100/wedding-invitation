import { ThemeProvider } from "@emotion/react";
import { Body } from "./layout";
import { MainSection } from "./sections/main-section/main-section";
import { theme } from "./theme";
import { TestSecSection } from "./sections/test-sec-section";
import { InviteMessageSection } from "./sections/invite-message-section/invite-message-section";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Body>
				<MainSection />
				<InviteMessageSection />
				<TestSecSection />
			</Body>
		</ThemeProvider>
	);
};

export default App;
