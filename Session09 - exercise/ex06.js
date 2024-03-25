let n = prompt("Nhập vào một số nguyên dương: ");

// Chuyển đổi số nguyên dương thành chuỗi để xử lý
let str = n.toString();

// Khởi tạo biến để lưu số đảo ngược
let reverseStr = "";

// Dùng vòng lặp để đảo ngược các ký tự trong chuỗi
for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
}

// In ra số đảo ngược lên màn hình console
console.log("Số đảo ngược của " + n + " là: " + reverseStr);
