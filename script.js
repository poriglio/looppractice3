var students = [
	{
		name: "Liz",
		age : 25,
		city: "Boulder"
	},
	{
		name: "Meghan",
		age : 27,
		city: "Denver"
	},
	{
		name: "Trent",
		age : 32,
		city: "Boulder"
	},
	{
		name: "Chelsea",
		age : 24,
		city: "Boulder"
	},
	{
		name: "Amir",
		age : 18,
		city: "Denver"
	}];




// PROBLEM 1

students.forEach(function(element,index){
	console.log(students[index].age)
})




// PROBLEM 2

students.forEach(function(element,index){
	console.log(students[index].name + ", " + students[index].city)
})



// PROBLEM 3

students.forEach(function(element,index){
	if(students[index].city === "Boulder"){
		console.log(students[index].name + " is from " + students[index].city)
	}
})



// PROBLEM 4

students.forEach(function(element,index){
	if(students[index].age>25){
		console.log(students[index].name + " is older than 25")
	}
})
