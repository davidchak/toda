import { BaseModelSystemType, BaseModelDatetimeType } from "shared/types/baseEntity";
import { TaskStatusEnum } from "shared/types/task";


export interface ITaskModel extends BaseModelSystemType, BaseModelDatetimeType {
	title: string,
	description: string,
	status: TaskStatusEnum,
	// owner: IUserModel | null,
}

export class TaskModel implements ITaskModel {
	id!: string;
	type!: string;
	title!: string;
	description!: string;
	status!: TaskStatusEnum;
	// owner!: IUserModel | null;
	createdAt!: Date;
	updatedAt!: Date | null;
	completedAt!: Date | null;
}

// TODO: переписать dto на глобальные
export type CreateTaskDTO = Omit<ITaskModel, keyof BaseModelSystemType | keyof BaseModelDatetimeType >;
// TODO: переписать dto на глобальные
export type DeleteTaskDTO = Pick<ITaskModel & BaseModelSystemType, "id" >;
// TODO: переписать dto на глобальные
export type UpdateTaskDTO = Required<Pick<BaseModelSystemType, "id">> & Partial<Omit<ITaskModel, keyof BaseModelSystemType | keyof BaseModelDatetimeType >>

export type FilterTaskDTO = {
	status: TaskStatusEnum & null
}

export interface ITaskListFilter {
	status: TaskStatusEnum & null,
}
