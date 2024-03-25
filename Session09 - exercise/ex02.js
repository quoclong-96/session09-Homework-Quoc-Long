let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));

let sum = 0;
let min = Math.min(a, b);
let max = Math.max(a, b);

// Tính tổng các số nguyên trong khoảng giữa hai số a, b
for (let i = min; i <= max; i++) {
    sum += i;
}

// In kết quả ra màn hình console
console.log(
    "Tổng các số nguyên trong khoảng từ " + min + " đến " + max + " là: " + sum
);

//CÁCH 2
// let a = parseInt(prompt("Nhập số nguyên a:"));
// let b = parseInt(prompt("Nhập số nguyên b:"));

// // Kiểm tra nếu a lớn hơn b, hoán đổi giá trị của a và b để đảm bảo a luôn nhỏ hơn b
// if (a > b) {
//     let temp = a;
//     a = b;
//     b = temp;
// }

// //sử dụng một biến tạm thời temp để lưu giữ giá trị của a.
// //Sau đó, chúng ta gán giá trị của b cho a, và cuối cùng gán giá trị của temp (giá trị ban đầu của a) cho b.

// // Tạo biến sum để lưu tổng các số nguyên trong khoảng từ a đến b
// let sum = 0;

// // Duyệt qua từng số nguyên từ a+1 đến b-1 và tính tổng
// for (let i = a + 1; i < b; i++) {
//     sum += i;
// }

// // In kết quả ra màn hình console
// console.log(
//     "Tổng các số nguyên trong khoảng từ " +
//         (a + 1) +
//         " đến " +
//         (b - 1) +
//         " là: " +
//         sum
// );
