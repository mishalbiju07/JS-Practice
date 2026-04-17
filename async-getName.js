// async function that returns name
async function getName()
{
    return "Mishal Biju";
}
//Main function to call getName
async function main()
{
    //wait for the result from getName
    const name= await getName();
    //Print result
    console.log(name);
}
//Start the Program
main();
