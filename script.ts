/** List of available stacks */
const stacksArr = ["Welfare", "Religion", "Prosperity", "Experience", "Knowlege"]
var app = document.getElementById("app")
var dragged = false
var draggedItem: HTMLElement
var latest: HTMLElement
stacksArr.forEach(stack => {
    var stk = document.createElement("div")
    stk.className = "stack"
    stk.draggable = true;
    var p = document.createElement("p")
    p.innerText = stack
    p.draggable = false
    stk.appendChild(p)
    app?.appendChild(stk)
})

var stacks: HTMLCollection = document.getElementsByClassName("stack")

for (var stack of stacks) {
    var stk: HTMLElement = stack;
    stk.addEventListener("drag", (e: DragEvent) => {
        e.preventDefault()
        dragged = true
        draggedItem = e.target as HTMLElement
        draggedItem.className = "stack-s"
    })
    
    stk.addEventListener("dragover", (e: DragEvent) => {
        e.preventDefault()
        latest = e.target as HTMLElement
        swapElements(draggedItem, latest)
    })

    // stk.addEventListener("dragstart")

    stk.addEventListener("dragend", function (e) {
        draggedItem.className = "stack"
        // console.log(latest)
        // console.log(draggedItem)

    })
}

function swapElements(obj1: HTMLElement, obj2: HTMLElement) {
    // create marker element and insert it where obj1 is
    // console.log(obj1.draggable);
    console.log(obj1, obj2)
    if (obj1.draggable != false && obj2.draggable != false) {
        var temp = document.createElement("div")
        obj1.parentElement.insertBefore(temp, obj1)
        obj2.parentNode.insertBefore(obj1, obj2);
        temp.parentNode.insertBefore(obj2, temp);
        temp.parentNode.removeChild(temp);
    }
    else if(obj2.draggable == false){
        var temp = document.createElement("div")
        obj1.insertBefore(temp, obj1)
        obj2.parentElement.parentElement.insertBefore(obj1, obj2.parentElement);
        temp.parentNode.insertBefore(obj2.parentElement, temp);
        temp.parentNode.removeChild(temp);
    }
    else {
        var temp = document.createElement("div")
        obj1.parentElement.parentElement.insertBefore(temp, obj1.parentElement)
        obj2.parentNode.insertBefore(obj1.parentElement, obj2);
        temp.parentNode.insertBefore(obj2, temp);
        temp.parentNode.removeChild(temp);
    }
}