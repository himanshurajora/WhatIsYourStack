"use strict";
/** List of available stacks */
var stacksArr = ["Welfare", "Religion", "Prosperity", "Experience", "Knowlege"];
var app = document.getElementById("app");
var dragged = false;
var draggedItem;
var latest;
stacksArr.forEach(function (stack) {
    var stk = document.createElement("div");
    stk.className = "stack";
    stk.draggable = true;
    var p = document.createElement("p");
    p.innerText = stack;
    p.draggable = false;
    stk.appendChild(p);
    app === null || app === void 0 ? void 0 : app.appendChild(stk);
});
var stacks = document.getElementsByClassName("stack");
for (var _i = 0, stacks_1 = stacks; _i < stacks_1.length; _i++) {
    var stack = stacks_1[_i];
    var stk = stack;
    stk.addEventListener("drag", function (e) {
        e.preventDefault();
        dragged = true;
        draggedItem = e.target;
        draggedItem.className = "stack-s";
    });
    stk.addEventListener("dragover", function (e) {
        e.preventDefault();
        latest = e.target;
        swapElements(draggedItem, latest);
    });
    // stk.addEventListener("dragstart")
    stk.addEventListener("dragend", function (e) {
        draggedItem.className = "stack";
        // console.log(latest)
        // console.log(draggedItem)
    });
}
function swapElements(obj1, obj2) {
    // create marker element and insert it where obj1 is
    // console.log(obj1.draggable);
    console.log(obj1, obj2);
    if (obj1.draggable != false && obj2.draggable != false) {
        var temp = document.createElement("div");
        obj1.parentElement.insertBefore(temp, obj1);
        obj2.parentNode.insertBefore(obj1, obj2);
        temp.parentNode.insertBefore(obj2, temp);
        temp.parentNode.removeChild(temp);
    }
    else if (obj2.draggable == false) {
        var temp = document.createElement("div");
        obj1.insertBefore(temp, obj1);
        obj2.parentElement.parentElement.insertBefore(obj1, obj2.parentElement);
        temp.parentNode.insertBefore(obj2.parentElement, temp);
        temp.parentNode.removeChild(temp);
    }
    else {
        var temp = document.createElement("div");
        obj1.parentElement.parentElement.insertBefore(temp, obj1.parentElement);
        obj2.parentNode.insertBefore(obj1.parentElement, obj2);
        temp.parentNode.insertBefore(obj2, temp);
        temp.parentNode.removeChild(temp);
    }
}
