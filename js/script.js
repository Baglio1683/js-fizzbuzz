

let contBox = document.getElementById("headItems")


for(i=1 ; i <=100 ; i++){

const item = document.createElement('div')
item.classList.add("col-2")
item.classList.add("p-4")
item.classList.add("me-1")
item.classList.add("mb-3")

if(i%3===0 && i%5===0){
item.innerHTML = "FizzBuzz"   
item.classList.add("FizzBuzz") 
console.log("FizzBuzz")
}
else if(i%3===0){
    item.innerHTML = "Fizz" 
    item.classList.add("Fizz")
    console.log("Fizz")
}
else if(i%5===0){
    item.innerHTML = "Buzz"
    item.classList.add("Buzz")
    console.log("Buzz")
}
else{
    item.innerHTML = i 
    item.classList.add("none")
    console.log(i)
}

contBox.append(item)

}