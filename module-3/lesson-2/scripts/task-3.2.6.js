
var temperature = Math.floor(Math.random() *23);
var myLocation = "work";

console.log("Today it is "+temperature+" degrees outside")
if (temperature <2 && myLocation === "home") {
    console.log("Stay at home");
}else if (temperature <15){
    console.log("Wear a coat and hat");
}else if (temperature<20) {
    console.log("Just a jumper needed!");
}else{
    console.log("T-shirt and shorts weather");
}


