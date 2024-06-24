import { v4 } from "uuid";
import { ITaskModel, TaskModel } from "../model";
import { TaskStatusEnum } from "shared/types/task";
import { TaskCreateTopic, TaskDeleteTopic } from "../bus";
import { plainToInstance } from "class-transformer";
import { ITaskListState } from "../store/store";
import { StoreApi } from "zustand";


// TODO: Добавить вызов api
// TODO: Добавить вызов eventBus
export const TaskActions = (taskStore: StoreApi<ITaskListState>) => {

	const createTaskAsync = async () => {
		const prevState = taskStore.getState().taskList;

		const ch = v4();
		const newTask = plainToInstance(TaskModel, {
			title: `Task title ${ch}`,
			description: `Task description ${ch}`,
			status: TaskStatusEnum.pending,
			owner: null
		})
		
		taskStore.setState({
			taskList: [...prevState, newTask]
		})
	
		TaskCreateTopic.emit(newTask);

		return Promise.resolve(newTask);
	};

	const deleteTaskAsync = async ({ id }: Pick<ITaskModel, "id">) => {
		const prevState = taskStore.getState().taskList;
		
		taskStore.setState({
			taskList: prevState.filter(task => task.id !== id)
		})

		// TODO: Проверить что задача удалилась
		TaskDeleteTopic.emit({ id })

		return Promise.resolve(true);
	}

	// TODO: Дописать функционал
	// const updateTaskAsync 

	const setTaskFilterAsync = (payload: { status: ITaskModel["status"] | null }) => {
		taskStore.setState({
			taskFilters: { 
				byStatus: payload.status
			}
		})

		// TODO: Выпихнуть событие в шину

		return Promise.resolve(true);
	}

	return {
		createTaskAsync,
		deleteTaskAsync,
		setTaskFilterAsync
	}

}