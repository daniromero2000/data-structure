/**
 * @class Node
 */
class Node {
    private data: any;
    private next: Node | null;

    /**
     * @constructor constructor de la clase
     * @param data {any} el dato que quieres que el nodo contenga
     */
    constructor(data: any) {
        this.data = data;
        this.next = null;
    }

    /**
     * @function getNext
     * @return null si el siguiente nodo es null o el siguiente nodo de la lista
     */
    public getNext(): Node | null {
        return this.next;
    }

    public getData(): any {
        return this.data;
    }

    public setNext(next: Node|null): void {
        this.next = next;
    }

    public setData(data: any): void {
        this.data = data;
    }

}

export default class LinkedList {
    private head: Node | null;

    /**
     * @constructor
     */
    constructor() {
        this.head = null;
    }

    /**
     * @function
     * @returns true si la lista esta vacia, false en caso contrario
     */
    public isEmpty(): boolean {
        return this.head === null;
    }

    /**
     * @function
     * @returns 0 si la lista esta vacia o el número correspondiente a la cantidad de elementos de la lista
     */
    public size(): number {
        if (this.isEmpty()) {
            return 0;
        }

        let i = 0;
        let aux = this.head;
        while (aux) {
            i++;
            aux = aux.getNext();
        }
        return i;
    }

    /**
     * @function addFirst
     * @param data {any}
     */
    public addFirst(data: any): void {
        if (!data) {
            throw new Error("El parametro data no puede ser null o undefined");
        } 

        if (this.isEmpty()) {
            this.head = new Node(data);
        } else {
            const node = new Node(data);
            node.setNext(this.head);
            this.head = node;
        }
    }

    /**
     * @function addLast
     * @param data {any}
     */
    public addLast(data: any): void {
        if (!data) {
            throw new Error("El parametro data no puede ser null o undefined");
        }

        if (this.isEmpty()) {
            this.head = new Node(data);
        } else {
            let aux = this.head;
            while (aux.getNext()) {
                aux = aux.getNext();
            }
            aux.setNext(new Node(data));
        }
    }

    /**
     * @function
     * @param data {any}
     * @param i {number}
     */
    public add(data: any, i: number): void {
        if (data && i) {
            if (this.isEmpty() || i === 0) {
                this.addFirst(data);
            } else if (i === this.size() - 1) {
                this.addLast(data);
            } else if (i > this.size()) {
                throw new Error("El parametro indice (i) no puede ser más grande que el tamaño de la lista");
            } else if (i < 0) {
                this.add(data, this.size() + i);
            } else {
                let j = 0;
                let aux = this.head;
                const node = new Node(data);
                while (i < j) {
                    aux = aux.getNext();
                    j++;
                }
                node.setNext(aux.getNext());
                aux.setNext(node);
            }
        } else if (data) {
            throw new Error("El parametro indice (i) no puede ser null o undefined");
        } else if (i) {
            throw new Error("El parametro data no puede ser null o undefined");
        } else {
            throw new Error("Los dos parametros no pueden ser null o undefined");
        }
    }

    /**
     * @function
     * @returns
     */
    public deleteFirst(): any {
        if (this.isEmpty()) {
            return null;
        } else {
            const temp = this.head;
            this.head = this.head.getNext();
            temp.setNext(null);
            return temp.getData();
        }
    }

    /**
     * @function
     * @returns
     */
    public deleteLast(): any {
        if (this.isEmpty()) {
            return null;
        } else {
            let aux = this.head;
            while (aux.getNext().getNext()) {
                aux = aux.getNext();
            }
            const temp = aux.getNext();
            aux.setNext(null);
            return temp.getData();
        }
    }

    /**
     * @function
     * @param i {number}
     * @returns
     */
    public delete(i: number): any {
        if (i) {
            if (this.isEmpty() || i === 0) {
                return this.deleteFirst();
            } else if (i === this.size() - 1) {
                return this.deleteLast();
            } else if (i > this.size()) {
                throw new Error("El parametro indice (i) no puede ser más grande que el tamaño de la lista");
            } else if (i < 0) {
                return this.delete(this.size() + i);
            } else {
                let j = 0;
                let aux = this.head;
                while (i < j) {
                    aux = aux.getNext();
                    j++;
                }
                const temp = aux.getNext();
                aux.setNext(aux.getNext().getNext());
                temp.setNext(null);
                return temp.getData();
            }
        } else {
            throw new Error("El parametro indice (i) no puede ser null o undefined");
        }
    }

    /**
     * @function
     * @returns
     */
    public toArray(): any[] {
        let node = this.head;
        const array = new Array(this.size());
        for (let i = 0; i < array.length; i++) {
            array[i] = node.getData();
            node = node.getNext();
        }
        return array;
    }

    /**
     * @function
     * @param cb {function} a callback function
     */
    public forEach(cb: any): void {
        const list = this;
        const size = this.size();
        let node = this.head;
        for (let i = 0; i < size; i++) {
            cb(node.getData(), i, list);
            node = node.getNext();
        }
    }

}
