import { Task } from "./task";

export class TaskList {
    private _status: string;
    private _tasks: Array<Task>;
    constructor() {
        this.tasks  = [];
    }

    /**
     * Getter status
     * @return {string}
     */
	public get status(): string {
		return this._status;
	}

    /**
     * Getter tasks
     * @return {Array<Task>}
     */
	public get tasks(): Array<Task> {
		return this._tasks;
	}

    /**
     * Setter status
     * @param {string} value
     */
	public set status(value: string) {
		this._status = value;
	}

    /**
     * Setter tasks
     * @param {Array<Task>} value
     */
	public set tasks(value: Array<Task>) {
		this._tasks = value;
	}

}