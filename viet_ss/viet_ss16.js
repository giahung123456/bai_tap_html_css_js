// alert("haha");
// khai báo biến
let number = 10;
number = 20;
number = number + 10;
// const:hằng
let input = prompt("mời bạn nhập tên");
alert(input);
console.log(input);
let num1 = 7;
let num2 = 2;
console.log(num1 ** num2);
console.log(num1 % num2);
let age = 34;

let example = `kiểu chuỗi .
omane ${age} mika`;
console.log(example);
console.log(example[1]);
console.log(example.length);
let novel = `tôI Là MÈo`;
let novelHoa = novel.toUpperCase();
console.log(novelHoa);
let drink = `    matcha       `;
let drinkLai = drink.trim();
console.log(drinkLai);
let food = `pizza`;
let afc = food.indexOf("i");
let afcp2 = food.indexOf("za");
console.log(afc);
console.log(afcp2);
let bedev = `Khi thế giới ngày càng trở nên số hóa, nhu cầu về các giải pháp công nghệ hiệu quả và nhanh chóng tiếp tục tăng lên`;
let bedevDau=bedev.slice(0,4);
let bedevRemain=bedev.slice(3);
let bedevThay=bedev.replace(`ngày`,`giờ`);
console.log(bedevDau);
console.log(bedevRemain);
console.log(bedevThay);
