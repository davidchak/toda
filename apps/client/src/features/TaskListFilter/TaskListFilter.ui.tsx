import { useState, useEffect } from 'react';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { TaskStatusEnum } from 'shared/types/task';
import { useTaskListStore, taskActions } from "entities/Task";

type FilterItemType = {
	label: string,
	filter: TaskStatusEnum | null,
};

const filterItems: FilterItemType[] = [
	{ label: 'Все', filter: null }, 
	{ label: 'В работе', filter: TaskStatusEnum.inWork },
	{ label: 'В ожидании', filter: TaskStatusEnum.pending },
	{ label: 'Завершено', filter: TaskStatusEnum.done },
];

export const TaskListFilter = () => {
	const [value, setValue] = useState<FilterItemType | null>(filterItems[0]);
	const { taskFilters } = useTaskListStore();
	const { setTaskFilterAsync  } = taskActions;

	const onValueChange = async ({ value }: { value: FilterItemType }) => {
		setValue(value);
		await setTaskFilterAsync({ status: value.filter });
	}

	useEffect(() => {
		setValue(value);
	},[taskFilters])

  return (
    <ChoiceGroup
			form="round"
      value={value}
			size='s'
      onChange={onValueChange}
      items={filterItems}
      getItemLabel={(item) => item.label}
      multiple={false}
      name="ChangeTaskListFilter"
			style={{
				background: "rgba(247, 248, 249, .2)",
				border: "2px solid rgba(247, 248, 249, .2)",
				backdropFilter: "blur(20px)", 
			}}
    />
  );
}