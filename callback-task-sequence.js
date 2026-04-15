// Step 1: Place the order
// Accepts a callback to run after the order is placed
function placeOrder(callback)
{
    console.log("Order Placed");
  // Simulate delay
    setTimeout(()=>{
        callback();//Move to Next function
    },5000)
}
// Step 2: Prepare the food
// Runs after order is placed
function prepareFood(callback)
{
    console.log("Food Prepared");
   // Simulate cooking time
    setTimeout(()=>{
        callback();//Move to Next function
    },5000)
}
// Step 3: Deliver the food
// Runs after food is prepared
function deliverFood(callback)
{
    console.log("Food Delivered");
  // Simulate delivery time  
    setTimeout(()=>{
        callback();//Move to Next function
    },5000)
}
//Nested callbacks
placeOrder(()=>{
    prepareFood(()=>{
        deliverFood(()=>{
            console.log("Order Completed");
        })
    })
})
