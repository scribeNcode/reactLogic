export const numPrinter = ()=>{
     
    for(let i=0; i <= 50; i++){
        if(i % 3 === 0){
            console.log('Fizz')
        }else if(i % 5 === 0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    //     
    }
}


// Write a function findLargest that takes three numbers as arguments and returns the largest of the three.

export function findLargest(a,b,c){
    let highestNum = Math.max(a,b,c)
    console.log(highestNum)
}


