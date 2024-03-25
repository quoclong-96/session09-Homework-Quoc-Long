let n = parseInt(prompt("Nhập vào số nguyên dương n: ")); // Yêu cầu người dùng nhập vào số nguyên dương n
let count = 0; // Khởi tạo biến đếm số nguyên tố đã tìm được
let number = 2; // Bắt đầu kiểm tra từ số đầu tiên là 2

// Lặp cho đến khi tìm được n số nguyên tố
while (count < n) {
    let isPrime = true; // Giả sử số hiện tại là số nguyên tố

    // Kiểm tra xem số hiện tại có phải là số nguyên tố không
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // Duyệt từ 2 đến căn bậc hai của số hiện tại
        if (number % i === 0) {
            // Nếu số hiện tại chia hết cho một số khác ngoài 1 và chính nó
            isPrime = false; // Số hiện tại không phải là số nguyên tố
            break; // Thoát khỏi vòng lặp
        }
    }

    if (isPrime) {
        // Nếu số hiện tại là số nguyên tố
        console.log(number); // In số nguyên tố ra màn hình console
        count++; // Tăng biến đếm lên một
    }

    number++; // Kiểm tra số tiếp theo
}
