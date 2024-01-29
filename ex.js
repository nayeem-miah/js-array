
// --------task 1------------------->
let fruits=["babana", "apple", "orenge" , "lemon", "mango"];
console.log(fruits[3]);
fruits[2]="jambura";
console.log(fruits);


// ---------------------------------------------------
// -----------task 2----------------->
let sport=["cox-bazar", "jaflong", "sagaj"];
sport.push("rangamathi");
console.log(sport);
sport.push("hama-ham","sreemamgal");
console.log(sport);
sport.pop();
console.log(sport);



// ----------------------------------------------------
//-------------------- task 3------------------->
const bookList=['python', 'Data struture', "java"];
if(bookList.includes('java script')){
    console.log("this book is porgramming book. This book is very helpful of web devoloper");
}
else{
    console.log("java script is not in the bookList");
}

// -----------------------------------------------------------
// ------------------task 4------------------------>
const food=["rice", "fish", "dal"];
const age=34;
console.log(Array.isArray( food));
console.log(Array.isArray(age))


// -------------------------------------------------------
// ---------------task 5----------------------->
var boys=['abdullah', "jakariya"];
var girls=['mimi', 'rumi'];
var all=boys.concat(girls);
console.log(all);
