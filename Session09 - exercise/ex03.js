let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));

let result = 1;

// Sử dụng vòng lặp để tính kết quả của biểu thức a^b
for (let i = 0; i < b; i++) {
    result *= a;
}

// In kết quả ra màn hình console
console.log("Kết quả của biểu thức " + a + "^" + b + " là: " + result);
