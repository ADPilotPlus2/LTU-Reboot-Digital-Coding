console.log("Hello 3.5.3b");
var arrItems=[];
function priceRange (arr,lowPrice,highPrice) {
    for (let index=0; index<arr.length;index++) {
        if (arr[index].price >= lowPrice && arr[index].price <= highPrice) {
            arrItems.push (arr[index].name);
        }
    }
return arrItems;
}

priceRange(shoppingCart,2,5);

for (i=0;i<arrItems.length;i++) {
    console.log(arrItems[i]);
}