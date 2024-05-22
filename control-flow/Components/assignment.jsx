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

// Write a function calculateGrade that takes a number score (0-100) and returns a grade (A, B, C, D, F) based on the following scale:
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59.

export function calculateGrade(num){
    if(num >= 0 && num <= 59){
        console.log('F')
    }else if(num >= 60 && num <= 69){
        console.log('D')
    }else if(num >= 70 && num <= 79){
        console.log('C')
    }else if(num >= 80 && num <= 89){
        console.log('B')
    }else if(num >= 90 && num <= 100){
        console.log('A')
    }else{
        console('not a valid grade')
    }
}



