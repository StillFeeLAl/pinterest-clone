fetch("https://fakestoreapi.in/api/products")
.then(res => res.json())
.then((data) => console.log(data))
let products = document.getElementById("pin_mdl")