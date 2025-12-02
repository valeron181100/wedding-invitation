import { ThemeProvider } from "@emotion/react";
import { Body } from "./layout";
import { MainSection } from "./sections/main-section/main-section";
import { theme } from "./theme";
import { TestSecSection } from "./sections/test-sec-section";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Body>
				<MainSection />
				<TestSecSection />
			</Body>
		</ThemeProvider>
	);
};

export default App;
