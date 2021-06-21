/** List of available stacks */
const stacks = ["Welfare", "Religion", "Prosperity", "Experience", "Knowlege"]
var app = document.getElementById("app")
console.log("hello there ")
stacks.forEach(stack =>{
    var stk = document.createElement("div")
    stk.id = "stack"
    var p = document.createElement("p")
    p.innerText = stack
    stk.appendChild(p)
    console.log(stk)
    app?.appendChild(stk)
})

console.log(app)