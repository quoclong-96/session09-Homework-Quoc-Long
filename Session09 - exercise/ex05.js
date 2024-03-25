let n = parseInt(prompt("Nhập vào một số nguyên dương n:"));

// Khởi tạo biến để tính tổng
let S = 0;

// Tính tổng các số trong biểu thức
for (let i = 1; i <= n; i++) {
    S += 1 / Math.pow(i, 3);
}

// Làm tròn kết quả S đến 5 chữ số thập phân
S = S.toFixed(5);

// In kết quả
console.log("Kết quả của biểu thức S là: " + S);
