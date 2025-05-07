function processValue(value: string | number): number{
    if(typeof value ==='string'){
        return value.length
    }
    else{
        return value*2
    }
}

const case1= processValue("hello i am shawn"); // Output: 5
const case2=  processValue(10);      // Output: 20
console.log(case1,case2)