var todos = [];
var index_list = 0;
var newAlement = document.querySelector("#newAlement");
var viewAlement = document.querySelector("#viewAlement");
var deleteAlement = document.querySelector("#deleteAlement");
var textX = document.querySelectorAll("li");
  // put all of your JS code from the lecture here

function listTodo(){
		todos.forEach(function(todo, i){
		console.log(i +": "+todo);

	});
}

newAlement.addEventListener("click", function(){

	var input_add = prompt("Enter a new todo");
			todos.push(input_add);
			console.log(input_add + " added to the list");
			console.log("-----------updated list-------")
			listTodo();
});

viewAlement.addEventListener("click", function(){

console.log("****************list*************")
			listTodo();
			console.log(todos);
});

deleteAlement.addEventListener("click", function(){

	var input_remove = prompt("Enter index of item you want to delete ");
			while(input_remove>todos.length-1 )
			{
				input_remove = prompt("Not correct input\nEnter index of item you want to delete ");
				
			}
			
			todos.splice(input_remove,1);
			console.log("-----------updated list-------")
			listTodo();
});

for (var i = 0; i < textX.length; i++) {
	textX[i].addEventListener("mouseover", function(){
	this.style.color ="blue";
});
}

for (var i = 0; i < textX.length; i++) {
	textX[i].addEventListener("mouseout", function(){
	this.style.color ="black";
});
}
	