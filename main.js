// Bài tập 1
// 💰 Tính tiền lương nhân viên
// 💡Gợi ý:
// Công thức: Lương = Lương 1 ngày * số ngày làm
// Kiến thức áp dụng:

// Tìm tới thẻ và lấy giá trị
// Tạo hàm cơ bản
// Gắn sự kiện click cho button
// Thay đổi nội dung cho thẻ
// Xử lý load trang với button của form

document.getElementById("btnClick").onclick = function () {
    console.log("clicked");
    let tienLuong = 100000;
    let soNgay = document.getElementById("nhapSoNgay").value * 1;
    console.log(tienLuong);
    console.log(soNgay);
    let tongTienLuong = 0;
    tongTienLuong = tienLuong * soNgay;
    document.getElementById("ketQua1").innerHTML = `Tiền lương tháng này của bạn là ${tongTienLuong.toLocaleString
        ("vi", {
            style: "currency",
            currency: "VND",
        })
        }`;
}

// // Bài tập 2
// // Tính giá trị trung bình
// 💡Gợi ý:
// Kiến thức áp dụng:

// Tìm tới thẻ và lấy giá trị
// Tạo hàm cơ bản
// Gắn sự kiện click cho button
// Thay đổi nội dung cho thẻ
// Xử lý load trang với button của form
// Xử lý ép kiểu dữ liệu

document.getElementById("btnClick1").onclick = function () {
    console.log("clicked");
    let soThuNhat = document.getElementById("soThuNhat").value * 1;
    let soThuHai = document.getElementById("soThuHai").value * 1;
    let soThuBa = document.getElementById("soThuBa").value * 1;
    let soThuTu = document.getElementById("soThuTu").value * 1;
    let soThuNam = document.getElementById("soThuNam").value * 1;
    let soTrungBinh = 0;
    soTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
    document.getElementById("ketQua2").innerHTML = `Số trung bình là ${soTrungBinh}`;
}

// Bài tập 3
// Quy Đổi tiền
// 💡Gợi ý:
// Kiến thức áp dụng:

// Áp dụng các kiến thức như bài 1 và 2
// Giá USD mặc định 1 USD = 23500
// Có thể dùng thêm NumberFormat để số tiền hiển thị đẹp hơn: NumberFormat
// VD: new Intl.NumberFormat('vn-VN').format(23500); => 23, 500

document.getElementById("btnClick2").onclick = function () {
    console.log("clicked");
    let tienDo = document.getElementById("tienDo").value * 1;
    let tienViet = 0;
    tienViet = tienDo * 23500;
    document.getElementById("ketQua3").innerHTML = `Tiền Việt là ${tienViet.toLocaleString
        ("vi", {
            style: "currency",
            currency: "VND",
        })
        }`
}

// Bài tập 4
// 📏 Tính diện tích, chu vi hình chữ nhật
// 💡Gợi ý:
// Kiến thức áp dụng:

// Áp dụng các kiến thức như các bài trước
// Diện tích: dài x rộng
// Chu vi: (dài + rộng) x 2

document.getElementById("btnClick4").onclick = function () {
    console.log("clicked");
    let chieuDai = document.getElementById("chieuDai").value * 1;
    let chieuRong = document.getElementById("chieuRong").value * 1;
    let chuVi = 0;
    let dienTich = 0;
    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = (chieuDai * chieuRong);
    document.getElementById("ketQua4").innerHTML = `Diện tích là ${dienTich} ; Chu vi là ${chuVi}`
}
// Bài tập 5
// 🧮 Tính tổng 2 ký số
// 💡Gợi ý:
// Kiến thức áp dụng:
// Áp dụng cách tính như demo tổng 3 ký số trên lớp

document.getElementById("btnClick5").onclick = function () {
    let number = document.getElementById("number").value * 1;
    if (number >= 10 && number <= 99) {
        let hangChuc = parseInt(number / 10);
        let hangDonVi = number % 10;
        tong = 0;
        tong = hangChuc + hangDonVi;
        document.getElementById("ketQua5").innerHTML = `Tổng là ${tong}`
    } else {
        document.getElementById("ketQua5").innerHTML = `Vui lòng nhập số 2 chữ số`
    }
}