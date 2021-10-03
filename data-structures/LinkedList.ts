interface IDataNode<T> {
  data: T;
  next: IDataNode<T> | null;
}

interface IQueue<T> {
  enqueue(data: T): void;
  dequeue(): T | null;
  peek(): T | null;
}

class DataNodeFactory<T> {
  createDataNode(data: T): IDataNode<T> {
    return {
      data,
      next: null,
    };
  }
}

class Queue<T> implements IQueue<T> {
  private _size: number;
  private _head: IDataNode<T> | null;
  private _tail: IDataNode<T> | null;
  private _dataNodeFactory: DataNodeFactory<T>;

  constructor() {
    this._head = this._tail = null;
    this._size = 0;
    this._dataNodeFactory = new DataNodeFactory();
  }

  enqueue(data: T) {
    const node = this._dataNodeFactory.createDataNode(data);

    if (this._size === 0) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }

    this._size++;
  }

  dequeue() {
    if (this._size === 0) return null;
    const node = this._head;
    this._head = this._head.next;
    this._size--;

    if (this._size === 0) {
      this._tail = null;
    }

    return node.data;
  }

  peek() {
    if (this._size === 0) return null;
    return this._head.data;
  }
}
