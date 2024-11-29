let age = 32;

if(age<10){
    console.log("You are younger than 10 years")
}

else{
    console.log("You are older than 10")
}

let marks = 60;

if(marks==10){
    console.log('F9')
}

else if(marks==30){
    console.log('P8')
}
else if(marks==60){
    console.log('C5')
}
else{
    // LAST RESORT when all else fails
    console.log("I don't know")

}

//print even numbers

for(let x = 0; x<20; x++){
    if(x%2==0){ 

        // x++ add 1
        // modulus, modulo
        // when the number is divided by 2, the remainder should be 0
        console.log(x)
    }
}


// print odd numbers

for(let i =0; i<11; i++){
    if(i%2==1)
    console.log(i)
}