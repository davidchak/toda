import { useState } from 'react';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
// import { } from "entities/Task";
import { TaskStatusEnum } from 'shared/types/task';

type FilterItemType = {
	label: string,
	filter: 'list' | 'kanban' | 'calendar' | 'gant',
};

const filterItems: FilterItemType[] = [
	{ label: 'Список', filter: 'list' }, 
	{ label: 'Канбан', filter: 'kanban' },
	{ label: 'Календарь', filter: 'calendar' },
	{ label: 'Гант', filter: 'gant' },
];

export const TaskViewFilter = () => {
	const [value, setValue] = useState<FilterItemType | null>(filterItems[0]);

	// TODO: Доделать переключение на другое отображение
	const onValueChange = ({ value }: { value: FilterItemType }) => {
		setValue(value);
	}

  return (
    <ChoiceGroup
			form="round"
			size='s'
      value={value}
      onChange={onValueChange}
      items={filterItems}
      getItemLabel={(item) => item.label}
      multiple={false}
			style={{
				background: "rgba(247, 248, 249, .2)",
				border: "2px solid rgba(247, 248, 249, .2)",
				backdropFilter: "blur(20px)", 
			}}
      name="ChangeTaskViewLFilter"
    />
  );
}