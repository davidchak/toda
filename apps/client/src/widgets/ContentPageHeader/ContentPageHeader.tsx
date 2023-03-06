import { useCallback, useState } from "react";
import { v4 } from "uuid";
import { Layout } from "@consta/uikit/Layout";
import { Button } from "@consta/uikit/Button";
import { FieldGroup } from "@consta/uikit/FieldGroup";
import { TextField } from "@consta/uikit/TextField";
import { IconAdd } from "@consta/uikit/IconAdd";
import { IconFilter } from "@consta/uikit/IconFilter";
import { IconSearch } from "@consta/uikit/IconSearch";
import { IconSettings } from "@consta/uikit/IconSettings";
import { addNewTaskAsync } from "features/Task";
import { debounce } from "lodash";

export interface IContentPageHeaderProps { 
	page: string
}

export const ContentPageHeader = ({ page }: IContentPageHeaderProps) => {
	const [searchInput, setSearchInput ] = useState<string|null>(null);

	// TODO: переписать на открытие модалки для создания задачи
	const handleClick = async () => {
		const ch = v4();
		await addNewTaskAsync({
			title: `Task title ${ch}`,
			description: `Task description ${ch}`,
			done: false,
			owner: null
		})
	}

	// TODO: переименовать и изменить логику на установку фильтра списка задач после добавления фильтра к стору задач
	const handleDebounceFn = (input: string|null) => {
		console.log(input)
	}

	const debounceFn = useCallback(debounce(handleDebounceFn, 300), []);

	const onSearchInputChange = async ({ value }: { value: string | null }) => {
		setSearchInput(value);
		debounceFn(value);
	} 

	return (<Layout style={{ height: "64px", gap: "64px", paddingLeft: "10px", paddingRight: "10px", alignItems: "center" }} >
		<div style={{ fontSize: "28px", fontWeight: "500" }}>{ page.toUpperCase() }</div>
		
		<Layout style={{ gap: "32px" }} flex={1}>
			<Button label="Создать" iconRight={IconAdd} size="m" onClick={ handleClick }/>
			
			<FieldGroup form="default" size="m">
				{/* TODO: описать открытие модалки с фильтрами (группа/проект/ответственный/статус выполнения) */}
				<Button label="Button" onlyIcon size="m" view="ghost" form="default" iconRight={IconFilter}/>
				<TextField style={{ width: "450px" }} value={searchInput} onChange={onSearchInputChange} placeholder="Поиск" size="m" />
				{/* TODO: описать функционал установки */}
				<Button style={{ minWidth: "100px" }} label="Button" onlyIcon size="m" view="primary" form="default" iconRight={IconSearch}/>
			</FieldGroup> 
		</Layout>
		
		{/* TODO: добавить финкционал открытия модалки/страницы настроек задач (шаблоны/поля для отображения...) */}
		<Button label="Button" onlyIcon size="m" view="ghost" form="default" iconRight={IconSettings}/>
	</Layout>)
}