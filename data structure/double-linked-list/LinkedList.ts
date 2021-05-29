import { Nodes } from "./Nodes";

export class LinkedList {
    head: Nodes = null;
    tail: Nodes = null;

    public append(value: any):void {
        let newNode: Nodes = new Nodes(null, null, value);
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        } 
        let currentNode: Nodes = this.head;
        while(currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }
        newNode.previousNode = currentNode;
        currentNode.nextNode = newNode;
        this.tail = newNode;
    }

    public deleteFirst(value: any): void {
        let currentNode: Nodes = this.head;
        while(currentNode.nextNode != null) {
            if(currentNode.value === value) {
                currentNode.previousNode.nextNode = currentNode.nextNode;
                currentNode.nextNode.previousNode = currentNode.previousNode;
                return;
            }
            currentNode = currentNode.nextNode;
        }
    }

    public deleteLast(value: any) {
        let currentNode = this.tail;
        while(currentNode.previousNode != null) {   
            if(currentNode.value === value) {
                currentNode.nextNode.previousNode = currentNode.previousNode;
                currentNode.previousNode.nextNode = currentNode.nextNode;
                return;
            }
            currentNode = currentNode.previousNode;
        }
    }

    public display(): void {
        let currentNode: Nodes = this.head;
        while(currentNode.nextNode != null) {
            console.log(currentNode.value);
            currentNode = currentNode.nextNode;
        }
        console.log(currentNode.value);
    }

    public reverseDisplay(): void {
        let currentNode: Nodes = this.tail;
        while(currentNode.previousNode != null) {
            console.log(currentNode.value)
            currentNode = currentNode.previousNode;
        }
        console.log(currentNode.value)
    }
}