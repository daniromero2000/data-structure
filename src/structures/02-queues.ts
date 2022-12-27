export class Queue {
    constructor() {
        this.queue = [];
    }

    // Agrega a la cola
    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    // Elimina de la cola
    dequeue() {
        return this.queue.shift();
    }

    // Retorna el primero de la cola
    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        return this.queue;
    }
}


const queue = new Queue();
console.log(queue.enqueue('The Rock')); // ['The Rock']
console.log(queue.enqueue('John Cena')); // ['The Rock', 'John Cena']
console.log(queue.enqueue('Stone Cold Steve Austin')); // ['The Rock', 'John Cena', 'Stone Cold Steve Austin']
console.log(queue.dequeue()); // 'The Rock'
console.log(queue.peek()); // 'John Cena'
console.log(queue.isEmpty()); // false
console.log(queue.print()); // ['John Cena', 'Stone Cold Steve Austin']
console.log(queue);