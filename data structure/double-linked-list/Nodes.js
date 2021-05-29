"use strict";
exports.__esModule = true;
exports.Nodes = void 0;
var Nodes = /** @class */ (function () {
    function Nodes(nextNode, previousNode, value) {
        this.nextNode = null;
        this.previousNode = null;
        this.value = null;
        this.nextNode = nextNode;
        this.previousNode = previousNode;
        this.value = value;
    }
    return Nodes;
}());
exports.Nodes = Nodes;
