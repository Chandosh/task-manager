import { User } from "./user";

export class UserList {
    private _status: string;
    private _users: Array<User>;
    constructor() {
        this._users = [];
    }

    /**
     * Getter status
     * @return {string}
     */
	public get status(): string {
		return this._status;
	}

    /**
     * Getter users
     * @return {Array<User>}
     */
	public get users(): Array<User> {
		return this._users;
	}

    /**
     * Setter status
     * @param {string} value
     */
	public set status(value: string) {
		this._status = value;
	}

    /**
     * Setter users
     * @param {Array<User>} value
     */
	public set users(value: Array<User>) {
		this._users = value;
	}

}
