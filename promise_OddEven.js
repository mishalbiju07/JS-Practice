//Function to check if Odd or Even
let checkOddEven=(n)=>{
    //Creating a Promise
    return new Promise((resolve,reject)=>{
        //checks the even condition
        if(n%2==0)
        {
            resolve('Even Number');
        }
        else
        {
            //if number is Odd
            reject('Odd Number');
        }
    });
}
//calling the function
checkOddEven(10).then((result)=>{
    console.log(result);
}).catch((result)=>{
    console.log(result)
})
