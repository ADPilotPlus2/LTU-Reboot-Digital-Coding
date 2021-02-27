console.log("Hello, 3.5.1 too");


function shoppingCartTotal (arr) {
    let totalPrice=0;
    
    for (var index=0; index < arr.length; index++) {
        totalPrice=totalPrice+ (arr[index].price*arr[index].quantity);
        //console.log(arr[ index].qunatity, arr[index]);
        //totalPrice=totalPrice+(arr[index].price);
    }
        return totalPrice.toFixed(2);


}


console.log(shoppingCartTotal(shoppingCart));