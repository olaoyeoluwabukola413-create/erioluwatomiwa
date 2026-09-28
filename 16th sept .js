let things =["lexus","mercedes","bmw","toyota","lambo","ferrari","porshe","teshla","nisan","mazda","honda","bugatti","rollsrocye","mclaren","nissan","volvo","tesla","mitsubishi"
]
console.log(things)

console.log(things.length) //18
console.log(things.toString()) //convert to
console.log(things.indexOf("hissan")) //11

things.pop() // to remove an item from the back of an array
console.log(things)

things.push("mitsubishi") //to add item to the back of an array
things.push("ford")

console.log(things)
console.log(things.length)

things.shift() // to remove an item from the front of an array
console.log(things)

things.unshift('rollsroyce') //this adds an item to the front of an array
console.log(things)
console.log(things.includes("nissan"))
console.log(things.sort())

//things =things.reverse()
console.log(things.slice(2, 10))
console.log(things.splice(2 ,10))

let state =["oyo","ogun","osun"]
console.log(state.concat(things))


const shoppingcart = ["milk","cofee","tea","honey"]
shoppingcart.unshift("meat") //to add sugar at the end of your shoppingcart if it is not been added already
console.log(shoppingcart)

shoppingcart.push("sugar")
console.log(shoppingcart)

shoppingcart.indexOf("honey")
shoppingcart.splice(3 ,1);
console.log(shoppingcart)

shoppingcart.indexOf("tea")
shoppingcart[3] ="greentea";
console.log(shoppingcart)