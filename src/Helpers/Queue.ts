class Queue<K, V> {
    private _queue: Map<K, V>;
    private _queueKey: K[];
    private size: number;

    constructor(size: number) {
        this._queue = new Map<K, V>;
        this._queueKey = [];
        this.size = size;
    }

    push(key: K, item: V) {
        if (this._queue.size === this.size) {
            this._queue.delete(this._queueKey[0]);
            this._queueKey.shift();
        }

        this._queue.set(key, item);
        this._queueKey.push(key);
    }

    getValueByKey(key: K) {
        return this._queue.get(key);
    }
}

export default Queue;
