export class UpdateTask {

    private _message: string; 
    private _due_date: Date; 
    private _priority: number; 
    private _assigned_to: number;
    private _taskid: number;

    /**
     * Getter message
     * @return {string}
     */
	public get message(): string {
		return this._message;
	}

    /**
     * Getter due_date
     * @return {Date}
     */
	public get due_date(): Date {
		return this._due_date;
	}

    /**
     * Getter priority
     * @return {number}
     */
	public get priority(): number {
		return this._priority;
	}

    /**
     * Getter assigned_to
     * @return {number}
     */
	public get assigned_to(): number {
		return this._assigned_to;
	}

    /**
     * Getter taskid
     * @return {number}
     */
	public get taskid(): number {
		return this._taskid;
	}

    /**
     * Setter message
     * @param {string} value
     */
	public set message(value: string) {
		this._message = value;
	}

    /**
     * Setter due_date
     * @param {Date} value
     */
	public set due_date(value: Date) {
		this._due_date = value;
	}

    /**
     * Setter priority
     * @param {number} value
     */
	public set priority(value: number) {
		this._priority = value;
	}

    /**
     * Setter assigned_to
     * @param {number} value
     */
	public set assigned_to(value: number) {
		this._assigned_to = value;
	}

    /**
     * Setter taskid
     * @param {number} value
     */
	public set taskid(value: number) {
		this._taskid = value;
	}

}