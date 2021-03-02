console.log("Hello 3.5.3b");
var arrItems=[];
var lowPrice =0;

function priceRange (arr,lowPrice,highPrice) {
    var arr=shoppingCart;
    var lowPrice = document.getElementById("lowPrice").value;
    console.log(lowPrice);
    var highPrice=5;
    console.log(highPrice);
    for (let index=0; index<arr.length;index++) {
        if (arr[index].price >= lowPrice && arr[index].price <= highPrice) {
            arrItems.push (arr[index].name);
        }
    }
return arrItems;
}

//priceRange(shoppingCart,2,5);
var text = "waiting for input";
document.getElementById("demo").innerHTML = text;
text="";
document.querySelector(".btn").addEventListener("click", () => {
for (i=0;i<arrItems.length;i++) {
    console.log(arrItems.length);
    console.log(arrItems[i]);
    text += arrItems[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
arrItems=[];
});
//document.getElementById("demo").innerHTML = text;

