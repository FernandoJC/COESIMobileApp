
export class EncuestaNSE {
	id: number
	vivienda: Vivienda
	preguntas: Pregunta[]
	clasificacion: Clasificacion
}

export class Vivienda {
	id: number
	direccion: string
	zona: string
}

export class Pregunta {
	id: number
	pregunta: string
	respuesta: Respuesta
}

export class Respuesta {
	id: number
	respuesta: string
	valor: number
}

export class Clasificacion {
	id: number
	escala: string
	sigla: string
	valor: number
}