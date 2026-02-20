export interface GuestFormSchema {
	guests: Guest[];
	inviteAnswerId: string;
}

export interface Guest {
	fullName: string;
}
