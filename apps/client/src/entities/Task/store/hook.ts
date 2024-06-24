import { useStore } from "zustand";
import { taskStore } from "./store";

// React hook
// TODO: переписать на использование через селекторы
export const useTaskListStore = () => {
	const { taskList, taskFilters } = useStore(taskStore);

	const filteredTaskList = taskList
		.filter(task => {
			return taskFilters.byStatus 
				? task.status === taskFilters.byStatus 
				: task
		})

	return {
		filteredTaskList,
		taskList,
		taskFilters,
	}
}