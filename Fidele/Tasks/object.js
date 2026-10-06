const products =[
    {id:"P01", name:"Notebook", price: 3500, stock:10},
    {id:"P02", name:"shoes", price: 4000, stock:70},
    {id:"P03", name:"Pens", price: 500, stock:20},
    {id:"P04", name:"Bags", price: 25000, stock:30},
    {id:"P05", name:"Covers", price: 400, stock:15}
]
let total= 0;
for (const product of products){
    if(product.stock>0){
        total+=product.price * product.stock;
    }
}
console.log(total); //out put 1081000

function calculateTotal(quantity, unityPrice){
    if (quantity > 0 && unityPrice > 0){
    total= quantity * unityPrice;
    console.log(total);
}else{
    console.log("Use Positive quantities and prices");
}
}
calculateTotal(10, 500);//output 500
calculateTotal(0,-1);// output Use Positive quantities and prices
calculateTotal('5',2000);

