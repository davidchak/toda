import PubSub from "pubsub-js";
import { v4 } from "uuid";


export interface IBusMessage<T> {
	uid: string;
	timestamp: string;
	payload: T;
}

/**
 * Базовый абстрактный класс шины событий
 */
export class Bus {
	private _token: PubSubJS.Token;
	private _instance: PubSubJS.Base;

	constructor(token: PubSubJS.Token){
		this._token = token;
		this._instance = PubSub;
	}

	get token(){
		return this._token;
	}

	public subscribe<T>(cb: PubSubJS.SubscriptionListener<IBusMessage<T>|undefined>){
		const unsubscribeToken = this._instance.subscribe(this._token, cb);
		return () => this._instance.unsubscribe(unsubscribeToken);
	}

	public emit<T>(payload: T){
		const message: IBusMessage<T> = {
			uid: v4(),
			timestamp: new Date().toUTCString(),
			payload,
		}
		this._instance.publish(this._token, message);
	}
}