interface BaseStats {
	name: string
	ab: number
	r: number
	h: number
	hr: number
	"3b": number
	"2b": number
	k: number
	pa: number
	xob: number
	stb: number
}

export interface TeamHittingClass extends BaseStats {
	po: number
	innings: number
}

export interface TeamPitchingClass extends BaseStats {
	bi: number
}

export interface IndividualHittingClass extends BaseStats {
	gp: number
}

export interface IndividualPitchingClass extends BaseStats {
	bb: number
	po: number
	ap: number
	w: number
	l: number
	s: number
	innings: number
}
