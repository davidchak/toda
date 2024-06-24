/**
 * uuid токен
 */
export type UUIDTokenType = string;

/**
 * Базовый тип для всех entity
 */
export type BaseModelSystemType = {
	id: UUIDTokenType
	type: string
}

/**
 * Базовый тип с датами создания/обновления/завершения 
 */
export type BaseModelDatetimeType = {
	createdAt: Date,
	updatedAt: Date | null,
	completedAt?: Date | null
}

