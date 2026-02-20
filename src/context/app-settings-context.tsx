import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";

interface AppSettings {
	people: number | null;
	ver: string | null;
}

export const AppSettingsContext = createContext<AppSettings | undefined>(
	undefined,
);

export const AppSettingsProvider = ({ children }: { children: ReactNode }) => {
	const settings = useMemo<AppSettings>(() => {
		const params = new URLSearchParams(window.location.search);

		const peopleParam = params.get("people");
		const verParam = params.get("ver");

		return {
			people: peopleParam !== null ? Number(peopleParam) : null,
			ver: verParam,
		};
	}, []); // runs once on mount, never changes

	if (settings.people === null) {
		// eslint-disable-next-line no-alert
		alert("Параметр 'people' не найден");
		return null;
	}

	if (settings.people > 5 || settings.people < 1) {
		// eslint-disable-next-line no-alert
		alert("Параметр 'people' должен быть строго больше 0 и строго меньше 6");
		return null;
	}
	return (
		<AppSettingsContext.Provider value={settings}>
			{children}
		</AppSettingsContext.Provider>
	);
};

export const useAppSettings = (): AppSettings => {
	const context = useContext(AppSettingsContext);
	if (!context) {
		throw new Error(
			"useAppSettings must be used within an AppSettingsProvider",
		);
	}
	return context;
};
