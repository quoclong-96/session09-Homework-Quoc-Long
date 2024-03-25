let number = parseInt(prompt("Nhập vào một số nguyên dương:"));

let sum = 0; // Khởi tạo biến tổng
let i = 2; // Bắt đầu từ số chẵn đầu tiên là 2

// Lặp để tính và in ra bình phương của các số nguyên dương chẵn
while (sum + i * i < number) {
    let square = i * i; // Tính bình phương của số chẵn
    console.log(square); // In ra bình phương của số chẵn
    sum += square; // Cộng bình phương của số chẵn vào tổng
    i += 2; // Chuyển sang số chẵn tiếp theo
}

console.log("Tổng các số đã in ra là: " + sum); // In tổng các số đã in ra
