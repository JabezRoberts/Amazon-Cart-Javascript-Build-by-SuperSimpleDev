// Create an array to store tasks
const todoList = []

// const todoList1 = ['make dinner', 'clean car', 'put kids to sleep', 'wash dishes'];

const todoList1 = [{
    name: 'make dinner',
    dueDate: '2025-12-12'
}, {
    name: 'clean car',
    dueDate: '2025-10-15'
}, {
    name: 'put kids to sleep',
    dueDate: '2025-09-10'
}, {
    name: 'wash dishes',
    dueDate: '2025-09-11'
}];


renderTodoList();


function renderTodoList(){
    let todoListHTML = '';

    // now we rewrite the for loop below
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <div></div>             
            <button class="delete-todo-button js-delete-todo-button">
                Delete
            </button>

            
        `; // Create HTML with each todo - called generating the HTML
        // Add a delete button beside each task, add a splice method to each button with the index of the task to remove that task from the list then render the list again after splicing

        // <div>${name}</div>
        //     <div>${dueDate}</div>
        //     <div></div>             
        //     <!--<button 
        //         onclick="todoList1.splice(${index}, 1); 
        //         renderTodoList();
        //     " class="delete-todo-button js-delete-todo-button">
        //         Delete
        //     </button> -->
        //     <button class="delete-todo-button js-delete-todo-button">
        //         Delete
        //     </button>
        
        todoListHTML += html; // now combine the html code and then put it on the page

        // can't add eventListener until after we put the document on the page
        document.querySelectorAll('.js-delete-todo-button') // use querySelectorAll to get a list of all the delete buttons
            .forEach((deleteButton, index) => { // then we used forEach to loop through this list
                deleteButton.addEventListener('click', () => { // then for each delete button we ran the click event listener and ran the same code as we did before
                    todoList.splice(index, 1);
                    renderTodoList();
                });
            });

    });

    // for (let i = 0; i < todoList1,length; i++){
    //     const todoObject = todoList1[i]; // Get the string from each index

    //     // Now we need the name and due date from this object
    //     // const name = todoObject.name;
    //     // const dueDate = todoObject.dueDate;

    //     // Object destructuring const name = todoObject.name; same as const { name } = todoObject;
    //     // Now object destructuring gives
    //     const { name, dueDate } = todoObject;
        
    //     const html = `
    //         <div>${name}</div>
    //         <div>${dueDate}</div>
    //         <div></div>             
    //         <button 
    //             onclick="todoList1.splice(${i}, 1); 
    //             renderTodoList();
    //         " class="delete-todo-button">
    //             Delete
    //         </button> 
    //     `; // Create HTML with each todo - called generating the HTML
    //     // Add a delete button beside each task, add a splice method to each button with the index of the task to remove that task from the list then render the list again after splicing
        
    //     todoListHTML += html; // now combine the html code and then put it on the page
    // }

    console.log(todoListHTML);


    document.querySelector('.js-todo-list').innerHTML = todoListHTML; // This code takes the html we created and put it into the div therefore getting it on the page

}


document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo() {
    const inputElement = document.querySelector('.js-name-input'); // This gets the element with the class of js-name-input and inputs it into our javascript

    const name = inputElement.value; // now to get the text out
    
    const dateInputElement = document.querySelector('.js-due-date-input'); // Now to get the due date from the html

    const dueDate = dateInputElement.value; // Now to get the due date out of the element
    
    // todoList.push({
    //     name: name,
    //     dueDate: dueDate
    // }); // now add this task name to the array

    // if the property and the variable name are the same you can write the following in shorthand property todoList.push({ name: name, dueDate: dueDate }); as:
     todoList.push({
        name,
        dueDate
    });



    console.log(todoList); // log the entire array to the console

    inputElement.value = '' // reset or empty the text box after we click 'add'
    
    renderTodoList(); // call render todo list everytime we add a task to the list so that the entire list is shown on the web page
}

// now to display our array to the page and update after each entry
//  To do this we will loop through the array, create some html code for each todo then put the html on the web page


// let todoListHTML = '';

// for (let i = 0; i < todoList1,length; i++){
//     const todo = todoList1[i]; // Get the string from each index
    
//     const html = `<p>${todo}</p>;` // Create HTML with each todo
    
//     todoListHTML += html; // now combine the html code and then put it on the page
// }

// console.log(todoListHTML);


// document.querySelector('.js-todo-list').innerHTML = todoListHTML; // This code takes the html we created and put it into the div therefore getting it on the page

// Now to set it so that the add button updates our array and adds it to the page


// When creating websites with JS first save the data (as an array here) then use the data to generate some html then we make it interactive



// Now the due date feature and html