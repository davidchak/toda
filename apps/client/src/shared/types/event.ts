// export type EventCallbackType<T> = (topic: string, data: T) => void
export type EventCallbackType<T> = PubSubJS.SubscriptionListener<T>

export type EventUnsubscribeType = () => void;
