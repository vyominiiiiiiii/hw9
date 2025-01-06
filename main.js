var cars=["bmw","ferrari","mercedes","audi","lamborghini","porche","jeep","maruti","volvo"];
console.log(cars);

var x="";

for(var i=0;i<cars.length;i++){
    console.log(cars[i]);
    document.getElementById("show").innerHTML=x+cars[i]+'<br>';
    x+=cars[i]+"<br>";
    console.log(x);
}
