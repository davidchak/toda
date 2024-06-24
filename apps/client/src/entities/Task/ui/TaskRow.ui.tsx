import { ITaskModel } from "../model";

export interface ITaskRowProps {
	task: ITaskModel,
}

// TODO: Реализовать html & css
export const TaskRow = ({ task }: ITaskRowProps) => {
	return (<div>{ JSON.stringify(task, null, 2) }</div>)
}
