"use strict";
/** List of available stacks */
var stacks = ["Welfare", "Religion", "Prosperity", "Experience", "Knowlege"];
var app = document.getElementById("app");
console.log(app);
console.log("hello there ");
stacks.forEach(function (stack) {
    var stk = document.createElement("div");
    stk.className = "stack"
    var p = document.createElement("p");
    p.innerText = stack;
    stk.appendChild(p);
    console.log(stk);
    app === null || app === void 0 ? void 0 : app.appendChild(stk);
});
