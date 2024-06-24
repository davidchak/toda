import { ITaskModel } from "../model";

export interface ITaskCardProps {
	task: ITaskModel,
}

// TODO: Реализовать html & css
export const TaskCard = ({ task }: ITaskCardProps) => {
	return (<div>{ JSON.stringify(task, null, 2) }</div>)
}