/* 
        X 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
        X 22) Create an object with properties such name, surname, email
        X 23) Delete the email property from the previously created object
        X 24) Create an array with 10 strings in it
        X 25) Print in the console every string from the previous array
        X 26) Create an array with 100 random numbers in it
        X 27) Write a function to get the maximum and minimum values from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays as parameters and returns the longest one
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
        */
    //Ex 21   
       let x = "John <";
       let y = " > Doe";
console.log(x+y);
// for sure this isn't what was wanted for 22


//Ex 22
let contactCard = {
firstName: "John",
surName: "Smith",
email: "jonsmith@hotmail.com",

}
console.log(contactCard);


//Ex 23
delete contactCard.email;
console.log(contactCard);


//Ex 24
let myArr =["Frank","Nuts","Eat","P","New","QE","you","PU","ou","zz"];
for (let i = 0; i < myArr.length; i++){
        console.log((i + 1) + '. ' + myArr[i])
    }


 //Ex25   
const Marray = Array(100) 
				.fill()
				.map(() => Math.floor(100 * Math.random())); 

console.log(Marray);

// Ex 26
let max = Marray[0], min = Marray[0];
for (let i = 0; i < Marray.length; i++) {

    if (Marray[i] > max) { max = Marray[i]; }

    if (Marray[i] < min) { min = Marray[i]; }
}
console.log("max = " + max);
console.log("min = " + min);


//EX 27
const Marray = Array(100) 
				.fill()
				.map(() => Math.floor(100 * Math.random())); 

console.log(Marray);

//Ex 28
