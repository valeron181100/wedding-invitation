import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";
import { castToEnum } from "../components/lib/cast-to-enum";

export interface AppSettings {
	people: number;
	version: AppVersion;
	isCelebrationOnly: boolean;
}

export enum AppVersion {
	EVERYWHERE = "oak",
	CELEBRATION_ONLY = "fir",
}

export const AppSettingsContext = createContext<AppSettings | undefined>(
	undefined,
);

export const AppSettingsProvider = ({ children }: { children: ReactNode }) => {
	const settings = useMemo(() => {
		const params = new URLSearchParams(window.location.search);

		const peopleParam = params.get("people");
		const verParam = params.get("ver");

		const isCelebrationOnly = verParam === AppVersion.CELEBRATION_ONLY;

		const peopleParamParsed = peopleParam !== null ? Number(peopleParam) : null;

		return {
			people:
				peopleParamParsed !== null && !Number.isNaN(peopleParamParsed)
					? peopleParamParsed
					: null,
			isCelebrationOnly,
			version: verParam ? castToEnum(AppVersion, verParam) : null,
		};
	}, []);

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

	if (!settings.version) {
		// eslint-disable-next-line no-alert
		alert("Параметр 'ver' не найден или указан неверно");
		return null;
	}

	const contextParam: AppSettings = {
		version: settings.version,
		people: settings.people,
		isCelebrationOnly: settings.isCelebrationOnly,
	};

	return (
		<AppSettingsContext.Provider value={contextParam}>
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
