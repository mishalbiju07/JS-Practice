//Function Defined delayedMessage
let delayedMessage=()=>{
    //Promise Created
    return new Promise((resolve)=>{
        //delay execution by 5 seconds
       setTimeout(()=>{
           resolve('Message Delayed For 5 Seconds')
       },5000)
})
}
//Promise Calling
delayedMessage().then((result)=>{
    console.log(result);
})
