import { Layout } from "@consta/uikit/Layout";
import { useTaskListStore, TaskRow } from "entities/Task";

// TODO: Заменить на таблицу
// TODO: Добавить пагинацию 
export const TaskList = () => {
	const { filteredTaskList } = useTaskListStore();

	return (<Layout direction="column" style={{
			overflowX: "scroll", 
			background: "rgba(247, 248, 249, .2)", 
			border: "2px solid rgba(247, 248, 249, .2)", 
			backdropFilter: "blur(20px)",  
			borderRadius: "8px 8px 0 0", 
			height: "inherit", 
			flex: "1 0" 
		}}>
		{ filteredTaskList.map(task => <TaskRow key={ task.id } task={ task } />) }
	</Layout>)
}