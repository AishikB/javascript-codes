"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var Nodes_1 = require("./Nodes");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.append = function (value) {
        var newNode = new Nodes_1.Nodes(null, null, value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        var currentNode = this.head;
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }
        newNode.previousNode = currentNode;
        currentNode.nextNode = newNode;
        this.tail = newNode;
    };
    LinkedList.prototype.deleteFirst = function (value) {
        var currentNode = this.head;
        while (currentNode.nextNode != null) {
            if (currentNode.value === value) {
                currentNode.previousNode.nextNode = currentNode.nextNode;
                currentNode.nextNode.previousNode = currentNode.previousNode;
                return;
            }
            currentNode = currentNode.nextNode;
        }
    };
    LinkedList.prototype.deleteLast = function (value) {
        var currentNode = this.tail;
        while (currentNode.previousNode != null) {
            if (currentNode.value === value) {
                currentNode.nextNode.previousNode = currentNode.previousNode;
                currentNode.previousNode.nextNode = currentNode.nextNode;
                return;
            }
            currentNode = currentNode.previousNode;
        }
    };
    LinkedList.prototype.display = function () {
        var currentNode = this.head;
        while (currentNode.nextNode != null) {
            console.log(currentNode.value);
            currentNode = currentNode.nextNode;
        }
        console.log(currentNode.value);
    };
    LinkedList.prototype.reverseDisplay = function () {
        var currentNode = this.tail;
        while (currentNode.previousNode != null) {
            console.log(currentNode.value);
            currentNode = currentNode.previousNode;
        }
        console.log(currentNode.value);
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
