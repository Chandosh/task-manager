export class Task {
    private _assigned_name: string;
    private _assigned_to: string;
    private _created_on: string;
    private _due_date: string;
    private _id: string;
    private _message: string;
    private _priority: string;

    /**
     * Getter assigned_name
     * @return {string}
     */
	public get assigned_name(): string {
		return this._assigned_name;
	}

    /**
     * Getter assigned_to
     * @return {string}
     */
	public get assigned_to(): string {
		return this._assigned_to;
	}

    /**
     * Getter created_on
     * @return {string}
     */
	public get created_on(): string {
		return this._created_on;
	}

    /**
     * Getter due_date
     * @return {string}
     */
	public get due_date(): string {
		return this._due_date;
	}

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter message
     * @return {string}
     */
	public get message(): string {
		return this._message;
	}

    /**
     * Getter priority
     * @return {string}
     */
	public get priority(): string {
		return this._priority;
	}

    /**
     * Setter assigned_name
     * @param {string} value
     */
	public set assigned_name(value: string) {
		this._assigned_name = value;
	}

    /**
     * Setter assigned_to
     * @param {string} value
     */
	public set assigned_to(value: string) {
		this._assigned_to = value;
	}

    /**
     * Setter created_on
     * @param {string} value
     */
	public set created_on(value: string) {
		this._created_on = value;
	}

    /**
     * Setter due_date
     * @param {string} value
     */
	public set due_date(value: string) {
		this._due_date = value;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter message
     * @param {string} value
     */
	public set message(value: string) {
		this._message = value;
	}

    /**
     * Setter priority
     * @param {string} value
     */
	public set priority(value: string) {
		this._priority = value;
	}

}