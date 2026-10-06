// Merge two arrays into one using spread.
const a=["apple","banana"];
const b=["mango","pineapple"];

const allitem=[...a,...b];
console.log(allitem);

// Copy an object and change only one property.
const user={
    userName:"pratik",
    age:19,
}
const changed={
    ...user,
    age:20,
}
console.log(changed)

// Write a function multiply(...nums) that returns the product of all numbers.
function multiply(...nums){
    let result=1;

    for(let num of nums){
        result=result*num;
    }
    return result;
}
console.log(multiply(2,3,4))

// Destructure an array [1, 2, 3, 4] into first and rest.
const nums=[1,2,3,4];
const[first,...rest]=nums
console.log(first,rest);


// Remove the password key from an object using rest.
const usr={
    name:"pratik",
    email:"pratik@gmail.com",   
    password:"12345"
};
const{password,...safeuser}=usr
console.log(safeuser)