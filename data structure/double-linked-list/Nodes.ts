export class Nodes {
    nextNode: Nodes = null;
    previousNode: Nodes = null;
    value: any = null;

    constructor(nextNode, previousNode, value) {
        this.nextNode = nextNode;
        this.previousNode = previousNode;
        this.value = value;
    }


}