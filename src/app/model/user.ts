export class User {
    private _id: string;
    private _name: string;
    private _picture: string;
    constructor() {
        
    }
    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter picture
     * @return {string}
     */
	public get picture(): string {
		return this._picture;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter picture
     * @param {string} value
     */
	public set picture(value: string) {
		this._picture = value;
	}


}