let number =["23","65","74","94"]
let ans = (Math.max("23","65","74","94"))
console.log(`The maxmium number in the array is ${ans} `)

console.log(Math.min(22,54,76,93,42,51))
console.log(Math.max(22,54,76,93,42,51))










// for loop
for(let ike =5;ike <=15; ++ike){
    console.log(ike)
}
for(let ayo =20; ayo >= 0; --ayo){
    console.log(ayo)

}
console.log(`==while loop`)
let sade = 0
while(sade<=10){
    console.log(`number${sade} is the current`)
    ++sade
}
console.log(`=== do while loop`)
let mama =0
do{
    console.log(`number${mama} is the current`)
    ++mama
}
while(mama <= 12)

    console.log("===dowhileloop")
let bukola = 0
do{
    console.log(bukola)
    ++bukola
}
while(bukola <= 10)

//for loop: break and continue

for(let ore = 20; ore <= 30; ++ore){
    if(ore ===15){
        console.log("it skip")
        continue
    }
    console.log(ore)
}


for(let ade =1;ade<= 12; ++ade){
    let times3 =3*ade
    console.log(`2*${ade}=${times3}`)
}
let fibo = 0
for(let ola =0; ola <=20; ++ola){
    fibo =fibo +ola
}
console.log(`fibonacci of 20 =${fibo}`)

let facto =10 
for(let dan = 10; dan <= 1; ++dan){
    facto = facto *dan
}
console.log(`factoria of 10 =${facto}`)
let mass = Number (prompt("what the number of mass"))
let volume = Number(prompt("what the function of the volume"))
function destiny(){
    let dan = mass / volume
    if (isNaN(mass) || isNaN(volume)) {
     console.log ("you dont have avalid number")
    }
    else {
        console.log (`the theory ${mass}${volume} cmd is {den} `)(
    )
        
    }
}