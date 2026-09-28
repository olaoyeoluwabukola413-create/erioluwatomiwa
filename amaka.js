console.log("datatypes")

//  number
let num = 100 //integar
let num2 =220.87 // floating number or decimal

console.log(num)
console.log(num2)

//string
let myname = " ikeoluwa" //using dobule quotes
let myName2 ="ikeoluwa" //using single quotes
let myname3 =`ikeoluwa ${num}`;// using backticks

console.log(myname)
console.log(myName2)
    console.log(myname3);
    //boolean
    let checkfirst =true;
    let checksecond =false;

    let checkthird =10 > 5 //true
    let checkfourth = 10 < 5; //false

    console.log(checkfirst);
    console.log(checksecond);

    console.log(checkthird)
    console.log(checkfourth)
//null datatypes
let mynull =null
console.log(mynull);

//undefined
let noting
console.log(noting)

//array
let nameofstudent = ["samue","ope,","hannah","bimpe" ,35,"kola","true","null"]
console.log(nameofstudent[2])
console.log(nameofstudent[4])
console.log(nameofstudent[0])
console.log(nameofstudent[5])

//object
let details ={
    name:"olaoye ikeoluwa",
    age:65,
    school:"university of ibadan",
    address:"agbowo ui",
    home:"two bedroom flat",
    clothes:"blue and pink",
    car:"mercedes",
}
console.log(details.name);
console.log(details.car);
console.log(details.age);
console.log(details.home);

let aboutme =` my name is ${details.name},i am ${details.age}years old,i wear${details.clothes}every friday,i drive${details.car}to the club        `
console.log (aboutme);

let myage =40;
let herage =20;
let  agedifference = herage +myage;
console.log(agedifference);

//using number()
myage = Number(myage)
herage = Number(herage)
agedifference = herage - myage;
console.log(agedifference);

//paresent int()
myage =parseInt(myage);
herage =parseInt(herage);
agedifference =herage - myage;
console.log(agedifference);

//parsefloat()
myage = parseFloat(myage);
herage = parseFloat(herage)
agedifference = herage -myage
console.log (agedifference);

//plis sign(+)to convert strings to number
myage = +myage;
herage =+herage;
agedifference =herage - myage;
console.log(agedifference )


