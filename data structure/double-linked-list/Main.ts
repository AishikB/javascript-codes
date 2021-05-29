import { LinkedList } from "./LinkedList";

let list: LinkedList = new LinkedList();
list.append("Aishik");
list.append("John");
list.append("Jack");
list.append("Peter");
list.append("Aishik");
list.append("John");
list.append("Jack");
list.append("Peter");

list.deleteFirst("Jack")
list.display();
console.log("...............................................")
list.deleteLast("John")
list.display();
console.log("...............................................")
list.reverseDisplay();