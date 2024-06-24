import { Bus } from "shared/bus";

export const TASK_ROOT_TOPIC = "TASK_TOPIC";
export const TASK_CREATE_TOPIC = "TASK_TOPIC.CREATE";
export const TASK_UPDATE_TOPIC = "TASK_TOPIC.UPDATE";
export const TASK_DELETE_TOPIC = "TASK_TOPIC.DELETE";

const TaskRootTopic = new Bus(TASK_ROOT_TOPIC);
const TaskCreateTopic = new Bus(TASK_CREATE_TOPIC);
const TaskUpdateTopic = new Bus(TASK_UPDATE_TOPIC);
const TaskDeleteTopic = new Bus(TASK_DELETE_TOPIC);

export {
	TaskRootTopic,
	TaskCreateTopic,
	TaskUpdateTopic,
	TaskDeleteTopic
}