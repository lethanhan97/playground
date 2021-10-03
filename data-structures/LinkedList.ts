interface IDataNode<T> {
  data: T;
  next: IDataNode<T> | null;
}

interface IQueue<T> {
  enqueue(data: T): void;
  dequeue(): T | null;
  peek(): T | null;
}

interface IStack<T> {
  push(data: T): void;
  pop(): T | null;
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
    this._dataNodeFactory = new DataNodeFactory<T>();
  }

  enqueue(data: T) {
    const node = this._dataNodeFactory.createDataNode(data);

    if (!this._tail) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }

    this._size++;
  }

  dequeue() {
    if (!this._head) return null;
    const node = this._head;
    this._head = this._head.next;
    this._size--;

    if (this._size === 0) {
      this._tail = null;
    }

    return node.data;
  }

  peek() {
    if (!this._head) return null;
    return this._head.data;
  }

  print() {
    if (!this._head) {
      console.log('No data...');
    } else {
      let curNode: IDataNode<T> | null = this._head;
      let strResult = '';

      while (curNode) {
        strResult += `${String(curNode.data)}-`;
        curNode = curNode.next;
      }

      strResult += 'NULL';
      console.log(strResult);
    }
  }
}

class Stack<T> implements IStack<T> {
  private _size: number;
  private _tail: IDataNode<T> | null;
  private _dataNodeFactory: DataNodeFactory<T>;

  constructor() {
    this._size = 0;
    this._tail = null;
    this._dataNodeFactory = new DataNodeFactory<T>();
  }

  push(data: T) {
    const node = this._dataNodeFactory.createDataNode(data);

    if (this._size === 0) {
      this._tail = node;
    } else {
      node.next = this._tail;
      this._tail = node;
    }

    this._size++;
  }

  pop() {
    if (!this._tail) return null;

    const node = this._tail;
    this._tail = node.next;
    this._size--;

    return node.data;
  }

  peek() {
    if (!this._tail) return null;
    return this._tail.data;
  }

  print() {
    if (!this._tail) {
      console.log('No data');
    } else {
      let curNode: IDataNode<T> | null = this._tail;
      while (!!curNode) {
        console.log(curNode.data);
        curNode = curNode.next;
      }
    }
  }
}

const printDivider = () => console.log('===========');

const stackDemo = () => {
  const stringStack = new Stack<string>();
  stringStack.push('world');
  stringStack.push('hello');
  stringStack.push('An');
  stringStack.push('is');
  stringStack.push('name');
  stringStack.push('my');

  stringStack.print();

  printDivider();

  stringStack.pop();
  stringStack.print();
};

const queueDemo = () => {
  const stringQueue = new Queue<string>();

  stringQueue.enqueue('hello');
  stringQueue.enqueue('world');
  stringQueue.enqueue('my');
  stringQueue.enqueue('name');
  stringQueue.enqueue('is');
  stringQueue.enqueue('An');

  stringQueue.print();

  printDivider();

  stringQueue.dequeue();
  stringQueue.dequeue();

  stringQueue.print();
};

queueDemo();
