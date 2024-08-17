interface Person {
	name: string;
}

interface Lifespan {
	birth: Date;
	death?: Date;
}

type PersonSpan = Person & Lifespan;

type K = keyof (Person & Lifespan);
