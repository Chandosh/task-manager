export class DeleteTask {
    private _taskid: number;

    /**
     * Getter taskid
     * @return {number}
     */
	public get taskid(): number {
		return this._taskid;
	}

    /**
     * Setter taskid
     * @param {number} value
     */
	public set taskid(value: number) {
		this._taskid = value;
	}

}