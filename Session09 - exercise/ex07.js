let number = parseInt(prompt("Nhập vào một số:"));

// Khởi tạo biến để kiểm tra số nguyên tố
let isPrime = true;

// Kiểm tra số nguyên tố
if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

// In kết quả ra màn hình console
if (isPrime) {
    console.log(number + " là số nguyên tố.");
} else {
    console.log(number + " không là số nguyên tố.");
}
