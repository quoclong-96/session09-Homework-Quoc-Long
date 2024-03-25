// let number = +prompt("Nhap vao so nguyen duong:");

// if (number > 0 && Number.isInteger(number)) {
//     for (let i = 1; i <= number; i += 1) {
//         if (i % 2 === 0) {
//             console.log(i + " ^ 2 = " + i * i);
//         }
//     }
// } else {
//     console.log("Giá trị không hợp lệ. Vui lòng nhập vào số nguyên dương");
// }

//Cách 2
let number = +prompt("Nhap vao so nguyen duong:");

if (number > 0 && Number.isInteger(number)) {
    for (let i = 2; i <= number; i += 2) {
        // Tính bình phương và in ra màn hình console
        console.log(i + " ^ 2 = " + i * i);
    }
} else {
    console.log("Giá trị không hợp lệ. Vui lòng nhập vào số nguyên dương");
}
