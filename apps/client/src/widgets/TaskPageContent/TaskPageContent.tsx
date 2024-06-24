import { Layout } from "@consta/uikit/Layout"
import { TaskList } from "features/TaskList";
import { TaskListFilter } from "features/TaskListFilter";
import { TaskViewFilter } from "features/TaskViewFilter";


export const TaskPageContent = () => {
	return (
		<Layout direction="column" flex={1} style={{ height: "inherit", gap: "8px" }}>
			<Layout style={{ height: "max-content", gap: "0 16px" }} flex={0}>
				<TaskViewFilter /> <TaskListFilter />
			</Layout>
			<Layout flex={1}>
				<TaskList />
			</Layout>
		</Layout>
	)
}