var todos = [];
var index_list = 0;
window.setTimeout(function() {
  // put all of your JS code from the lecture here

var input = prompt("What would you like to do?");

	while(input != "quit")
	{
		if(input == "new")
		{
			var input_add = prompt("Enter a new todo");
			todos.push(input_add);
			console.log(input_add + " added to the list");
			console.log("-----------updated list-------")
			listTodo();

		}
		else if(input == "list")
		{
			console.log("****************list*************")
			listTodo();
			console.log(todos);
		}
		else if(input == "delete")
		{
			var input_remove = prompt("Enter index of item you want to delete ");
			todos.splice(input_remove,1);
			console.log("-----------updated list-------")
			listTodo();
		}
		
		var input = prompt("What would you like to do?");

	}
	console.log("Bye Bye");
function listTodo(){
			todos.forEach(function(todo, i){
			console.log(i +": "+todo);

		});
}
}, 500);