// Simple Login Check
// Function login to take password as a parameter
let login=(password)=>{
    // Promise created
    return new Promise((resolve,reject)=>{
        // Checks the password
        if(password===1234)
        {
            resolve('Login successful');
        }
        else
        {
            reject('Wrong password');
        }
    });
}
//Call function and Handle Promise
login(1234).then((result)=>{
    console.log(result);
}).catch((result)=>{
    console.log(result);
})
