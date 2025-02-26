let min = +prompt("nhap so thu nhat");
let max = +prompt("nhap so thu hai");
let random = Math.floor(Math.random() * (max - min -2 + 1)) + (min+1);
alert(random)
