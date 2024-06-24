import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { useStore } from "zustand";
import { ITaskModel }  from "../model";

export interface ITaskListState {
	taskList: ITaskModel[],
	taskFilters: {
		byStatus: ITaskModel["status"] | null,
	}
}

export const taskStore = createStore<ITaskListState>()(
	persist(
		(set, get) => ({
			taskList: [],
			taskFilters: {
				byStatus: null
			}
		})
		, {
			name: 'task-store'
		}
	)
)

