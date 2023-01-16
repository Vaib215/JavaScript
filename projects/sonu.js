let todoList = [];

while(true){
    let n = prompt("Enter 1 to add item to the list\nEnter 2 to display the list\nEnter 3 to remove item from the list");
    if(n==1){
        let todo = prompt("enter the todo");
        addToDo(todo);
    }
    else if(n==2){
        displayToDo();
    }
    else if(n==3){
        let removeItem = prompt("enter the index of item name to remove");
        removeToDo(removeItem);
        displayToDo();
    }
    else {
        break;
    }
}


function addToDo(item) {
    todoList.push(item);
    console.log(item + " added to the list.");
}

function displayToDo() {
    console.log("To-do list:");
    todoList.forEach(function(item) {
        console.log(item);
    });
}

function removeToDo(index) {
    if (index !== -1) {
      todoList.splice(index, 1);
      console.log(index + " removed from the list.");
    } else {
      console.log(index + " not found in the list.");
    }
}