webpackJsonp([1,4],Array(18).concat([
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    text-align: center;\r\n    color: blue;\r\n}\r\n.type{\r\n     padding-left: 4cm;\r\n }\r\n #divQues {\r\n    height: 350px;\r\n    border-width: 3px;\r\n   \r\n}\r\n\r\n#panel_star {\r\n    height: 265px;\r\n    border-width: 3px;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\nh2.type1 {\r\n    padding-left: 2cm;\r\n    color: green;\r\n}\r\n\r\n\r\np{\r\n    padding-left: 2cm;\r\n    padding-top: 1cm;\r\n    font-size: 20px;\r\n}\r\n#submit_ans{\r\n    padding-left: 4cm;\r\n    padding-top: 1cm;\r\n}\r\n\r\n#ketqua{\r\n    width: 80px;\r\n    text-align: center;\r\n}\r\n\r\n#kiemtra{\r\n\r\n    font-size: 30px;\r\n    border: 2px double;\r\n    background:#66FFCC;\r\n    height: 50px;\r\n    width: 150px;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h1, h3 {\r\n    text-align: center;\r\n\r\n}\r\n#start { \r\n    border: 2px solid;\r\n    border-radius: 10px;\r\n    font-size: 20px;\r\n    color: blue;\r\n    width: 200px;\r\n    height: 60px;\r\n    background: #A9BCF5;\r\n    margin-left: 500px;\r\n}\r\n\r\n#divQues{\r\n    text-align: center;\r\n}\r\n\r\n.score{\r\n    height: 150px;\r\n}\r\n\r\n#diem, #scoreValue, #begin{\r\n    text-align: center;\r\n    color: red;   \r\n}\r\n\r\n#kiemtra{\r\n    font-size: 30px;\r\n    border: 2px double;\r\n    background:#66FFCC;\r\n    height: 50px;\r\n    width: 150px;\r\n    margin-left: 200px;\r\n}\r\n#guide{\r\n    height: 395px;\r\n}\r\n.panel{\r\n    height: 150px;\r\n    width: 150px;\r\n    margin-left: 100px;\r\n}\r\n\r\nh4{\r\n    text-align: center; \r\n}\r\n\r\ninput{\r\n    font-size: 150%;\r\n    height: 150%;\r\n    width: 150%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "<section>   \r\n    <h1>Đề kiểm tra tổng hợp</h1>\r\n    <div *ngIf=\"showGuide\">\r\n        <div id = \"guide\">\r\n        <h3>Bài kiểm tra có 10 câu hỏi, mỗi câu trả lời đúng sẽ nhận được 1 điểm</h3>\r\n        <h3>Chúc các em làm bài tốt!</h3><br>\r\n        <button type=\"button\" (click)=\"cauhoi();\" id=\"start\">Bắt đầu làm bài</button>\r\n    </div>\r\n    </div>\r\n    <div class=\"container\" scrolling=\"yes\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3\"></div>\r\n            <div class=\"col-sm-6\">\r\n                <div id=\"divQues\"></div>\r\n                 <div *ngIf=\"showChoiceCheck\">\r\n                    <button type=\"button\" (click)=\"checkAns();\" id=\"kiemtra\">Nộp bài</button><br>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n                <div *ngIf=\"showChoice\">\r\n                    <div class=\"score\">\r\n                        <div class=\"kdiem\">\r\n                            <div class=\"panel panel-body panel-primary\">\r\n                                <h2 id=\"diem\">Điểm</h2>\r\n                                <div *ngIf=\"first\">\r\n                                    <h2 id=\"begin\">0</h2>\r\n                                </div>\r\n                                <h2 id=\"scoreValue\"></h2>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "table, th, td {\r\n    border: 2px solid green;\r\n    border-collapse: collapse;\r\n    text-align: center;\r\n    color: #DF013A;\r\n    background: #E0F2F7;\r\n    font-size: 150%;  \r\n}\r\n\r\ntd {\r\n    width: 150px;\r\n    height: 50px;\r\n}\r\n\r\n#divQues {\r\n    height: 300px;\r\n    border-width: 3px;  \r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n    color: blue;\r\n}\r\n\r\nh2{\r\n    padding-left: 4cm;\r\n}\r\n\r\n#tableCheck{\r\n    padding-left: 4cm;\r\n    \r\n}\r\n\r\nform {\r\n    padding-left: 3cm;\r\n}\r\n\r\nbutton {\r\n    width: 100px;\r\n    font-size: 30px;\r\n    border: double;\r\n    border-color: royalblue;\r\n    background:#66FFCC;\r\n    height: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return giaiTri; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var giaiTri = (function () {
    function giaiTri() {
        this.titles = [
            "TRUYỆN NGẮN",
            "QUÀ TẶNG CUỘC SỐNG"
        ];
        this.stories = [
            "Ba lưỡi rìu",
            "Sự tích hoa sen",
            "Miếng trầu kì diệu",
            "Cậu bé Tích Chu",
            "Bát canh hẹ",
            "Ăn khế trả vàng",
            "Con cóc không vâng lời",
            "Cô bé hai mắt"
        ];
        this.videos = [
            "Mừng sinh nhật",
            "Ăn cơm với muối",
            "Thư của bố",
            "Tấm vé về tuổi thơ",
            "Lời nói dối",
            "Sao băng",
            "Trái tim của bố",
            "Lớp học hy vọng"
        ];
    }
    return giaiTri;
}());
giaiTri = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'giai-tri',
        styles: [__webpack_require__(193)],
        template: "\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h2>\n                <b>\n                    <a href=\"http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam\" target=\"_blank\" title=\"Truy\u1EC7n Ng\u1EAFn\">TRUY\u1EC6N NG\u1EAEN</a>\n                </b>\n                </h2>\n                <div class=\"list-group\">\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\">\n                        <a href=\"http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam/ba-luoi-riu.html\" target=\"_blank\">Ba l\u01B0\u1EE1i r\u00ECu</a>\n                    </button>\n                    </b>\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\">\n                        <a href=\"http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam/su-tich-hoa-sen.html\" target=\"_blank\">S\u1EF1 t\u00EDch hoa sen</a>\n                    </button>\n                    </b>\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\">\n                        <a href=\"http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam/mieng-trau-ky-dieu.html\" target=\"_blank\">Mi\u1EBFng tr\u1EA7u k\u00EC di\u1EC7u</a>\n                    </button>\n                    </b>\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\">\n                        <a href=\"http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam/cau-be-tich-chu.html\" target=\"_blank\">C\u1EADu b\u00E9 T\u00EDch Chu</a>\n                    </button>\n                    </b>\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\">\n                        <a href=\"http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam/bat-canh-he.html\" target=\"_blank\">B\u00E1t canh h\u1EB9</a>\n                    </button>\n                    </b>\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\">\n                        <a href=\"http://truyencotich.vn/truyen-co-tich/co-tich-viet-nam/an-khe-tra-vang.html\" target=\"_blank\">\u0102n kh\u1EBF tr\u1EA3 v\u00E0ng</a>\n                    </button>\n                    </b>\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\">\n                        <a href=\"http://truyencotich.vn/truyen-co-tich/co-tich-the-gioi/con-coc-khong-vang-loi.html\" target=\"_blank\">Con c\u00F3c kh\u00F4ng v\u00E2ng l\u1EDDi</a>\n                    </button>\n                    </b>\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\">\n                        <a href=\"http://truyencotich.vn/truyen-co-tich/co-tich-the-gioi/co-be-hai-mat.html\" target=\"_blank\">C\u00F4 b\u00E9 hai m\u1EAFt</a>\n                    </button>\n                    </b>\n                </div>\n                <strong>\n                <h3> \n                    <a href=\"http://truyencotich.vn/\" target=\"_blank\">Xem th\u00EAm truy\u1EC7n ng\u1EAFn</a>\n                </h3> \n                </strong>\n            </div>\n            <div class=\"col-md-6\">\n                <h2>\n                <b>\n                    <a href=\"https://www.youtube.com/channel/UCGk3yw5k_xQUS_KSDCC6Nhw/videos\" target=\"_blank\" title=\"Qu\u00E0 T\u1EB7ng Cu\u1ED9c S\u1ED1ng\">QU\u00C0 T\u1EB6NG CU\u1ED8C S\u1ED0NG</a>\n                </b>\n                </h2>\n                <div class=\"list-group\">\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\" >\n                        <a href=\"https://www.youtube.com/watch?v=OjiXYFaqufU\" target=\"_blank\">M\u1EEBng sinh nh\u1EADt</a>\n                    </button>\n                    </b>\n\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\" >\n                        <a href=\"https://www.youtube.com/watch?v=_XyfuoA4ewQ\">\u0102n c\u01A1m v\u1EDBi mu\u1ED1i</a>\n                    </button>\n                    </b>\n\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\" >\n                        <a href=\"https://www.youtube.com/watch?v=Llr5vMByRaw\" target=\"_blank\">Th\u01B0 c\u1EE7a b\u1ED1</a>\n                    </button>\n                    </b>\n\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\" >\n                        <a href=\"https://www.youtube.com/watch?v=0pXXMimkN9E\" target=\"_blank\">T\u1EA5m v\u00E9 v\u1EC1 tu\u1ED5i th\u01A1</a>\n                    </button>\n                    </b>\n\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\" >\n                        <a href=\"https://www.youtube.com/watch?v=60o5PqwIAjM\" target=\"_blank\">L\u1EDDi n\u00F3i d\u1ED1i</a>\n                    </button>\n                    </b>\n\n                    <b><button type=\"button\" class=\"list-group-item\" >\n                        <a href=\"https://www.youtube.com/watch?v=6rCxWT93bqc\" target=\"_blank\">Sao b\u0103ng</a>\n                    </button>\n                    </b>\n\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\" >\n                        <a href=\"https://www.youtube.com/watch?v=hK2o8ciHtDA\" target=\"_blank\">Tr\u00E1i tim c\u1EE7a b\u1ED1</a>\n                    </button> \n                    </b>\n\n                    <b>\n                    <button type=\"button\" class=\"list-group-item\" >\n                        <a href=\"https://www.youtube.com/watch?v=M5qOfb1Lk84\" target=\"_blank\">L\u1EDBp h\u1ECDc hy v\u1ECDng</a>\n                    </button> \n                    </b>\n\n                </div>\n                <strong>\n                <h3>\n                    <a href=\"https://www.youtube.com/channel/UCGk3yw5k_xQUS_KSDCC6Nhw/videos\" target=\"_blank\">Xem th\u00EAm qu\u00E0 t\u1EB7ng cu\u1ED9c s\u1ED1ng</a>\n                </h3> \n                </strong>\n            </div>\n        </div>\n    </div>\n    ",
    })
], giaiTri);

//# sourceMappingURL=giaitri.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return home; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var home = (function () {
    function home() {
        this.titles = ["Luyện tập", "Kiểm tra", "Giải trí"];
    }
    return home;
}());
home = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'home',
        template: __webpack_require__(199),
        styles: [__webpack_require__(195)],
    })
], home);

//# sourceMappingURL=home.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return de1; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var de1 = (function () {
    function de1() {
        this.tests = [
            {
                name_que: "Thực hiện phép tính",
                name_link: "",
                conten_ques: "7 + 3 = ??? ",
                input_ans: "",
                true_ans: 10
            },
            {
                name_que: "Số lẻ lớn nhất có 2 chữ số là bao nhiêu?",
                name_link: "",
                conten_ques: "",
                input_ans: "",
                true_ans: 99
            },
            {
                name_que: "Đếm số hình tam giác hiện trên hình vẽ.(Chỉ đếm những hình được nối bởi 3 điểm)",
                name_link: "./assets/image/tamgiac2.jpg",
                conten_ques: "",
                input_ans: "",
                true_ans: 5
            },
            {
                name_que: "Số liền trước của 63 là: ",
                name_link: "",
                conten_ques: "",
                input_ans: "",
                true_ans: 62
            },
            {
                name_que: "Số lớn nhất trong các số sau ?",
                name_link: "",
                conten_ques: "56, 45, 34, 78, 49, 23",
                input_ans: "",
                true_ans: 78
            },
            {
                name_que: "Thực hiện phép tính sau.",
                name_link: "",
                conten_ques: "67 - 48 = ???",
                input_ans: "",
                true_ans: 19
            },
            {
                name_que: "Nếu hôm nay là Chủ Nhật thì ngày mai là thứ mấy? (Chỉ cần ghi số)",
                name_link: "",
                conten_ques: "",
                input_ans: "",
                true_ans: 2
            },
            {
                name_que: "Đếm số cá xuất hiện trong hình.",
                name_link: "./assets/image/3ca.png",
                conten_ques: "",
                input_ans: "",
                true_ans: 3
            },
            {
                name_que: "Số lẻ bé nhất có hai chữ số là: ",
                name_link: "",
                conten_ques: "",
                input_ans: "",
                true_ans: 11
            },
            {
                name_que: "Thực hiện phép tính sau.",
                name_link: "",
                conten_ques: "12 + 30 = ???",
                input_ans: "",
                true_ans: 42
            }
        ];
        this.showGuide = true;
        this.showChoice = false;
        this.showChoiceCheck = false;
        this.first = true;
    }
    de1.prototype.imgTrue = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/dung.png");
        document.getElementById(id).appendChild(img);
    };
    de1.prototype.imgFalse = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/sai.png");
        document.getElementById(id).appendChild(img);
    };
    de1.prototype.cauhoi = function () {
        this.showGuide = false;
        for (var i = 0; i < this.tests.length; i++) {
            var d1 = document.createElement("DIV");
            d1.setAttribute("class", "panel panel-body panel-primary");
            d1.setAttribute("id", "q" + i);
            document.getElementById("divQues").appendChild(d1); // thêm panel vào col
            // tạo tên câu hỏi h3
            var h3 = document.createElement("H3");
            var txt1 = document.createTextNode(this.tests[i].name_que);
            h3.appendChild(txt1);
            document.getElementById("q" + i).appendChild(h3); // thêm h3 vào panel
            // tạo hình ảnh
            var img = document.createElement("IMG");
            img.setAttribute("src", this.tests[i].name_link);
            document.getElementById("q" + i).appendChild(img); // thêm img vào panel
            //tạo nội dung nếu là tính toán h2
            var h2 = document.createElement("H2");
            var txt2 = document.createTextNode(this.tests[i].conten_ques);
            h2.appendChild(txt2);
            document.getElementById("q" + i).appendChild(h2); // thêm h2 vào panel
            // tạo input h2, input
            var ip = document.createElement("INPUT");
            ip.setAttribute("type", "text");
            ip.setAttribute("id", "ip" + i);
            ip.setAttribute("style", "text-align: center ");
            document.getElementById("q" + i).appendChild(ip);
        }
        this.showChoice = true;
        this.showChoiceCheck = true;
    };
    de1.prototype.checkAns = function () {
        this.first = false;
        this.showChoiceCheck = false;
        var j;
        var diem = 0;
        for (j = 0; j < this.tests.length; j++) {
            var txtkq = document.getElementById("ip" + j).value;
            if (parseInt(txtkq) == this.tests[j].true_ans) {
                this.imgTrue("q" + j);
                diem = diem + 1;
            }
            else {
                this
                    .imgFalse("q" + j);
                diem = diem + 0;
            }
        }
        typeof diem;
        var d1 = diem.toString();
        var txt2 = document.createTextNode(d1);
        document.getElementById("scoreValue").appendChild(txt2);
    };
    return de1;
}());
de1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'de1',
        template: __webpack_require__(27),
        styles: [__webpack_require__(26)],
    })
], de1);

//# sourceMappingURL=de1.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return de2; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var de2 = (function () {
    function de2() {
        this.tests = [
            {
                name_que: "Thực hiện phép tính",
                name_link: "",
                conten_ques: "80 + 20 = ???",
                input_ans: "",
                true_ans: 100
            },
            {
                name_que: "Tìm số nhỏ nhất trong các số sau.",
                name_link: "",
                conten_ques: "74, 56, 52, 45, 90, 37",
                input_ans: "",
                true_ans: 37
            },
            {
                name_que: "Thực hiện phép tính",
                name_link: "",
                conten_ques: "50 + 10 + 6 = ??? ",
                input_ans: "",
                true_ans: 66
            },
            {
                name_que: "Nam có 9 viên bi. Tùng có 23 viên bi. Hỏi Tùng có nhiều hơn Nam mấy viên vi?",
                name_link: "",
                conten_ques: "",
                input_ans: "",
                true_ans: 14
            },
            {
                name_que: "Có bao nhiêu con thỏ trong hình ?",
                name_link: "./assets/image/3nam.jpg",
                conten_ques: "",
                input_ans: "",
                true_ans: 4
            },
            {
                name_que: "Thực hiện phép tính sau.",
                name_link: "",
                conten_ques: "77 - 47 = ???",
                input_ans: "",
                true_ans: 30
            },
            {
                name_que: "Thực hiện phép tính sau.",
                name_link: "",
                conten_ques: "32 + 20 = ???",
                input_ans: "",
                true_ans: 52
            },
            {
                name_que: "Đếm số nấm xuất hiện trong hình.",
                name_link: "./assets/image/4nam.jpg",
                conten_ques: "",
                input_ans: "",
                true_ans: 4
            },
            {
                name_que: "Số liền sau 99 là:",
                name_link: "",
                conten_ques: "",
                input_ans: "",
                true_ans: 100
            },
            {
                name_que: "Có bao nhiêu đồng hồ chỉ hơn 4h ?",
                name_link: "./assets/image/hon4h.png",
                conten_ques: "",
                input_ans: "",
                true_ans: 3
            }
        ];
        this.showGuide = true;
        this.showChoice = false;
        this.showChoiceCheck = false;
        this.first = true;
    }
    de2.prototype.imgTrue = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/dung.png");
        document.getElementById(id).appendChild(img);
    };
    de2.prototype.imgFalse = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/sai.png");
        document.getElementById(id).appendChild(img);
    };
    de2.prototype.cauhoi = function () {
        this.showGuide = false;
        for (var i = 0; i < this.tests.length; i++) {
            var d1 = document.createElement("DIV");
            d1.setAttribute("class", "panel panel-body panel-primary");
            d1.setAttribute("id", "q" + i);
            document.getElementById("divQues").appendChild(d1); // thêm panel vào col
            // tạo tên câu hỏi h3
            var h3 = document.createElement("H3");
            var txt1 = document.createTextNode(this.tests[i].name_que);
            h3.appendChild(txt1);
            document.getElementById("q" + i).appendChild(h3); // thêm h3 vào panel
            // tạo hình ảnh
            var img = document.createElement("IMG");
            img.setAttribute("src", this.tests[i].name_link);
            document.getElementById("q" + i).appendChild(img); // thêm img vào panel
            //tạo nội dung nếu là tính toán h2
            var h2 = document.createElement("H2");
            var txt2 = document.createTextNode(this.tests[i].conten_ques);
            h2.appendChild(txt2);
            document.getElementById("q" + i).appendChild(h2); // thêm h2 vào panel
            // tạo input h2, input
            var ip = document.createElement("INPUT");
            ip.setAttribute("type", "text");
            ip.setAttribute("id", "ip" + i);
            ip.setAttribute("style", "text-align: center");
            document.getElementById("q" + i).appendChild(ip);
        }
        this.showChoice = true;
        this.showChoiceCheck = true;
    };
    de2.prototype.checkAns = function () {
        this.first = false;
        this.showChoiceCheck = false;
        var j;
        var diem = 0;
        for (j = 0; j < this.tests.length; j++) {
            var txtkq = document.getElementById("ip" + j).value;
            if (parseInt(txtkq) == this.tests[j].true_ans) {
                this.imgTrue("q" + j);
                diem = diem + 1;
            }
            else {
                this
                    .imgFalse("q" + j);
                diem = diem + 0;
            }
        }
        typeof diem;
        var d1 = diem.toString();
        var txt2 = document.createTextNode(d1);
        document.getElementById("scoreValue").appendChild(txt2);
    };
    return de2;
}());
de2 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'de2',
        template: __webpack_require__(27),
        styles: [__webpack_require__(26)],
    })
], de2);

//# sourceMappingURL=de2.js.map

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return de3; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var de3 = (function () {
    function de3() {
        this.tests = [
            {
                name_que: "Thực hiện phép tính",
                name_link: "",
                conten_ques: "30 + 40 = ??? ",
                input_ans: "",
                true_ans: 70
            },
            {
                name_que: "Gia đình Hải gồm có bố mẹ Hải, anh trai Hải, em gái Hải và Hải. Hỏi gia đình Hải có tất cả mấy người?",
                name_link: "",
                conten_ques: "",
                input_ans: "",
                true_ans: 5
            },
            {
                name_que: "Thực hiện phép tính",
                name_link: "",
                conten_ques: "26 + 32 = ??? ",
                input_ans: "",
                true_ans: 58
            },
            {
                name_que: "Hình dưới có bao nhiêu hình tròn màu đỏ",
                name_link: "./assets/image/3do.jpg",
                conten_ques: "",
                input_ans: "",
                true_ans: 3
            },
            {
                name_que: "Số lớn nhất trong các số sau ?",
                name_link: "",
                conten_ques: "56, 45, 34, 78, 49, 23",
                input_ans: "",
                true_ans: 78
            },
            {
                name_que: "Tìm số nhỏ nhất trong dãy số sau ?",
                name_link: "",
                conten_ques: "82, 56, 27, 38, 40, 28",
                input_ans: "",
                true_ans: 27
            },
            {
                name_que: "Thực hiện phép tính sau.",
                name_link: "",
                conten_ques: "32 + 48 = ???",
                input_ans: "",
                true_ans: 80
            },
            {
                name_que: "Đếm số đồng hồ xuất hiện trong hình.",
                name_link: "./assets/image/4dongho.jpg",
                conten_ques: "",
                input_ans: "",
                true_ans: 4
            },
            {
                name_que: "Điền số thích hợp",
                name_link: "",
                conten_ques: "13cm + 34 cm = ??? cm",
                input_ans: "",
                true_ans: 47
            },
            {
                name_que: "Thực hiện phép tính sau.",
                name_link: "",
                conten_ques: "29 + 36= ???",
                input_ans: "",
                true_ans: 65
            }
        ];
        this.showGuide = true;
        this.showChoice = false;
        this.showChoiceCheck = false;
        this.first = true;
    }
    de3.prototype.imgTrue = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/dung.png");
        document.getElementById(id).appendChild(img);
    };
    de3.prototype.imgFalse = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/sai.png");
        document.getElementById(id).appendChild(img);
    };
    de3.prototype.cauhoi = function () {
        this.showGuide = false;
        for (var i = 0; i < this.tests.length; i++) {
            var d1 = document.createElement("DIV");
            d1.setAttribute("class", "panel panel-body panel-primary");
            d1.setAttribute("id", "q" + i);
            document.getElementById("divQues").appendChild(d1); // thêm panel vào col
            // tạo tên câu hỏi h3
            var h3 = document.createElement("H3");
            var txt1 = document.createTextNode(this.tests[i].name_que);
            h3.appendChild(txt1);
            document.getElementById("q" + i).appendChild(h3); // thêm h3 vào panel
            // tạo hình ảnh
            var img = document.createElement("IMG");
            img.setAttribute("src", this.tests[i].name_link);
            document.getElementById("q" + i).appendChild(img); // thêm img vào panel
            //tạo nội dung nếu là tính toán h2
            var h2 = document.createElement("H2");
            var txt2 = document.createTextNode(this.tests[i].conten_ques);
            h2.appendChild(txt2);
            document.getElementById("q" + i).appendChild(h2); // thêm h2 vào panel
            // tạo input h2, input
            var ip = document.createElement("INPUT");
            ip.setAttribute("type", "text");
            ip.setAttribute("id", "ip" + i);
            ip.setAttribute("style", "text-align: center");
            document.getElementById("q" + i).appendChild(ip);
        }
        this.showChoice = true;
        this.showChoiceCheck = true;
    };
    de3.prototype.checkAns = function () {
        this.first = false;
        this.showChoiceCheck = false;
        var j;
        var diem = 0;
        for (j = 0; j < this.tests.length; j++) {
            var txtkq = document.getElementById("ip" + j).value;
            if (parseInt(txtkq) == this.tests[j].true_ans) {
                this.imgTrue("q" + j);
                diem = diem + 1;
            }
            else {
                this
                    .imgFalse("q" + j);
                diem = diem + 0;
            }
        }
        typeof diem;
        var d1 = diem.toString();
        var txt2 = document.createTextNode(d1);
        document.getElementById("scoreValue").appendChild(txt2);
    };
    return de3;
}());
de3 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'de3',
        template: __webpack_require__(27),
        styles: [__webpack_require__(26)],
    })
], de3);

//# sourceMappingURL=de3.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return de4; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var de4 = (function () {
    function de4() {
        this.tests = [
            {
                name_que: "Hình dưới có mấy quả táo",
                name_link: "./assets/image/3tao.jpg",
                conten_ques: "",
                input_ans: "",
                true_ans: 3
            },
            {
                name_que: "Thực hiện phép tính",
                name_link: "",
                conten_ques: "26 + 46 = ??? ",
                input_ans: "",
                true_ans: 72
            },
            {
                name_que: "Đếm số hình tam giác hiện trên hình vẽ.(Chỉ đếm những hình được nối bởi 3 điểm)",
                name_link: "./assets/image/tamgiac1.jpg",
                conten_ques: "",
                input_ans: "",
                true_ans: 4
            },
            {
                name_que: "Thực hiện phép tính",
                name_link: "",
                conten_ques: "86 - 40 = ??? ",
                input_ans: "",
                true_ans: 46
            },
            {
                name_que: "Số nhỏ nhất trong các số sau ?",
                name_link: "",
                conten_ques: "56, 45, 34, 78, 49, 23",
                input_ans: "",
                true_ans: 23
            },
            {
                name_que: "Thực hiện phép tính sau.",
                name_link: "",
                conten_ques: "67 - 47 = ???",
                input_ans: "",
                true_ans: 20
            },
            {
                name_que: "Sau ngày 23 là ngày bao nhiêu của tháng?",
                name_link: "",
                conten_ques: "",
                input_ans: "",
                true_ans: 24
            },
            {
                name_que: "Thực hiện phép tính sau.",
                name_link: "",
                conten_ques: "67 - 20 = ???",
                input_ans: "",
                true_ans: 47
            },
            {
                name_que: "Tìm số lớn nhất trong dãy số sau",
                name_link: "",
                conten_ques: "40, 13, 80, 28, 30, 46",
                input_ans: "",
                true_ans: 80
            },
            {
                name_que: "Thực hiện phép tính sau.",
                name_link: "",
                conten_ques: "80 cm- 30 cm = ? cm",
                input_ans: "",
                true_ans: 50
            }
        ];
        this.showGuide = true;
        this.showChoice = false;
        this.showChoiceCheck = false;
        this.first = true;
    }
    de4.prototype.imgTrue = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/dung.png");
        document.getElementById(id).appendChild(img);
    };
    de4.prototype.imgFalse = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/sai.png");
        document.getElementById(id).appendChild(img);
    };
    de4.prototype.cauhoi = function () {
        this.showGuide = false;
        for (var i = 0; i < this.tests.length; i++) {
            var d1 = document.createElement("DIV");
            d1.setAttribute("class", "panel panel-body panel-primary");
            d1.setAttribute("id", "q" + i);
            document.getElementById("divQues").appendChild(d1); // thêm panel vào col
            // tạo tên câu hỏi h3
            var h3 = document.createElement("H3");
            var txt1 = document.createTextNode(this.tests[i].name_que);
            h3.appendChild(txt1);
            document.getElementById("q" + i).appendChild(h3); // thêm h3 vào panel
            // tạo hình ảnh
            var img = document.createElement("IMG");
            img.setAttribute("src", this.tests[i].name_link);
            document.getElementById("q" + i).appendChild(img); // thêm img vào panel
            //tạo nội dung nếu là tính toán h2
            var h2 = document.createElement("H2");
            var txt2 = document.createTextNode(this.tests[i].conten_ques);
            h2.appendChild(txt2);
            document.getElementById("q" + i).appendChild(h2); // thêm h2 vào panel
            // tạo input h2, input
            var ip = document.createElement("INPUT");
            ip.setAttribute("type", "text");
            ip.setAttribute("id", "ip" + i);
            ip.setAttribute("style", "text-align: center");
            document.getElementById("q" + i).appendChild(ip);
        }
        this.showChoice = true;
        this.showChoiceCheck = true;
    };
    de4.prototype.checkAns = function () {
        this.first = false;
        this.showChoiceCheck = false;
        var j;
        var diem = 0;
        for (j = 0; j < this.tests.length; j++) {
            var txtkq = document.getElementById("ip" + j).value;
            if (parseInt(txtkq) == this.tests[j].true_ans) {
                this.imgTrue("q" + j);
                diem = diem + 1;
            }
            else {
                this
                    .imgFalse("q" + j);
                diem = diem + 0;
            }
        }
        typeof diem;
        var d1 = diem.toString();
        var txt2 = document.createTextNode(d1);
        document.getElementById("scoreValue").appendChild(txt2);
    };
    return de4;
}());
de4 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'de4',
        template: __webpack_require__(27),
        styles: [__webpack_require__(26)],
    })
], de4);

//# sourceMappingURL=de4.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return de5; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var de5 = (function () {
    function de5() {
        this.tests = [
            {
                name_que: "Có bao nhiêu con thỏ trong hình bên dưới",
                name_link: "./assets/image/tho8.jpg",
                conten_ques: "",
                input_ans: "",
                true_ans: 8
            },
            {
                name_que: "Thực hiện phép tính",
                name_link: "",
                conten_ques: "20 + 20 = ??? ",
                input_ans: "",
                true_ans: 40
            },
            {
                name_que: "Đếm số đoạn thẳng xuất hiện trên hình",
                name_link: "./assets/image/doanthang.jpg",
                conten_ques: "",
                input_ans: "",
                true_ans: 7
            },
            {
                name_que: "Số lớn nhất trong các số sau ?",
                name_link: "",
                conten_ques: "56, 45, 34, 78, 49, 23",
                input_ans: "",
                true_ans: 78
            },
            {
                name_que: "Đếm số điểm nằm bên trong hình tròn",
                name_link: "./assets/image/diem1.jpg",
                conten_ques: "",
                input_ans: "",
                true_ans: 6
            },
            {
                name_que: "Ngày 29/1/2005 là vào thứ mấy trong tuần? (Điền số vào ô dưới)",
                name_link: "./assets/image/lich2.png",
                conten_ques: "",
                input_ans: "",
                true_ans: 7
            },
            {
                name_que: "Thực hiện phép tính sau.",
                name_link: "",
                conten_ques: "40 - 20 = ???",
                input_ans: "",
                true_ans: 20
            },
            {
                name_que: "Số lớn nhất trong dãy số sau",
                name_link: "",
                conten_ques: "34, 56, 70, 29, 78",
                input_ans: "",
                true_ans: 78
            },
            {
                name_que: "Điền số thích hợp",
                name_link: "",
                conten_ques: "18 dm + 20 dm = ???",
                input_ans: "",
                true_ans: 38
            },
            {
                name_que: "Trang hái được 23 bông hoa. Phương hái được 18 bông hoa. Hỏi cả 2 bạn hái được tất cả bao nhiêu bông hoa",
                name_link: "",
                conten_ques: "23 bông hoa + 18 bông hoa = ???",
                input_ans: "",
                true_ans: 41
            }
        ];
        this.showGuide = true;
        this.showChoice = false;
        this.showChoiceCheck = false;
        this.first = true;
    }
    de5.prototype.imgTrue = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/dung.png");
        document.getElementById(id).appendChild(img);
    };
    de5.prototype.imgFalse = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/sai.png");
        document.getElementById(id).appendChild(img);
    };
    de5.prototype.cauhoi = function () {
        this.showGuide = false;
        for (var i = 0; i < this.tests.length; i++) {
            var d1 = document.createElement("DIV");
            d1.setAttribute("class", "panel panel-body panel-primary");
            d1.setAttribute("id", "q" + i);
            document.getElementById("divQues").appendChild(d1); // thêm panel vào col
            // tạo tên câu hỏi h3
            var h3 = document.createElement("H3");
            var txt1 = document.createTextNode(this.tests[i].name_que);
            h3.appendChild(txt1);
            document.getElementById("q" + i).appendChild(h3); // thêm h3 vào panel
            // tạo hình ảnh
            var img = document.createElement("IMG");
            img.setAttribute("src", this.tests[i].name_link);
            document.getElementById("q" + i).appendChild(img); // thêm img vào panel
            //tạo nội dung nếu là tính toán h2
            var h2 = document.createElement("H2");
            var txt2 = document.createTextNode(this.tests[i].conten_ques);
            h2.appendChild(txt2);
            document.getElementById("q" + i).appendChild(h2); // thêm h2 vào panel
            // tạo input h2, input
            var ip = document.createElement("INPUT");
            ip.setAttribute("type", "text");
            ip.setAttribute("id", "ip" + i);
            ip.setAttribute("style", "text-align: center");
            document.getElementById("q" + i).appendChild(ip);
        }
        this.showChoice = true;
        this.showChoiceCheck = true;
    };
    de5.prototype.checkAns = function () {
        this.first = false;
        this.showChoiceCheck = false;
        var j;
        var diem = 0;
        for (j = 0; j < this.tests.length; j++) {
            var txtkq = document.getElementById("ip" + j).value;
            if (parseInt(txtkq) == this.tests[j].true_ans) {
                this.imgTrue("q" + j);
                diem = diem + 1;
            }
            else {
                this
                    .imgFalse("q" + j);
                diem = diem + 0;
            }
        }
        typeof diem;
        var d1 = diem.toString();
        var txt2 = document.createTextNode(d1);
        document.getElementById("scoreValue").appendChild(txt2);
    };
    return de5;
}());
de5 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'de5',
        template: __webpack_require__(27),
        styles: [__webpack_require__(26)],
    })
], de5);

//# sourceMappingURL=de5.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return kiemTra; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var kiemTra = (function () {
    function kiemTra() {
        this.title = "Đề kiểm tra môn Toán 1";
    }
    return kiemTra;
}());
kiemTra = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'kiemtra',
        template: __webpack_require__(200),
        styles: [__webpack_require__(196)],
    })
], kiemTra);

//# sourceMappingURL=kiemtra.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dem10; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// mô tả câu hỏi

var dem10 = (function () {
    function dem10() {
        this.QUESTIONES = [{
                name_ques: "Có bao nhiêu con voi trên hình?",
                link_img: "./assets/image/1voi.PNG",
                true_ans: 1
            }, {
                name_ques: "Có bao nhiêu con muỗi ? ",
                link_img: "./assets/image/6muoi.PNG",
                true_ans: 6
            }, {
                name_ques: "Có bao nhiêu cầu vồng? ",
                link_img: "./assets/image/2cauVong.PNG",
                true_ans: 2
            }, {
                name_ques: "Có bao nhiêu quả bóng trên hình?",
                link_img: "./assets/image/3bong.PNG",
                true_ans: 3
            }, {
                name_ques: "Có bao nhiêu món quà ? ",
                link_img: "./assets/image/7qua.PNG",
                true_ans: 7
            }, {
                name_ques: "Có bao nhiêu người? ",
                link_img: "./assets/image/9nguoi.PNG",
                true_ans: 9
            }, {
                name_ques: "Có bao nhiêu con vịt?",
                link_img: "./assets/image/5vit.PNG",
                true_ans: 5
            }, {
                name_ques: "Có bao nhiêu con thỏ ?",
                link_img: "./assets/image/3nam.jpg",
                true_ans: 4
            }, {
                name_ques: "Có bao nhiêu cái chén?",
                link_img: "./assets/image/10chen.PNG",
                true_ans: 10
            }, {
                name_ques: "Có bao nhiêu con ngựa trong hình?",
                link_img: "./assets/image/8ngua.PNG",
                true_ans: 8
            }];
        this.showAns = true; // hiện câu hỏi 
        this.nextLess = false;
        this.count = 0; //số câu hỏi
        this.count_true = 0; //số câu trả lời đúng
        this.endPer = false; //trả lời đúng hết tất cả các câu hỏi
        this.endLess = false;
    }
    dem10.prototype.rightAns = function () {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    };
    dem10.prototype.checkAns = function (value) {
        if (parseInt(value) == this.QUESTIONES[this.count].true_ans) {
            this.rightAns(); // thêm 1 ngôi sao vào trong khung 
            this.count_true += 1; // số câu đúng tăng thêm 1
            if (this.count <= this.QUESTIONES.length)
                this.count += 1; // chỉ số đối tượng tăng lên 1
            if (this.count_true == this.QUESTIONES.length) {
                this.showAns = false;
                this.nextLess = true;
                this.endPer = true;
            }
        }
        else {
            if (this.count <= this.QUESTIONES.length)
                this.count += 1;
        }
        if (this.count == this.QUESTIONES.length && this.endPer == false) {
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;
            if (this.count_true == 0) {
                var para = document.createElement("P");
                var t = document.createTextNode("Bạn không đạt được sao nào, cố gắng lần sau nhé!");
                para.appendChild(t);
                document.getElementById("panel_star").appendChild(para);
            }
        }
    };
    return dem10;
}());
dem10 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'dem10',
        styles: [__webpack_require__(192)],
        template: "\n<section>\n    <h1>B\u00E0i 1 - Ch\u01B0\u01A1ng 1: \u0110\u1EBFm trong ph\u1EA1m vi 10</h1>\n    <h2 class=\"type\" >\u0110i\u1EC1n s\u1ED1 th\u00EDch h\u1EE3p v\u00E0o \u00F4 tr\u1ED1ng.</h2>\n    <div class=\"container\">\n        <div class=\"row\">\n            <!-- c\u1ED9t hi\u1EC3n th\u1ECB c\u00E2u h\u1ECFi -->\n            <div class=\"col-sm-1\"></div>\n            <div class=\"col-sm-6 col-xs-12\">\n                <!-- c\u00E2u h\u1ECFi hi\u1EC7n trong panel -->\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\n                    <div *ngIf=\"showAns\">\n                        <!-- hi\u1EC3n th\u1ECB c\u00E2u h\u1ECFi -->\n                        <h3><strong>{{QUESTIONES[count].name_ques}}</strong></h3>\n                        <div id=\"getImgQues\"><img src={{QUESTIONES[count].link_img}} /></div>\n                        <div id=\"ans\" >\n                            <input type=\"text\" style=\"text-align: center\" #result id=\"ketqua\">\n                        </div>\n                        <div id=\"submit_ans\">\n                            <button type=\"button\" (click)=\"checkAns(result.value); result.value=''\" id=\"kiemtra\">Ki\u1EC3m tra</button>\n                        </div>\n                    </div>\n                    <!-- chuy\u1EC3n sang b\u00E0i ti\u1EBFp theo -->\n                    <div *ngIf=\"nextLess\">\n                        <div id=\"newLess\">\n                            <!-- ho\u00E0n th\u00E0nh c\u1EA3 10 c\u00E2u h\u1ECFi \u0111\u00FAng -->\n                            <div *ngIf=\"endPer\">\n                                <h2><strong>Ch\u00FAc m\u1EEBng b\u1EA1n \u0111\u00E3 ho\u00E0n th\u00E0nh xu\u1EA5t s\u1EAFc b\u00E0i h\u1ECDc 1!</strong></h2>\n                                <h2>B\u1EA1n \u0111\u00E3 \u0111\u1EA1t \u0111\u01B0\u1EE3c 10/10 sao.</h2>\n                                <h2><strong>Chuy\u1EC3n \u0111\u1EBFn b\u00E0i h\u1ECDc m\u1EDBi n\u00E0o</strong></h2>\n                            </div>\n                            <div *ngIf=\"endLess\">\n                                <h2><strong>Ch\u00FAc m\u1EEBng b\u1EA1n \u0111\u00E3 ho\u00E0n th\u00E0nh b\u00E0i h\u1ECDc 1!</strong></h2>\n                                <h2>B\u1EA1n \u0111\u00E3 \u0111\u1EA1t \u0111\u01B0\u1EE3c {{count_true}}/10 sao.</h2>\n                                <h2><strong>Chuy\u1EC3n \u0111\u1EBFn b\u00E0i h\u1ECDc m\u1EDBi n\u00E0o</strong></h2>\n                            </div>\n                            <h2><a routerLink=\"/sub10\" routerLinkActive=\"active\">B\u00E0i 2 - ch\u01B0\u01A1ng 1: Ph\u00E9p tr\u1EEB trong ph\u1EA1m vi 10. </a></h2>\n                            <router-outlet></router-outlet>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- c\u1ED9t hi\u1EC3n th\u1ECB s\u1ED1 sao -->\n            <div class=\"col-sm-4\">\n                <!-- s\u1ED1 sao hi\u1EC7n trong panel -->\n                <h2 class=\"type1\"><strong>S\u1ED1 sao \u0111\u1EA1t \u0111\u01B0\u1EE3c </strong></h2>\n                <br>\n                <div class=\"panel panel-body panel-primary\" id=\"panel_star\">\n                    <div id=\"starAward\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n  ",
    })
], dem10);

//# sourceMappingURL=dem10.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return minMax10; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var minMax10 = (function () {
    function minMax10() {
        this.MINMAX = [
            {
                name_ques: "Tìm số lớn nhất trong các số sau.",
                n_1: 5,
                n_2: 4,
                n_3: 9,
                n_4: 6,
                n_5: 2,
                true_ans: 9
            },
            {
                name_ques: "Tìm số lớn nhất trong các số sau.",
                n_1: 8,
                n_2: 3,
                n_3: 7,
                n_4: 6,
                n_5: 2,
                true_ans: 8
            },
            {
                name_ques: "Tìm số nhỏ nhất trong các số sau.",
                n_1: 6,
                n_2: 4,
                n_3: 2,
                n_4: 8,
                n_5: 5,
                true_ans: 2
            },
            {
                name_ques: "Tìm số nhỏ nhất trong các số sau.",
                n_1: 5,
                n_2: 1,
                n_3: 9,
                n_4: 6,
                n_5: 2,
                true_ans: 1
            },
            {
                name_ques: "Tìm số lớn nhất trong các số sau.",
                n_1: 7,
                n_2: 4,
                n_3: 1,
                n_4: 6,
                n_5: 3,
                true_ans: 7
            }
        ];
        this.count = 0;
        this.showAns = true;
        this.count_true = 0;
        this.nextLess = false;
        this.endPer = false;
        this.endLess = false;
    }
    minMax10.prototype.imgTrue = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/dung.png");
        document.getElementById(id).appendChild(img);
    };
    minMax10.prototype.imgFalse = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/sai.png");
        document.getElementById(id).appendChild(img);
    };
    minMax10.prototype.checkAns = function (value) {
        if (value == this.MINMAX[this.count].true_ans) {
            this.count_true += 1;
            this.imgTrue(this.count);
            if (this.count <= this.MINMAX.length)
                this.count += 1;
            if (this.count_true == 5) {
                this.showAns = false;
                this.endPer = true;
                this.nextLess = true;
            }
        }
        else {
            this.imgFalse(this.count);
            if (this.count <= this.MINMAX.length)
                this.count += 1;
        }
        if (this.count == 5 && this.endPer == false) {
            this.showAns = false;
            this.endLess = true;
            this.nextLess = true;
        }
    };
    return minMax10;
}());
minMax10 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'min-max-10',
        styles: [__webpack_require__(54)],
        template: __webpack_require__(201),
    })
], minMax10);

//# sourceMappingURL=min-max-10.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sub10; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var sub10 = (function () {
    function sub10() {
        this.showAns = true;
        this.nextLess = false;
        this.endPer = false;
        this.endLess = false;
        this.count = 0;
        this.count_true = 0;
        this.a = Math.floor((Math.random() * 10) + 1);
        this.b = Math.floor((Math.random() * 10) + 0);
        this.sub_1 = Math.max(this.a, this.b);
        this.sub_2 = Math.min(this.a, this.b);
    }
    sub10.prototype.rand = function () {
        var num_1 = Math.floor((Math.random() * 10) + 1);
        var num_2 = Math.floor((Math.random() * 10) + 0);
        this.sub_1 = Math.max(num_1, num_2);
        this.sub_2 = Math.min(num_1, num_2);
    };
    sub10.prototype.rightAns = function () {
        this.count_true += 1;
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    };
    sub10.prototype.checkAns = function (value) {
        if (value == '') {
            alert("Bạn phải điền giá trị vào ô trống!");
        }
        else if (value != ' ' && parseInt(value) == (this.sub_1 - this.sub_2)) {
            this.rightAns();
            this.rand();
            this.count += 1;
            if (this.count_true == 10) {
                this.showAns = false;
                this.endPer = true;
                this.nextLess = true;
            }
        }
        else if (value != '') {
            this.count += 1;
            this.rand();
        }
        if (this.count == 10 && this.endPer == false) {
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;
        }
    };
    return sub10;
}());
sub10 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'sub-10',
        styles: [__webpack_require__(18)],
        template: __webpack_require__(202),
    })
], sub10);

//# sourceMappingURL=sub-10.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sum10; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var sum10 = (function () {
    function sum10() {
        this.showAns = true;
        this.nextLess = false;
        this.endPer = false;
        this.endLess = false;
        this.count = 0;
        this.count_true = 0;
        this.num_1 = Math.floor((Math.random() * 5) + 1);
        this.num_2 = Math.floor((Math.random() * 5) + 0);
    }
    sum10.prototype.rightAns = function () {
        this.count_true += 1;
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    };
    sum10.prototype.checkAns = function (value) {
        if (value == '') {
            alert("Bạn phải điền giá trị vào ô trống!");
        }
        else if (value != ' ' && parseInt(value) == (this.num_1 + this.num_2)) {
            this.rightAns();
            this.num_1 = Math.floor((Math.random() * 5) + 1);
            this.num_2 = Math.floor((Math.random() * 5) + 0);
            this.count += 1;
            if (this.count_true == 10) {
                this.showAns = false;
                this.endPer = true;
                this.nextLess = true;
            }
        }
        else if (value != '') {
            this.num_1 = Math.floor((Math.random() * 5) + 1);
            this.num_2 = Math.floor((Math.random() * 5) + 0);
            this.count += 1;
        }
        if (this.count == 10 && this.endPer == false) {
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;
        }
    };
    return sum10;
}());
sum10 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'sum-10',
        styles: [__webpack_require__(18)],
        template: __webpack_require__(203),
    })
], sum10);

//# sourceMappingURL=sum-10.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lienTruocSau20; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var lienTruocSau20 = (function () {
    function lienTruocSau20() {
        this._num = Math.floor(Math.random() * 19 + 1);
        this._nameQues = "Tìm số liền trước của: ";
        this._nameAns = 'Số liền trước là : ';
        this.showAns = true;
        this.nextLess = false;
        this.endPer = false;
        this.endLess = false;
        this.count = 0;
        this.count_true = 0;
    }
    lienTruocSau20.prototype.init = function () {
        var _signal = Math.floor(Math.random() * 2 + 1);
        if (_signal == 1) {
            this._nameQues = "Tìm số liền trước của: ";
            this._nameAns = "Số liền trước là: ";
        }
        else {
            this._nameQues = "Tìm số liền sau của: ";
            this._nameAns = "Số liền sau là: ";
        }
        this._num = Math.floor(Math.random() * 19 + 1);
    };
    lienTruocSau20.prototype.rightAns = function () {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    };
    lienTruocSau20.prototype.checkAns = function (value) {
        if (this._nameQues == "Tìm số liền trước của: ") {
            if (value == '') {
                alert("Bạn phải điền giá trị vào ô trống!");
            }
            else if (parseInt(value) == (this._num - 1)) {
                this.rightAns();
                this.count += 1;
                this.count_true += 1;
                this.init();
                if (this.count_true == 10) {
                    this.showAns = false;
                    this.nextLess = true;
                    this.endPer = true;
                }
            }
            else {
                this.count += 1;
                this.init();
            }
            if (this.count == 10 && this.endPer == false) {
                this.showAns = false;
                this.nextLess = true;
                this.endLess = true;
            }
        }
        else {
            if (parseInt(value) == (this._num + 1)) {
                this.rightAns();
                this.count += 1;
                this.count_true += 1;
                this.init();
                if (this.count_true == 10) {
                    this.showAns = false;
                    this.nextLess = true;
                    this.endPer = true;
                }
            }
            else {
                this.count += 1;
                this.init();
            }
            if (this.count == 10 && this.endPer == false) {
                this.showAns = false;
                this.nextLess = true;
                this.endLess = true;
            }
        }
    };
    return lienTruocSau20;
}());
lienTruocSau20 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'lien-truoc-sau-20',
        styles: [__webpack_require__(107)],
        template: __webpack_require__(204),
    })
], lienTruocSau20);

//# sourceMappingURL=lientruoc-sau-20.js.map

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return minMax20; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var minMax20 = (function () {
    function minMax20() {
        this.MINMAX = [
            {
                name_ques: "Tìm số lớn nhất trong các số sau.",
                n_1: 15,
                n_2: 10,
                n_3: 9,
                n_4: 20,
                n_5: 13,
                true_ans: 20
            },
            {
                name_ques: "Tìm số lớn nhất trong các số sau.",
                n_1: 18,
                n_2: 12,
                n_3: 7,
                n_4: 10,
                n_5: 15,
                true_ans: 18
            },
            {
                name_ques: "Tìm số nhỏ nhất trong các số sau.",
                n_1: 16,
                n_2: 14,
                n_3: 20,
                n_4: 18,
                n_5: 15,
                true_ans: 14
            },
            {
                name_ques: "Tìm số nhỏ nhất trong các số sau.",
                n_1: 15,
                n_2: 11,
                n_3: 19,
                n_4: 16,
                n_5: 12,
                true_ans: 11
            },
            {
                name_ques: "Tìm số lớn nhất trong các số sau.",
                n_1: 17,
                n_2: 14,
                n_3: 10,
                n_4: 16,
                n_5: 13,
                true_ans: 17
            }
        ];
        this.count = 0;
        this.showAns = true;
        this.count_true = 0;
        this.nextLess = false;
        this.endPer = false;
        this.endLess = false;
    }
    minMax20.prototype.imgTrue = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/dung.png");
        document.getElementById(id).appendChild(img);
    };
    minMax20.prototype.imgFalse = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/sai.png");
        document.getElementById(id).appendChild(img);
    };
    minMax20.prototype.checkAns = function (value) {
        if (value == this.MINMAX[this.count].true_ans) {
            this.count_true += 1;
            this.imgTrue(this.count);
            if (this.count <= 5)
                this.count += 1;
            if (this.count_true == 5) {
                this.showAns = false;
                this.endPer = true;
                this.nextLess = true;
            }
        }
        else {
            this.imgFalse(this.count);
            if (this.count <= 5)
                this.count += 1;
        }
        if (this.count == 5 && this.endPer == false) {
            this.showAns = false;
            this.endLess = true;
            this.nextLess = true;
        }
    };
    return minMax20;
}());
minMax20 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'min-max-20',
        styles: [__webpack_require__(54)],
        template: __webpack_require__(205),
    })
], minMax20);

//# sourceMappingURL=min-max-20.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return soSanh20; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var soSanh20 = (function () {
    function soSanh20() {
        this.num_1 = Math.floor((Math.random() * 20) + 0);
        this.num_2 = Math.floor((Math.random() * 20) + 0);
        this.showAns = true;
        this.count = 0;
        this.nextLess = false;
        this.endPer = false;
        this.endLess = false;
        this.count_true = 0;
    }
    soSanh20.prototype.rightAns = function () {
        this.count_true += 1;
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    };
    soSanh20.prototype.rand = function () {
        this.num_1 = Math.floor((Math.random() * 10) + 0);
        this.num_2 = Math.floor((Math.random() * 10) + 0);
    };
    soSanh20.prototype.checkAns = function (value) {
        if (this.num_1 < this.num_2 && value == "<") {
            this.count += 1;
            this.rightAns();
            this.rand();
        }
        else if (this.num_1 > this.num_2 && value == ">") {
            this.count += 1;
            this.rightAns();
            this.rand();
            this.num_2 = Math.floor((Math.random() * 10) + 0);
        }
        else if (this.num_1 == this.num_2 && value == "=") {
            this.count += 1;
            this.rightAns();
            this.rand();
        }
        else {
            this.count += 1;
            this.rand();
        }
        if (this.count_true == 10) {
            this.showAns = false;
            this.nextLess = true;
            this.endPer = true;
        }
        else if (this.count == 10) {
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;
        }
    };
    return soSanh20;
}());
soSanh20 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'so-sanh-20',
        template: __webpack_require__(206),
        styles: [__webpack_require__(108)],
    })
], soSanh20);

//# sourceMappingURL=sosanh-20.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sub20; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var sub20 = (function () {
    function sub20() {
        this.showAns = true;
        this.nextLess = false;
        this.endPer = false;
        this.endLess = false;
        this.count = 0;
        this.count_true = 0;
        this.a = Math.floor((Math.random() * 20) + 1);
        this.b = Math.floor((Math.random() * 20) + 0);
        this.sub_1 = Math.max(this.a, this.b);
        this.sub_2 = Math.min(this.a, this.b);
    }
    sub20.prototype.rand = function () {
        var num_1 = Math.floor((Math.random() * 20) + 1);
        var num_2 = Math.floor((Math.random() * 20) + 0);
        this.sub_1 = Math.max(num_1, num_2);
        this.sub_2 = Math.min(num_1, num_2);
    };
    sub20.prototype.rightAns = function () {
        this.count_true += 1;
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    };
    sub20.prototype.checkAns = function (value) {
        if (value == '') {
            alert("Bạn phải điền giá trị vào ô trống!");
        }
        else if (value != ' ' && parseInt(value) == (this.sub_1 - this.sub_2)) {
            this.rightAns();
            this.rand();
            this.count += 1;
            if (this.count_true == 10) {
                this.showAns = false;
                this.nextLess = true;
                this.endPer = true;
            }
        }
        else if (value != '') {
            this.count += 1;
            this.rand();
        }
        if (this.count == 10 && this.endPer == false) {
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;
        }
    };
    return sub20;
}());
sub20 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'sub-20',
        styles: [__webpack_require__(18)],
        template: __webpack_require__(207),
    })
], sub20);

//# sourceMappingURL=sub-20.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sum20; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var sum20 = (function () {
    function sum20() {
        this.showAns = true;
        this.nextLess = false;
        this.endPer = false;
        this.endLess = false;
        this.count = 0;
        this.count_true = 0;
        this.num_1 = Math.floor((Math.random() * 10) + 1);
        this.num_2 = Math.floor((Math.random() * 10) + 0);
    }
    sum20.prototype.rightAns = function () {
        this.count_true += 1;
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    };
    sum20.prototype.checkAns = function (value) {
        if (value == '') {
            alert("Bạn phải điền giá trị vào ô trống!");
        }
        else if (value != ' ' && parseInt(value) == (this.num_1 + this.num_2)) {
            this.rightAns();
            this.num_1 = Math.floor((Math.random() * 10) + 1);
            this.num_2 = Math.floor((Math.random() * 10) + 0);
            this.count += 1;
            if (this.count_true == 10) {
                this.showAns = false;
                this.nextLess = true;
                this.endPer = true;
            }
        }
        else if (value != '') {
            this.num_1 = Math.floor((Math.random() * 10) + 1);
            this.num_2 = Math.floor((Math.random() * 10) + 0);
            this.count += 1;
        }
        if (this.count == 10 && this.endPer == false) {
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;
        }
    };
    return sum20;
}());
sum20 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'sum-20',
        styles: [__webpack_require__(18)],
        template: __webpack_require__(208),
    })
], sum20);

//# sourceMappingURL=sum-20.js.map

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lienTruocSau100; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var lienTruocSau100 = (function () {
    function lienTruocSau100() {
        this._num = Math.floor(Math.random() * 99 + 1);
        this._nameQues = "Tìm số liền trước của: ";
        this._nameAns = 'Số liền trước là : ';
        this.showAns = true;
        this.nextLess = false;
        this.endPer = false;
        this.endLess = false;
        this.count = 0;
        this.count_true = 0;
    }
    lienTruocSau100.prototype.init = function () {
        var _signal = Math.floor(Math.random() * 2 + 1);
        if (_signal == 1) {
            this._nameQues = "Tìm số liền trước của: ";
            this._nameAns = "Số liền trước là: ";
        }
        else {
            this._nameQues = "Tìm số liền sau của: ";
            this._nameAns = "Số liền sau là: ";
        }
        this._num = Math.floor(Math.random() * 99 + 1);
    };
    lienTruocSau100.prototype.rightAns = function () {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    };
    lienTruocSau100.prototype.checkAns = function (value) {
        if (this._nameQues == "Tìm số liền trước của: ") {
            if (value == '') {
                alert("Bạn phải điền giá trị vào ô trống!");
            }
            else if (parseInt(value) == (this._num - 1)) {
                this.rightAns();
                this.count += 1;
                this.count_true += 1;
                this.init();
                if (this.count_true == 10) {
                    this.showAns = false;
                    this.nextLess = true;
                    this.endPer = true;
                }
            }
            else {
                this.count += 1;
                this.init();
            }
            if (this.count == 10 && this.endPer == false) {
                this.showAns = false;
                this.nextLess = true;
                this.endLess = true;
            }
        }
        else {
            if (parseInt(value) == (this._num + 1)) {
                this.rightAns();
                this.count += 1;
                this.count_true += 1;
                this.init();
                if (this.count_true == 10) {
                    this.showAns = false;
                    this.nextLess = true;
                    this.endPer = true;
                }
            }
            else {
                this.count += 1;
                this.init();
            }
            if (this.count == 10 && this.endPer == false) {
                this.showAns = false;
                this.nextLess = true;
                this.endLess = true;
            }
        }
    };
    return lienTruocSau100;
}());
lienTruocSau100 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'lien-truoc-sau-100',
        styles: [__webpack_require__(107)],
        template: __webpack_require__(209),
    })
], lienTruocSau100);

//# sourceMappingURL=lientruoc-sau-100.js.map

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return minMax100; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var minMax100 = (function () {
    function minMax100() {
        this.MINMAX = [
            {
                name_ques: "Tìm số lớn nhất trong các số sau.",
                n_1: 35,
                n_2: 43,
                n_3: 90,
                n_4: 65,
                n_5: 27,
                true_ans: 90
            },
            {
                name_ques: "Tìm số lớn nhất trong các số sau.",
                n_1: 68,
                n_2: 37,
                n_3: 70,
                n_4: 65,
                n_5: 72,
                true_ans: 72
            },
            {
                name_ques: "Tìm số nhỏ nhất trong các số sau.",
                n_1: 60,
                n_2: 48,
                n_3: 27,
                n_4: 58,
                n_5: 50,
                true_ans: 27
            },
            {
                name_ques: "Tìm số nhỏ nhất trong các số sau.",
                n_1: 50,
                n_2: 61,
                n_3: 90,
                n_4: 63,
                n_5: 48,
                true_ans: 48
            },
            {
                name_ques: "Tìm số lớn nhất trong các số sau.",
                n_1: 70,
                n_2: 45,
                n_3: 61,
                n_4: 36,
                n_5: 38,
                true_ans: 70
            }
        ];
        this.count = 0;
        this.showAns = true;
        this.count_true = 0;
        this.nextLess = false;
        this.endPer = false;
        this.endLess = false;
    }
    minMax100.prototype.imgTrue = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/dung.png");
        document.getElementById(id).appendChild(img);
    };
    minMax100.prototype.imgFalse = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/sai.png");
        document.getElementById(id).appendChild(img);
    };
    minMax100.prototype.checkAns = function (value) {
        if (value == this.MINMAX[this.count].true_ans) {
            this.count_true += 1;
            this.imgTrue(this.count);
            if (this.count <= this.MINMAX.length)
                this.count += 1;
            if (this.count_true == 5) {
                this.showAns = false;
                this.endPer = true;
                this.nextLess = true;
            }
        }
        else {
            this.imgFalse(this.count);
            if (this.count <= this.MINMAX.length)
                this.count += 1;
        }
        if (this.count == 5 && this.endPer == false) {
            this.showAns = false;
            this.endLess = true;
            this.nextLess = true;
        }
    };
    return minMax100;
}());
minMax100 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'min-max-100',
        styles: [__webpack_require__(54)],
        template: __webpack_require__(210),
    })
], minMax100);

//# sourceMappingURL=min-max-100.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return soSanh100; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var soSanh100 = (function () {
    function soSanh100() {
        this.num_1 = Math.floor((Math.random() * 100) + 1);
        this.num_2 = Math.floor((Math.random() * 100) + 1);
        this.showAns = true;
        this.count = 0;
        this.count_true = 0;
        this.nextLess = false;
        this.endPer = false;
        this.endLess = false;
    }
    soSanh100.prototype.rightAns = function () {
        this.count_true += 1;
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    };
    soSanh100.prototype.rand = function () {
        this.num_1 = Math.floor((Math.random() * 100) + 1);
        this.num_2 = Math.floor((Math.random() * 100) + 1);
    };
    soSanh100.prototype.checkAns = function (value) {
        if (this.num_1 < this.num_2 && value == "<") {
            this.rightAns();
            this.count += 1;
            this.rand();
        }
        else if (this.num_1 > this.num_2 && value == ">") {
            this.count += 1;
            this.rightAns();
            this.rand();
        }
        else if (this.num_1 == this.num_2 && value == "=") {
            this.count += 1;
            this.rightAns();
            this.rand();
        }
        else {
            this.count += 1;
            this.rand();
        }
        if (this.count_true == 10) {
            this.showAns = false;
            this.nextLess = true;
            this.endPer = true;
        }
        else if (this.count == 10) {
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;
        }
    };
    return soSanh100;
}());
soSanh100 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'so-sanh-100',
        styles: [__webpack_require__(108)],
        template: __webpack_require__(211),
    })
], soSanh100);

//# sourceMappingURL=sosanh-100.js.map

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sub100; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var sub100 = (function () {
    function sub100() {
        this.showAns = true;
        this.nextLess = false;
        this.endPer = false;
        this.endLess = false;
        this.count = 0;
        this.count_true = 0;
        this.a = Math.floor((Math.random() * 100) + 1);
        this.b = Math.floor((Math.random() * 100) + 0);
        this.sub_1 = Math.max(this.a, this.b);
        this.sub_2 = Math.min(this.a, this.b);
    }
    sub100.prototype.rand = function () {
        var num_1 = Math.floor((Math.random() * 100) + 1);
        var num_2 = Math.floor((Math.random() * 100) + 0);
        this.sub_1 = Math.max(num_1, num_2);
        this.sub_2 = Math.min(num_1, num_2);
    };
    sub100.prototype.rightAns = function () {
        this.count_true += 1;
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    };
    sub100.prototype.checkAns = function (value) {
        if (value == '') {
            alert("Bạn phải điền giá trị vào ô trống!");
        }
        else if (value != ' ' && parseInt(value) == (this.sub_1 - this.sub_2)) {
            this.rightAns();
            this.rand();
            this.count += 1;
            if (this.count_true == 10) {
                this.showAns = false;
                this.nextLess = true;
                this.endPer = true;
            }
        }
        else if (value != '') {
            this.count += 1;
            this.rand();
        }
        if (this.count == 10 && this.endPer == false) {
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;
        }
    };
    return sub100;
}());
sub100 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'sub-100',
        styles: [__webpack_require__(18)],
        template: __webpack_require__(212),
    })
], sub100);

//# sourceMappingURL=sub-100.js.map

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sum100; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var sum100 = (function () {
    function sum100() {
        this.showAns = true;
        this.nextLess = false;
        this.endPer = false;
        this.endLess = false;
        this.count = 0;
        this.count_true = 0;
        this.num_1 = Math.floor((Math.random() * 50) + 1);
        this.num_2 = Math.floor((Math.random() * 50) + 0);
    }
    sum100.prototype.rightAns = function () {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    };
    sum100.prototype.checkAns = function (value) {
        if (value == '') {
            alert("Bạn phải điền giá trị vào ô trống!");
        }
        else if (value != ' ' && parseInt(value) == (this.num_1 + this.num_2)) {
            this.rightAns();
            this.num_1 = Math.floor((Math.random() * 50) + 1);
            this.num_2 = Math.floor((Math.random() * 50) + 0);
            this.count += 1;
            this.count_true += 1;
            if (this.count_true == 10) {
                this.showAns = false;
                this.nextLess = true;
                this.endPer = true;
            }
        }
        else if (value != '') {
            this.num_1 = Math.floor((Math.random() * 50) + 1);
            this.num_2 = Math.floor((Math.random() * 50) + 0);
            this.count += 1;
        }
        if (this.count == 10 && this.endPer == false) {
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;
        }
    };
    return sum100;
}());
sum100 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'sum-100',
        styles: [__webpack_require__(18)],
        template: __webpack_require__(213),
    })
], sum100);

//# sourceMappingURL=sum-100.js.map

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return demTamgiac; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var demTamgiac = (function () {
    function demTamgiac() {
        this.countques = [
            {
                name_ques: "Đếm số hình tam giác.",
                link_img: "./assets/image/tamgiac1.jpg",
                true_ans: 4
            },
            {
                name_ques: "Đếm số hình tam giác.",
                link_img: "./assets/image/tamgiac.jpg",
                true_ans: 6
            },
            {
                name_ques: "Đếm số hình tam giác.",
                link_img: "./assets/image/tamgiac3.jpg",
                true_ans: 4
            },
            {
                name_ques: "Đếm số hình tam giác.",
                link_img: "./assets/image/tamgiac4.jpg",
                true_ans: 5
            },
            {
                name_ques: "Đếm số hình tam giác.",
                link_img: "./assets/image/tamgiac2.jpg",
                true_ans: 5
            }
        ];
        this.b1_c4_head = false;
        this.b2_c4_head = true;
        this.nameQues = true;
        this.showAns = true; // hiện câu hỏi 
        this.nextLess = false;
        this.count = 0;
        this.count_true = 0;
        this.endPer = false;
        this.endLess = false;
        this.bai2_chuong4 = false;
        this.bai1_chuong5 = false;
    }
    demTamgiac.prototype.rightAns = function () {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    };
    demTamgiac.prototype.checkAns = function (value) {
        if (parseInt(value) == this.countques[this.count].true_ans) {
            this.rightAns(); // thêm 1 ngôi sao vào trong khung 
            this.count_true += 1; // số câu đúng tăng thêm 1
            if (this.count <= this.countques.length)
                this.count += 1; // chỉ số đối tượng tăng lên 1
            if (this.count_true == this.countques.length) {
                this.nameQues = false;
                this.showAns = false;
                this.nextLess = true;
                this.endPer = true;
                this.bai1_chuong5 = true;
            }
        }
        else {
            if (this.count <= this.countques.length)
                this.count += 1;
        }
        if (this.count == this.countques.length && this.endPer == false) {
            this.nameQues = false;
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;
            this.bai1_chuong5 = true;
            if (this.count_true == 0) {
                var para = document.createElement("P");
                var t = document.createTextNode("Bạn không đạt được sao nào, cố gắng lần sau nhé!");
                para.appendChild(t);
                document.getElementById("panel_star").appendChild(para);
            }
        }
    };
    return demTamgiac;
}());
demTamgiac = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'diem-doanthang',
        styles: [__webpack_require__(106)],
        template: __webpack_require__(109),
    })
], demTamgiac);

//# sourceMappingURL=dem-so-tamgiac.js.map

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return diemDoanthang; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var diemDoanthang = (function () {
    function diemDoanthang() {
        this.countques = [
            {
                name_ques: "Đếm số đoạn thẳng xuất hiện.",
                link_img: "./assets/image/doanthang1.PNG",
                true_ans: 5
            },
            {
                name_ques: "Đếm số điểm nằm bên trong hình tứ giác.",
                link_img: "./assets/image/diem.jpg",
                true_ans: 5
            },
            {
                name_ques: "Đếm số đoạn thẳng xuất hiện.",
                link_img: "./assets/image/doanthang.jpg",
                true_ans: 7
            },
            {
                name_ques: "Hình trên có bao nhiêu điểm ?",
                link_img: "./assets/image/diem2.PNG",
                true_ans: 4
            },
            {
                name_ques: "Đếm số điểm nằm bên ngoài hình tròn.",
                link_img: "./assets/image/diem1.jpg",
                true_ans: 3
            }
        ];
        this.b2_c4_head = false;
        this.b1_c4_head = true;
        this.nameQues = true;
        this.showAns = true; // hiện câu hỏi 
        this.nextLess = false;
        this.count = 0;
        this.count_true = 0;
        this.endPer = false;
        this.endLess = false;
        this.bai2_chuong4 = false;
        this.bai1_chuong5 = false;
    }
    diemDoanthang.prototype.rightAns = function () {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/true.png");
        document.getElementById("starAward").appendChild(img);
    };
    diemDoanthang.prototype.checkAns = function (value) {
        if (parseInt(value) == this.countques[this.count].true_ans) {
            this.rightAns(); // thêm 1 ngôi sao vào trong khung 
            this.count_true += 1; // số câu đúng tăng thêm 1
            if (this.count <= this.countques.length)
                this.count += 1; // chỉ số đối tượng tăng lên 1
            if (this.count_true == this.countques.length) {
                this.nameQues = false;
                this.showAns = false;
                this.nextLess = true;
                this.endPer = true;
                this.bai2_chuong4 = true;
            }
        }
        else {
            if (this.count <= this.countques.length)
                this.count += 1;
        }
        if (this.count == this.countques.length && this.endPer == false) {
            this.nameQues = false;
            this.showAns = false;
            this.nextLess = true;
            this.endLess = true;
            this.bai2_chuong4 = true;
            if (this.count_true == 0) {
                var para = document.createElement("P");
                var t = document.createTextNode("Bạn không đạt được sao nào, cố gắng lần sau nhé!");
                para.appendChild(t);
                document.getElementById("panel_star").appendChild(para);
            }
        }
    };
    return diemDoanthang;
}());
diemDoanthang = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'diem-doanthang',
        styles: [__webpack_require__(106)],
        template: __webpack_require__(109),
    })
], diemDoanthang);

//# sourceMappingURL=diem-doanthang.js.map

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tamGiacVuongTron; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var tamGiacVuongTron = (function () {
    function tamGiacVuongTron() {
        this.hinh = [
            {
                link_img: "./assets/image/tamgiac5.PNG",
                ans_A: "Hình tam giác",
                ans_B: "Hình vuông",
                ans_C: "Hình tròn",
                true_ans: "Hình tam giác"
            },
            {
                link_img: "./assets/image/tron2.PNG",
                ans_A: "Hình tam giác",
                ans_B: "Hình vuông",
                ans_C: "Hình tròn",
                true_ans: "Hình tròn"
            },
            {
                link_img: "./assets/image/vuong4.PNG",
                ans_A: "Hình tròn",
                ans_B: "Hình tam giác",
                ans_C: "Hình vuông",
                true_ans: "Hình vuông"
            },
            {
                link_img: "./assets/image/tamgiac8.PNG",
                ans_A: "Hình vuông",
                ans_B: "Hình tam giác",
                ans_C: "Hình tròn",
                true_ans: "Hình tam giác"
            },
            {
                link_img: "./assets/image/vuong6.PNG",
                ans_A: "Hình tam giác",
                ans_B: "Hình vuông",
                ans_C: "Hình tròn",
                true_ans: "Hình vuông"
            },
            {
                link_img: "./assets/image/tron5.PNG",
                ans_A: "Hình tam giác",
                ans_B: "Hình vuông",
                ans_C: "Hình tròn",
                true_ans: "Hình tròn"
            },
        ];
        this.x = 0;
        this.showAns = true;
        this.count_true = 0;
        this.nextLess = false;
        this.theEnd = false;
    }
    tamGiacVuongTron.prototype.imgTrue = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/dung.png");
        document.getElementById(id).appendChild(img);
    };
    tamGiacVuongTron.prototype.imgFalse = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/sai.png");
        document.getElementById(id).appendChild(img);
    };
    tamGiacVuongTron.prototype.checkAns = function (value) {
        if (value == this.hinh[this.x].true_ans) {
            this.count_true += 1;
            this.imgTrue(this.x);
            if (this.x < this.hinh.length)
                this.x += 1;
            if (this.count_true == 6 && this.x == 6) {
                this.showAns = false;
                this.theEnd = true;
            }
        }
        else {
            this.imgFalse(this.x);
            if (this.x < this.hinh.length)
                this.x += 1;
            if (this.x == 6) {
                this.showAns = false;
                this.nextLess = true;
                this.theEnd = true;
            }
        }
    };
    return tamGiacVuongTron;
}());
tamGiacVuongTron = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'tam-giac-vuong-tron',
        styles: [__webpack_require__(194)],
        template: __webpack_require__(214),
    })
], tamGiacVuongTron);

//# sourceMappingURL=tamgiac-vuong-tron.js.map

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return xemGio; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var xemGio = (function () {
    function xemGio() {
        this.clocks = [
            {
                link_img: "./assets/image/clock4.png",
                ans_A: "10 giờ 10 phút",
                ans_B: "2 giờ 50 phút",
                ans_C: "3 giờ kém 10 phút",
                true_ans: "10 giờ 10 phút",
            },
            {
                link_img: "./assets/image/clock2.png",
                ans_A: "12 giờ 15 phút",
                ans_B: "3 giờ",
                ans_C: "12 giờ",
                true_ans: "3 giờ",
            },
            {
                link_img: "./assets/image/clock3.png",
                ans_A: "11 giờ",
                ans_B: "11 giờ 55 phút",
                ans_C: "12 giờ 55 phút",
                true_ans: "11 giờ 55 phút",
            },
            {
                link_img: "./assets/image/clock.png",
                ans_A: "12 giờ 40 phút",
                ans_B: "11 giờ 40 phút",
                ans_C: "8 giờ",
                true_ans: "8 giờ",
            },
            {
                link_img: "./assets/image/clock1.jpg",
                ans_A: "1 giờ 45 phút",
                ans_B: "9 giờ 5 phút",
                ans_C: "1 giờ kém 15 phút",
                true_ans: "1 giờ kém 15 phút",
            }
        ];
        this.count = 0;
        this.showAns = true;
        this.count_true = 0;
        this.nextLess = false;
        this.theEnd = false;
    }
    xemGio.prototype.imgTrue = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/dung.png");
        document.getElementById(id).appendChild(img);
    };
    xemGio.prototype.imgFalse = function (id) {
        var img = document.createElement("IMG");
        img.setAttribute("src", "./assets/image/sai.png");
        document.getElementById(id).appendChild(img);
    };
    xemGio.prototype.checkAns = function (value) {
        if (value == this.clocks[this.count].true_ans) {
            this.count_true += 1;
            this.imgTrue(this.count);
            if (this.count < this.clocks.length)
                this.count += 1;
            if (this.count_true == 5) {
                this.showAns = false;
                this.theEnd = true;
            }
        }
        else {
            this.imgFalse(this.count);
            if (this.count < this.clocks.length)
                this.count += 1;
        }
        if (this.count == 5) {
            this.showAns = false;
            this.nextLess = true;
            this.theEnd = true;
        }
    };
    return xemGio;
}());
xemGio = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'xem-gio',
        styles: [__webpack_require__(191)],
        template: __webpack_require__(215),
    })
], xemGio);

//# sourceMappingURL=xem-gio.js.map

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return luyenTap; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var luyenTap = (function () {
    function luyenTap() {
    }
    return luyenTap;
}());
luyenTap = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'luyen-tap',
        styles: [__webpack_require__(197)],
        template: "\n   <div class=\"container\">\n        <div class=\"row\">\n            <h1 style=\"text-align: center; font-size: 50px; color: brown\">To\u00E1n 1</h1>\n            <div class=\"col-xs-10 col-sm-6\">\n                <div class=\"panel panel-body panel-primary\" id=\"c1\">\n                    <h2> C\u00E1c s\u1ED1 v\u00E0 ph\u00E9p to\u00E1n trong ph\u1EA1m vi 10</h2>\n                    <a routerLink=\"/dem10\" routerLinkActive=\"active\">\u0110\u1EBFm \u0111\u1EBFn 10</a>\n                    <br>\n                    <a routerLink=\"/sub10\" routerLinkActive=\"active\">Ph\u00E9p tr\u1EEB</a>\n                        <br>\n                        <a routerLink=\"/sum10\" routerLinkActive=\"active\">Ph\u00E9p c\u1ED9ng</a>\n                        <br>\n                        <a routerLink=\"/minmax10\" routerLinkActive=\"active\">T\u00ECm s\u1ED1 l\u1EDBn nh\u1EA5t, nh\u1ECF nh\u1EA5t</a>\n                    </div>\n                </div>\n            <div class=\"col-xs-10 col-sm-6\">\n                <div class=\"panel panel-body panel-primary\" id=\"c2\">\n                    <h2>C\u00E1c s\u1ED1 v\u00E0 ph\u00E9p to\u00E1n trong ph\u1EA1m vi 20</h2>\n                    <a routerLink=\"/sosanh20\" routerLinkActive=\"active\">So s\u00E1nh 2</a>\n                    <br>\n                    <a routerLink=\"/sub20\" routerLinkActive=\"active\">Ph\u00E9p tr\u1EEB</a>\n                    <br>\n                    <a routerLink=\"/sum20\" routerLinkActive=\"active\">Ph\u00E9p c\u1ED9ng</a>\n                    <br>\n                    <a routerLink=\"/minmax20\" routerLinkActive=\"active\">T\u00ECm s\u1ED1 l\u1EDBn nh\u1EA5t, nh\u1ECF nh\u1EA5t</a>\n                    <br>\n                    <a routerLink=\"/lientruocsau20\" routerLinkActive=\"active\">T\u00ECm s\u1ED1 li\u1EC1n tr\u01B0\u1EDBc, s\u1ED1 li\u1EC1n sau</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-10 col-sm-6\">\n                <div class=\"panel panel-body panel-primary\" id=\"c3\">\n                    <h2>C\u00E1c s\u1ED1 v\u00E0 ph\u00E9p to\u00E1n trong ph\u1EA1m vi 100</h2>\n                    <a routerLink=\"/sosanh100\" routerLinkActive=\"active\">So s\u00E1nh 2</a>\n                    <br>\n                    <a routerLink=\"/sub100\" routerLinkActive=\"active\">Ph\u00E9p tr\u1EEB</a>\n                    <br>\n                    <a routerLink=\"/sum100\" routerLinkActive=\"active\">Ph\u00E9p c\u1ED9ng</a>\n                    <br>\n                    <a routerLink=\"/minmax100\" routerLinkActive=\"active\">T\u00ECm s\u1ED1 l\u1EDBn nh\u1EA5t, nh\u1ECF nh\u1EA5t</a>\n                    <br>\n                    <a routerLink=\"/lientruocsau100\" routerLinkActive=\"active\">T\u00ECm s\u1ED1 li\u1EC1n tr\u01B0\u1EDBc, s\u1ED1 li\u1EC1n sau</a>\n                    <br>\n                </div>\n            </div>\n            <div class=\"col-xs-10 col-sm-6\">\n                <div class=\"panel panel-body panel-primary\" id=\"c4\">\n                    <h2>H\u00ECnh h\u1ECDc</h2>\n                    <a routerLink=\"/diemdoanthang\" routerLinkActive=\"active\">\u0110i\u1EC3m v\u00E0 \u0111o\u1EA1n th\u1EB3ng</a>\n                    <br>\n                    <a routerLink=\"/tamgiacvuongtron\" routerLinkActive=\"active\">H\u00ECnh tam gi\u00E1c, h\u00ECnh vu\u00F4ng, h\u00ECnh tr\u00F2n</a>\n                    <br>  \n                    <a routerLink=\"/demtamgiac\" routerLinkActive=\"active\">\u0110\u1EBFm s\u1ED1 h\u00ECnh tam gi\u00E1c</a>\n                    <br>    \n                </div>             \n            </div>\n            <div class=\"col-xs-10 col-sm-6\">\n                <div class=\"panel panel-body panel-primary\" id=\"c4\">\n                    <h2>Th\u1EDDi gian</h2>\n                    <a routerLink=\"/xemgio\" routerLinkActive=\"active\">Xem gi\u1EDD</a>\n                    <br>\n                </div>\n            </div>\n        </div>\n        <router-outlet></router-outlet>\n    </div>\n    ",
    })
], luyenTap);

//# sourceMappingURL=luyentap.js.map

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    text-align: center;\r\n    color: blue;\r\n}\r\n\r\nh2{\r\n    color: red;\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n\r\np{\r\n    color: red;\r\n    padding-left: 5cm;\r\n}\r\n\r\n#getImgQues {\r\n    text-align: center;\r\n}\r\n\r\n#divQues {\r\n    height: 450px;\r\n    border-width: 3px;\r\n   \r\n}\r\n\r\n.type {\r\n    color: green;\r\n    margin-left: 4cm;\r\n}\r\n\r\n.type1 {\r\n    color: green;\r\n}\r\n\r\n\r\n#panel_star {\r\n    height: 265px;\r\n    border-width: 3px;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n\r\n#submit_ans{\r\n    size: 20px;\r\n    margin-top: 0.5cm;\r\n    margin-left: 4cm;\r\n}\r\n\r\n\r\n#kiemtra{\r\n    font-size: 30px;\r\n    border: 2px double;\r\n    background:#66FFCC;\r\n    height: 50px;\r\n\r\n}\r\n#ans {\r\n    margin-top: 1cm;\r\n    margin-left: 3cm;\r\n    \r\n}\r\n\r\n\r\n#ketqua{\r\n    font-size: 20px;\r\n    border: 3px double;\r\n    height: 40px;\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h1{\r\n    text-align: center;\r\n    color: blue;\r\n}\r\n.type{\r\n     padding-left: 5cm;\r\n }\r\n h2.type1 {\r\n    padding-left: 2cm;\r\n    color: green;\r\n}\r\n #divQues {\r\n    height: 350px;\r\n    border-width: 3px;\r\n   \r\n}\r\n#panel_star {\r\n    height: 265px;\r\n    border-width: 3px;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n\r\n#submit_ans{\r\n    padding-left: 4cm;\r\n    padding-top: 1cm;\r\n}\r\n#kiemtra{\r\n\r\n    font-size: 30px;\r\n    border: 2px double;\r\n    background:#66FFCC;\r\n    height: 50px;\r\n    width: 150px;\r\n    \r\n}\r\n#ketqua{\r\n    width: 80px;\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    text-align: center;\r\n    color: blue;\r\n}\r\n.type{\r\n     padding-left: 5cm;\r\n }\r\n #divQues {\r\n    height: 350px;\r\n    border-width: 3px;\r\n   \r\n}\r\n\r\n#panel_star {\r\n    height: 265px;\r\n    border-width: 3px;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\nh2.type1 {\r\n    padding-left: 2cm;\r\n    color: green;\r\n}\r\n\r\nform {\r\n    padding-left: 3cm;\r\n    padding-top: 1cm;\r\n}\r\n\r\np{\r\n    padding-left: 2cm;\r\n    padding-top: 1cm;\r\n    font-size: 20px;\r\n}\r\n\r\nbutton {\r\n    width: 100px;\r\n    font-size: 30px;\r\n    border: double;\r\n    border-color: royalblue;\r\n    background:#66FFCC;\r\n    height: 50px;    \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div *ngIf=\"nameQues\">\r\n        <div *ngIf=\"b1_c4_head\">\r\n            <h1>Bài 2 - Chương 4: Điểm và đoạn thẳng</h1>\r\n            <h2 class=\"type\">Điền số thích hợp vào ô trống.</h2>\r\n        </div>\r\n        <div *ngIf=\"b2_c4_head\">\r\n            <h1>Bài 3 - Chương 4: Đếm số hình tam giác</h1>\r\n            <h2 class=\"type\">Điền số thích hợp vào ô trống.</h2>\r\n            <p>Chú ý: Chỉ tính số tam giác được nối bởi 3 điểm</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <!-- cột hiển thị câu hỏi -->\r\n            <div class=\"col-sm-6\">\r\n                <!-- câu hỏi hiện trong panel -->\r\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                    <div *ngIf=\"showAns\">\r\n                        <!-- hiển thị câu hỏi -->\r\n                        <h3><strong>{{countques[count].name_ques}}</strong></h3>\r\n                        <div id=\"getImgQues\"><img src={{countques[count].link_img}} /></div>\r\n                        <div id=\"ans\">\r\n                            <input type=\"text\" #result id=\"ketqua\">\r\n                        </div>\r\n                        <div id=\"submit_ans\">\r\n                            <button type=\"button\" (click)=\"checkAns(result.value); result.value=''\" id=\"kiemtra\">Kiểm tra</button>\r\n                        </div>\r\n                    </div>\r\n                    <!-- chuyển sang bài tiếp theo  -->\r\n                    <div *ngIf=\"nextLess\">\r\n                        <div id=\"newLess\">\r\n                             <!-- hoàn thành cả 10 câu hỏi đúng  -->\r\n                             <div *ngIf=\"bai2_chuong4\">\r\n                                <div *ngIf=\"endPer\">\r\n                                    <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 1!</strong></h2>\r\n                                    <h2>Bạn đã đạt được 5/5 sao.</h2>\r\n                                    <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                                </div>\r\n                                 <div *ngIf=\"endLess\">\r\n                                    <h2><strong>Chúc mừng bạn đã hoàn thành bài học 1!</strong></h2>\r\n                                    <h2>Bạn đã đạt được {{count_true}}/5 sao.</h2>\r\n                                    <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                                </div>        \r\n                                <h2><a routerLink=\"/tamgiacvuongtron\" routerLinkActive=\"active\">Bài 2 - chương 4: Hình tam giác, hình vuông, hình tròn. </a></h2>\r\n                                <router-outlet></router-outlet>\r\n                            </div>\r\n                            <div *ngIf=\"bai1_chuong5\">\r\n                                <div *ngIf=\"endPer\">\r\n                                    <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 3!</strong></h2>\r\n                                    <h2>Bạn đã đạt được 5/5 sao.</h2>\r\n                                    <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                                </div>\r\n                                <div *ngIf=\"endLess\">\r\n                                    <h2><strong>Chúc mừng bạn đã hoàn thành bài học 3!</strong></h2>\r\n                                    <h2>Bạn đã đạt được {{count_true}}/5 sao.</h2>\r\n                                    <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                                </div>\r\n                                <h2><a routerLink=\"/xemgio\" routerLinkActive=\"active\">Bài 1 - chương 5: Xem giờ. </a></h2>\r\n                                <router-outlet></router-outlet>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- cột hiển thị số sao -->\r\n            <div class=\"col-sm-4\">\r\n                <!-- số sao hiện trong panel -->\r\n                <h2 class=\"type1\"><strong>Số sao đạt được </strong></h2>\r\n                <br>\r\n                <div class=\"panel panel-body panel-primary\" id=\"panel_star\">\r\n                    <div id=\"starAward\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.96b04279d38e7907e807.jpg";

/***/ }),
/* 125 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 125;


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(134);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_routing_app_routing_module__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_luyentap_chuong1_phamvi10_dem10__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_luyentap_chuong1_phamvi10_sub_10__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_luyentap_chuong1_phamvi10_sum_10__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_luyentap_chuong1_phamvi10_min_max_10__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_luyentap_chuong2_phamvi20_sosanh_20__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_luyentap_chuong2_phamvi20_sub_20__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_luyentap_chuong2_phamvi20_sum_20__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_luyentap_chuong2_phamvi20_min_max_20__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_luyentap_chuong2_phamvi20_lientruoc_sau_20__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_luyentap_chuong3_phamvi100_sosanh_100__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_luyentap_chuong3_phamvi100_sub_100__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_luyentap_chuong3_phamvi100_sum_100__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_luyentap_chuong3_phamvi100_min_max_100__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_luyentap_chuong3_phamvi100_lientruoc_sau_100__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_luyentap_chuong4_hinhhoc_diem_doanthang__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_luyentap_chuong4_hinhhoc_tamgiac_vuong_tron__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_luyentap_chuong4_hinhhoc_dem_so_tamgiac__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_luyentap_chuong5_thoigian_xem_gio__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_app_luyentap_luyentap__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__kiemtra_kiemtra__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__giaitri_giaitri__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_kiemtra_de1__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_app_kiemtra_de2__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_app_kiemtra_de3__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_app_kiemtra_de4__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_app_kiemtra_de5__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var providers = {
    "google": {
        "clientId": "GOOGLE_CLIENT_ID"
    },
    "facebook": {
        "clientId": "FACEBOOK_CLIENT_ID",
        "apiVersion": "v2.4"
    }
};



// chương 1




//chương 2





//chương 3





//  chương 4



// chương 5









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app__["a" /* app */],
            __WEBPACK_IMPORTED_MODULE_6__home__["a" /* home */],
            __WEBPACK_IMPORTED_MODULE_7_app_luyentap_chuong1_phamvi10_dem10__["a" /* dem10 */],
            __WEBPACK_IMPORTED_MODULE_8_app_luyentap_chuong1_phamvi10_sub_10__["a" /* sub10 */],
            __WEBPACK_IMPORTED_MODULE_9_app_luyentap_chuong1_phamvi10_sum_10__["a" /* sum10 */],
            __WEBPACK_IMPORTED_MODULE_10_app_luyentap_chuong1_phamvi10_min_max_10__["a" /* minMax10 */],
            __WEBPACK_IMPORTED_MODULE_11_app_luyentap_chuong2_phamvi20_sosanh_20__["a" /* soSanh20 */],
            __WEBPACK_IMPORTED_MODULE_12_app_luyentap_chuong2_phamvi20_sub_20__["a" /* sub20 */],
            __WEBPACK_IMPORTED_MODULE_13_app_luyentap_chuong2_phamvi20_sum_20__["a" /* sum20 */],
            __WEBPACK_IMPORTED_MODULE_14_app_luyentap_chuong2_phamvi20_min_max_20__["a" /* minMax20 */],
            __WEBPACK_IMPORTED_MODULE_15_app_luyentap_chuong2_phamvi20_lientruoc_sau_20__["a" /* lienTruocSau20 */],
            __WEBPACK_IMPORTED_MODULE_16_app_luyentap_chuong3_phamvi100_sosanh_100__["a" /* soSanh100 */],
            __WEBPACK_IMPORTED_MODULE_17_app_luyentap_chuong3_phamvi100_sub_100__["a" /* sub100 */],
            __WEBPACK_IMPORTED_MODULE_18_app_luyentap_chuong3_phamvi100_sum_100__["a" /* sum100 */],
            __WEBPACK_IMPORTED_MODULE_19_app_luyentap_chuong3_phamvi100_min_max_100__["a" /* minMax100 */],
            __WEBPACK_IMPORTED_MODULE_20_app_luyentap_chuong3_phamvi100_lientruoc_sau_100__["a" /* lienTruocSau100 */],
            __WEBPACK_IMPORTED_MODULE_21_app_luyentap_chuong4_hinhhoc_diem_doanthang__["a" /* diemDoanthang */],
            __WEBPACK_IMPORTED_MODULE_22_app_luyentap_chuong4_hinhhoc_tamgiac_vuong_tron__["a" /* tamGiacVuongTron */],
            __WEBPACK_IMPORTED_MODULE_23_app_luyentap_chuong4_hinhhoc_dem_so_tamgiac__["a" /* demTamgiac */],
            __WEBPACK_IMPORTED_MODULE_24_app_luyentap_chuong5_thoigian_xem_gio__["a" /* xemGio */],
            __WEBPACK_IMPORTED_MODULE_25_app_luyentap_luyentap__["a" /* luyenTap */],
            __WEBPACK_IMPORTED_MODULE_26__kiemtra_kiemtra__["a" /* kiemTra */],
            __WEBPACK_IMPORTED_MODULE_27__giaitri_giaitri__["a" /* giaiTri */],
            __WEBPACK_IMPORTED_MODULE_28_app_kiemtra_de1__["a" /* de1 */],
            __WEBPACK_IMPORTED_MODULE_29_app_kiemtra_de2__["a" /* de2 */],
            __WEBPACK_IMPORTED_MODULE_30_app_kiemtra_de3__["a" /* de3 */],
            __WEBPACK_IMPORTED_MODULE_31_app_kiemtra_de4__["a" /* de4 */],
            __WEBPACK_IMPORTED_MODULE_32_app_kiemtra_de5__["a" /* de5 */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_routing_app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app__["a" /* app */]]
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var app = (function () {
    function app() {
    }
    app.prototype.refresh = function () {
        var timeOutSet = setTimeout(function () {
            location.reload(true);
            clearTimeout(timeOutSet);
        }, 300);
    };
    return app;
}());
app = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(198),
        styles: [__webpack_require__(190)],
    })
], app);

//# sourceMappingURL=app.js.map

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_home__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_luyentap_chuong1_phamvi10_dem10__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_luyentap_chuong1_phamvi10_sub_10__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_luyentap_chuong1_phamvi10_sum_10__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_luyentap_luyentap__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_luyentap_chuong1_phamvi10_min_max_10__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_luyentap_chuong2_phamvi20_sosanh_20__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_luyentap_chuong2_phamvi20_sub_20__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_luyentap_chuong2_phamvi20_sum_20__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_luyentap_chuong2_phamvi20_min_max_20__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_luyentap_chuong2_phamvi20_lientruoc_sau_20__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_luyentap_chuong3_phamvi100_sosanh_100__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_luyentap_chuong3_phamvi100_sub_100__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_luyentap_chuong3_phamvi100_sum_100__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_luyentap_chuong3_phamvi100_min_max_100__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_luyentap_chuong3_phamvi100_lientruoc_sau_100__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_luyentap_chuong4_hinhhoc_diem_doanthang__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_luyentap_chuong4_hinhhoc_tamgiac_vuong_tron__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_luyentap_chuong4_hinhhoc_dem_so_tamgiac__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_luyentap_chuong5_thoigian_xem_gio__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_kiemtra_kiemtra__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_kiemtra_de1__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_kiemtra_de2__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_app_kiemtra_de3__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_kiemtra_de4__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_app_kiemtra_de5__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_giaitri_giaitri__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2_app_home__["a" /* home */] },
    { path: 'luyentap', component: __WEBPACK_IMPORTED_MODULE_6_app_luyentap_luyentap__["a" /* luyenTap */] },
    { path: 'dem10', component: __WEBPACK_IMPORTED_MODULE_3_app_luyentap_chuong1_phamvi10_dem10__["a" /* dem10 */] },
    { path: 'sub10', component: __WEBPACK_IMPORTED_MODULE_4_app_luyentap_chuong1_phamvi10_sub_10__["a" /* sub10 */] },
    { path: 'sum10', component: __WEBPACK_IMPORTED_MODULE_5_app_luyentap_chuong1_phamvi10_sum_10__["a" /* sum10 */] },
    { path: 'minmax10', component: __WEBPACK_IMPORTED_MODULE_7_app_luyentap_chuong1_phamvi10_min_max_10__["a" /* minMax10 */] },
    { path: 'sosanh20', component: __WEBPACK_IMPORTED_MODULE_8_app_luyentap_chuong2_phamvi20_sosanh_20__["a" /* soSanh20 */] },
    { path: 'sub20', component: __WEBPACK_IMPORTED_MODULE_9_app_luyentap_chuong2_phamvi20_sub_20__["a" /* sub20 */] },
    { path: 'sum20', component: __WEBPACK_IMPORTED_MODULE_10_app_luyentap_chuong2_phamvi20_sum_20__["a" /* sum20 */] },
    { path: 'minmax20', component: __WEBPACK_IMPORTED_MODULE_11_app_luyentap_chuong2_phamvi20_min_max_20__["a" /* minMax20 */] },
    { path: 'lientruocsau20', component: __WEBPACK_IMPORTED_MODULE_12_app_luyentap_chuong2_phamvi20_lientruoc_sau_20__["a" /* lienTruocSau20 */] },
    { path: 'sosanh100', component: __WEBPACK_IMPORTED_MODULE_13_app_luyentap_chuong3_phamvi100_sosanh_100__["a" /* soSanh100 */] },
    { path: 'sub100', component: __WEBPACK_IMPORTED_MODULE_14_app_luyentap_chuong3_phamvi100_sub_100__["a" /* sub100 */] },
    { path: 'sum100', component: __WEBPACK_IMPORTED_MODULE_15_app_luyentap_chuong3_phamvi100_sum_100__["a" /* sum100 */] },
    { path: 'minmax100', component: __WEBPACK_IMPORTED_MODULE_16_app_luyentap_chuong3_phamvi100_min_max_100__["a" /* minMax100 */] },
    { path: 'lientruocsau100', component: __WEBPACK_IMPORTED_MODULE_17_app_luyentap_chuong3_phamvi100_lientruoc_sau_100__["a" /* lienTruocSau100 */] },
    { path: 'diemdoanthang', component: __WEBPACK_IMPORTED_MODULE_18_app_luyentap_chuong4_hinhhoc_diem_doanthang__["a" /* diemDoanthang */] },
    { path: 'tamgiacvuongtron', component: __WEBPACK_IMPORTED_MODULE_19_app_luyentap_chuong4_hinhhoc_tamgiac_vuong_tron__["a" /* tamGiacVuongTron */] },
    { path: 'demtamgiac', component: __WEBPACK_IMPORTED_MODULE_20_app_luyentap_chuong4_hinhhoc_dem_so_tamgiac__["a" /* demTamgiac */] },
    { path: 'xemgio', component: __WEBPACK_IMPORTED_MODULE_21_app_luyentap_chuong5_thoigian_xem_gio__["a" /* xemGio */] },
    { path: 'kiemtra', component: __WEBPACK_IMPORTED_MODULE_22_app_kiemtra_kiemtra__["a" /* kiemTra */] },
    { path: 'de1', component: __WEBPACK_IMPORTED_MODULE_23_app_kiemtra_de1__["a" /* de1 */] },
    { path: 'de2', component: __WEBPACK_IMPORTED_MODULE_24_app_kiemtra_de2__["a" /* de2 */] },
    { path: 'de3', component: __WEBPACK_IMPORTED_MODULE_25_app_kiemtra_de3__["a" /* de3 */] },
    { path: 'de4', component: __WEBPACK_IMPORTED_MODULE_26_app_kiemtra_de4__["a" /* de4 */] },
    { path: 'de5', component: __WEBPACK_IMPORTED_MODULE_27_app_kiemtra_de5__["a" /* de5 */] },
    { path: 'giaitri', component: __WEBPACK_IMPORTED_MODULE_28_app_giaitri_giaitri__["a" /* giaiTri */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\nsection{\t\r\n    \r\n        background: url(" + __webpack_require__(124) + ") fixed no-repeat;\r\n        width: 100%;\r\n        padding-top: 50px;\r\n        overflow: auto;\r\n        bottom: 0;\r\n        min-height: 100%;\r\n        scroll-behavior: auto;\r\n    }\r\n    \r\n    footer {\r\n      background: gray;\r\n      border-style: solid;\r\n      color : white;\r\n      font-weight: bold;\r\n      display: block;\r\n      position: absolute;\r\n      margin-bottom: 0;\r\n      padding-right: 0;\r\n      left: 0;\r\n      right: 0;\r\n      width: 100%;\r\n      text-align: left;\r\n    }\r\na{\r\n    color: blue;\r\n}\r\n\r\nh4{\r\n    color: blue;\r\n}\r\n\r\nli{\r\n    font-size: 150%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "table, th, td {\r\n    border: 2px solid green;\r\n    border-collapse: collapse;\r\n    text-align: center;\r\n    color: #DF013A;\r\n    background: #E0F2F7;\r\n    font-size: 150%; \r\n}\r\n\r\ntd {\r\n    width: 150px;\r\n    height: 50px;\r\n}\r\nimg {\r\n    margin-left: 10cm;\r\n}\r\n\r\n#divQues {\r\n    height: 350px;\r\n    border-width: 3px; \r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n    color: blue;\r\n}\r\n\r\nh2{\r\n    text-align: center;\r\n}\r\n\r\n#tableCheck{\r\n    padding-left: 4cm;\r\n    \r\n}\r\nform{\r\n    list-style: inside;\r\n    padding-top: 1cm;\r\n    padding-left: 0.5cm;\r\n}\r\n\r\nbutton {   \r\n    width: 280px;\r\n    font-size: 30px;\r\n    border: double;\r\n    border-color: royalblue;\r\n    background:#66FFCC;\r\n    height: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    text-align: center;\r\n    color: blue;\r\n}\r\n\r\nh2{\r\n    color: red;\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n\r\n#getImgQues {\r\n    text-align: center;\r\n}\r\n\r\n#divQues {\r\n    height: 450px;\r\n    border-width: 3px;\r\n}\r\n\r\n.type {\r\n    color: green;\r\n    margin-left: 4cm;\r\n}\r\n\r\n.type1 {\r\n    color: green;\r\n}\r\n\r\n\r\n#panel_star {\r\n    height: 265px;\r\n    border-width: 3px;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n\r\n#submit_ans{\r\n    size: 20px;\r\n    margin-top: 0.5cm;\r\n    margin-left: 4cm;\r\n}\r\n\r\n\r\n#kiemtra{\r\n    font-size: 30px;\r\n    border: 2px double;\r\n    background:#66FFCC;\r\n    height: 50px;\r\n\r\n}\r\n#ans {\r\n    margin-top: 1cm;\r\n    margin-left: 3cm;\r\n    \r\n}\r\n\r\n#ketqua{\r\n    font-size: 20px;\r\n    border: 3px double;\r\n    height: 40px;\r\n    \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "a {\r\n    font-size: 150%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "table, th, td {\r\n    border: 2px solid green;\r\n    border-collapse: collapse;\r\n    text-align: center;\r\n    color: #DF013A;\r\n    background: #E0F2F7;\r\n    font-size: 150%;  \r\n}\r\n\r\ntd {\r\n    width: 150px;\r\n    height: 50px;\r\n}\r\nimg {\r\n    display: block; \r\n    margin-left: auto; \r\n    margin-right: auto;\r\n}\r\n\r\n#divQues {\r\n    height: 350px;\r\n    border-width: 3px; \r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n    color: blue;\r\n}\r\n\r\nh2{\r\n    text-align: center;\r\n}\r\n\r\n#tableCheck{\r\n    padding-left: 4cm;\r\n    \r\n}\r\n\r\nform{\r\n    list-style: inside;\r\n    padding-top: 1cm;\r\n    padding-left: 0.5cm;\r\n}\r\n\r\nbutton {  \r\n    width: 280px;\r\n    font-size: 30px;\r\n    border: double;\r\n    border-color: royalblue;\r\n    background:#66FFCC;\r\n    height: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".container{\r\n    height: 200px;\r\n    \r\n}\r\nh3{\r\n    color: orangered;\r\n}\r\nsection{\r\n     background: url(" + __webpack_require__(124) + ") fixed no-repeat;\r\n}\r\nimg{\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h1{\r\n    text-align: center;\r\n    color: brown;\r\n    font: bold;\r\n}\r\nspan{\r\n    font-size: 30px;\r\n    border-radius: 50px;\r\n}\r\n\r\n#list{\r\n    width: 200px;\r\n}\r\n\r\n#de1, #de2, #de3, #de4, #de5{\r\n    height: 70px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    background: #66FF99;\r\n    border-radius: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".container{\r\n    scroll-behavior: auto;\r\n}\r\n\r\nh1 {\r\n    color: blueviolet;\r\n    text-align: center;\r\n    font-size: 60px;\r\n    border-radius: 30px;\r\n    /* background: cornsilk;*/\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font: bold;\r\n\r\n}\r\n\r\nh2 {\r\n    font-style: italic;\r\n    text-align: left;\r\n    border-radius: 10px;\r\n    background: ivory;\r\n    font: bold;\r\n}\r\n\r\na {\r\n    font-size: 20px;\r\n    color: rgb(0, 38, 255);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <header>\r\n        <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"navbar-header\">\r\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n                        aria-expanded=\"false\">\r\n                        <span class=\"sr-only\">Toggle navigation</span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                    </button>\r\n                    <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active-link\" (click)=\"refresh();\"><span class=\"glyphicon glyphicon-education\" aria-hidden=\"true\"></span>MathFun</a>\r\n                </div>\r\n                <!-- Collect the nav links, forms, and other content for toggling -->\r\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                    <ul class=\"nav navbar-nav\">\r\n                        <li><a routerLink=\"/luyentap\" routerLinkActive=\"active\">Luyện tập</a></li>\r\n                        <li><a routerLink=\"/kiemtra\" routerLinkActive=\"active\">Kiểm tra</a></li>\r\n                        <li><a routerLink=\"/giaitri\" routerLinkActive=\"active\">Giải trí</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n    </header>\r\n    <section>\r\n        <router-outlet></router-outlet>\r\n    </section>\r\n    <footer class=\"navbar-fixed\">\r\n        <div class=\"row>\">\r\n            <div class=\"col-md-4\"></div>\r\n            <div class=\"col-md-6\">\r\n                <br>\r\n                <p><strong>Copyright @ ChildrenTeam 2018 Đại học Công Nghệ - Đại học Quốc Gia Hà Nội</strong></p>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</body>"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <section>\r\n        <img src=\"./assets/image/home.jpg\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-4\">\r\n                    <h3>{{titles[0]}}</h3>\r\n                    <p><strong>Chứa các chương theo chương trình học.</strong></p>\r\n                    <p><strong>Mỗi chương chứa các bài học phục vụ cho việc tự luyện của học sinh.</strong></p>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <h3>{{titles[1]}}</h3>\r\n                    <p><strong>Kiểm tra lại kiến thức đã học trên lớp.</strong></p>\r\n                    <p><strong>Nhằm rèn luyện kỹ năng làm bài cho học sinh.</strong></p>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <h3>{{titles[2]}}</h3>\r\n                    <p><strong>Bao gồm các mẩu truyện và video hữa ích với trẻ.</strong></p>\r\n                    <p><strong>Phụ huynh có thể tham khảo chức năng này để rèn kỹ năng cho trẻ.</strong></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</body>\r\n"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>{{title}}</h1><br>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"panel panel-body panel-primary\" id=\"de1\">\r\n                <a routerLink=\"/de1\" routerLinkActive=\"active\">Đề kiểm tra số 1</a>\r\n            </div>\r\n            <div class=\"panel panel-body panel-primary\" id=\"de2\">\r\n                <a routerLink=\"/de2\" routerLinkActive=\"active\">Đề kiểm tra số 2</a>\r\n            </div>\r\n            <div class=\"panel panel-body panel-primary\" id=\"de3\">\r\n                <a routerLink=\"/de3\" routerLinkActive=\"active\">Đề kiểm tra số 3</a>\r\n            </div>\r\n            <div class=\"panel panel-body panel-primary\" id=\"de4\">\r\n                <a routerLink=\"/de4\" routerLinkActive=\"active\">Đề kiểm tra số 4</a>\r\n            </div>\r\n            <div class=\"panel panel-body panel-primary\" id=\"de5\">\r\n                <a routerLink=\"/de5\" routerLinkActive=\"active\">Đề kiểm tra số 5</a>\r\n            </div>\r\n            \r\n        </div>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài toán: Tìm số lớn nhất, tìm số nhỏ nhất.</h1>\r\n    <h2 class=\"type\">Chọn đáp án đúng.</h2>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-8\">\r\n            <div id=\"tableCheck\">\r\n                <table>\r\n                    <tr>\r\n                        <th>Câu 1</th>\r\n                        <th>Câu 2</th>\r\n                        <th>Câu 3</th>\r\n                        <th>Câu 4</th>\r\n                        <th>Câu 5</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <td id=\"0\"></td>\r\n                        <td id=\"1\"></td>\r\n                        <td id=\"2\"></td>\r\n                        <td id=\"3\"></td>\r\n                        <td id=\"4\"></td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <br>\r\n            <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                <div *ngIf=\"showAns\">\r\n                    <h2> {{MINMAX[count].name_ques}} </h2>\r\n                    <br>\r\n                    <form>\r\n                        <button type=\"button\" #vl1 value={{MINMAX[count].n_1}} (click)=\"checkAns(vl1.value)\">{{MINMAX[count].n_1}}</button>\r\n                        <button type=\"button\" #vl2 value={{MINMAX[count].n_2}} (click)=\"checkAns(vl2.value)\">{{MINMAX[count].n_2}}</button>\r\n                        <button type=\"button\" #vl3 value={{MINMAX[count].n_3}} (click)=\"checkAns(vl3.value)\">{{MINMAX[count].n_3}}</button>\r\n                        <button type=\"button\" #vl4 value={{MINMAX[count].n_4}} (click)=\"checkAns(vl4.value)\">{{MINMAX[count].n_4}}</button>\r\n                        <button type=\"button\" #vl5 value={{MINMAX[count].n_5}} (click)=\"checkAns(vl5.value)\">{{MINMAX[count].n_5}}</button>\r\n                    </form>\r\n                </div>\r\n                <div *ngIf=\"nextLess\">\r\n                    <div *ngIf=\"endPer\">\r\n                        <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 4!</strong></h2>\r\n                        <h2>Bạn đã trả lời đúng 5/5 câu.</h2>\r\n                        <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                    </div>\r\n                    <div *ngIf=\"endLess\">\r\n                        <h2><strong>Chúc mừng bạn đã hoàn thành bài học 4!</strong></h2>\r\n                        <h2>Bạn đã trả lời đúng {{count_true}}/5 câu.</h2>\r\n                        <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                    </div>\r\n                    <h2><a routerLink=\"/sosanh20\" routerLinkActive=\"active\">Bài 1 - chương 2 - So sánh 2 số trong phạm vi 20. </a></h2>\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n    </div>\r\n</section>"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài 2: Chương 1 - Phép trừ trong phạm vi 10.</h1>\r\n    <h2 class=\"type\">Điền số thích hợp vào ô trống</h2>\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                <div *ngIf=\"showAns\">\r\n                    <h2 class=\"type\">{{sub_1}} - {{sub_2}} = <input type=\"text\" #result id=\"ketqua\"> </h2>\r\n                    <!-- kiểm tra giá trị điền vào ô trống -->\r\n                    <div id=\"submit_ans\">\r\n                        <button type=\"button\" (click)=\"checkAns(result.value); result.value=''\" id=\"kiemtra\">Kiểm tra</button>\r\n                    </div>\r\n                </div>\r\n                <!-- chuyển sang bài tiếp theo -->\r\n                <div *ngIf=\"nextLess\">\r\n                    <div id=\"newLess\">\r\n                        <!-- hoàn thành cả 5 câu hỏi đúng -->\r\n                        <div *ngIf=\"endPer\">\r\n                            <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 2!</strong></h2>\r\n                            <h2>Bạn đã đạt được 10/10 sao.</h2>\r\n                            <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                        </div>\r\n                        <div *ngIf=\"endLess\">\r\n                            <h2><strong>Chúc mừng bạn đã hoàn thành bài học 2!</strong></h2>\r\n                            <h2>Bạn đã đạt được {{count_true}}/10 sao.</h2>\r\n                            <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                        </div>\r\n                        <h2><a routerLink=\"/sum10\" routerLinkActive=\"active\">Bài 3 - chương 1 - Phép cộng trong phạm vi 10. </a></h2>\r\n                        <router-outlet></router-outlet>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <!-- số sao hiện trong panel -->\r\n            <h2 class=\"type1\"><strong>Số sao đạt được </strong></h2>\r\n            <br>\r\n            <div class=\"panel panel-body panel-primary\" id=\"panel_star\">\r\n                <div id=\"starAward\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài 3: Chương 1 - Phép cộng trong phạm vi 10.</h1>\r\n    <h2 class=\"type\">Điền số thích hợp vào ô trống</h2>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                    <div *ngIf=\"showAns\">\r\n                        <h2 class=\"type\">{{num_1}} + {{num_2}} = <input type=\"text\" #result id=\"ketqua\"> </h2>\r\n                        <!-- kiểm tra giá trị điền vào ô trống -->\r\n                        <div id=\"submit_ans\">\r\n                            <button type=\"button\" (click)=\"checkAns(result.value); result.value=''\" id=\"kiemtra\">Kiểm tra</button>\r\n                        </div>\r\n                    </div>\r\n                    <!-- chuyển sang bài tiếp theo -->\r\n                    <div *ngIf=\"nextLess\">\r\n                        <div id=\"newLess\">\r\n                            <!-- hoàn thành cả 5 câu hỏi đúng -->\r\n                            <div *ngIf=\"endPer\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 3!</strong></h2>\r\n                                <h2>Bạn đã đạt được 10/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <div *ngIf=\"endLess\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành bài học 3!</strong></h2>\r\n                                <h2>Bạn đã đạt được {{count_true}}/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <h2><a routerLink=\"/minmax10\" routerLinkActive=\"active\">Bài 4 - Chương 1 - Tìm số nhỏ nhất, lớn nhất trong phạm vi 10. </a></h2>\r\n                            <router-outlet></router-outlet>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <!-- số sao hiện trong panel -->\r\n                <h2 class=\"type1\"><strong>Số sao đạt được </strong></h2>\r\n                <br>\r\n                <div class=\"panel panel-body panel-primary\" id=\"panel_star\">\r\n                    <div id=\"starAward\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài 5:Chương 2 - Số liền trước, số liền sau phạm vi 20</h1>\r\n    <h2 class=\"type\">Điền số thích hợp vào ô trống</h2>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                    <div *ngIf=\"showAns\">\r\n                        <h2>{{_nameQues}} {{_num}}</h2>\r\n                        <br>\r\n                        <h2>{{_nameAns}} <input type=\"text\" #result id=\"ketqua\"> </h2>\r\n                        <div id=\"submit_ans\">\r\n                            <button type=\"button\" (click)=\"checkAns(result.value); result.value=''\" id=\"kiemtra\">Kiểm tra</button>\r\n                        </div>\r\n                    </div>\r\n                    <!-- chuyển sang bài tiếp theo -->\r\n                    <div *ngIf=\"nextLess\">\r\n                        <div id=\"newLess\">\r\n                            <!-- hoàn thành cả 5 câu hỏi đúng -->\r\n                            <div *ngIf=\"endPer\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 5!</strong></h2>\r\n                                <h2>Bạn đã đạt được 10/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <div *ngIf=\"endLess\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành bài học 5!</strong></h2>\r\n                                <h2>Bạn đã đạt được {{count_true}}/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <h2><a routerLink=\"/sosanh100\" routerLinkActive=\"active\">Bài 1 - chương 3 - So sánh 2 số trong phạm vi 100. </a></h2>\r\n                            <router-outlet></router-outlet>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <!-- số sao hiện trong panel -->\r\n                <h2 class=\"type1\"><strong>Số sao đạt được </strong></h2>\r\n                <br>\r\n                <div class=\"panel panel-body panel-primary\" id=\"panel_star\">\r\n                    <div id=\"starAward\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài toán: Tìm số lớn nhất, tìm số nhỏ nhất.</h1>\r\n    <h2 class=\"type\">Chọn đáp án đúng.</h2>\r\n    <div class=\"container\">\r\n        <div class=\"row\">        \r\n            <div class=\"col-sm-2\"></div>\r\n            <div class=\"col-sm-8\">\r\n                <div id=\"tableCheck\">\r\n                    <table>\r\n                        <tr>\r\n                            <th>Câu 1</th>\r\n                            <th>Câu 2</th>\r\n                            <th>Câu 3</th>\r\n                            <th>Câu 4</th>\r\n                            <th>Câu 5</th>\r\n                        </tr>\r\n                        <tr>\r\n                            <td id=\"0\"></td>\r\n                            <td id=\"1\"></td>\r\n                            <td id=\"2\"></td>\r\n                            <td id=\"3\"></td>\r\n                            <td id=\"4\"></td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <br>\r\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                    <div *ngIf=\"showAns\">\r\n                        <h2> {{MINMAX[count].name_ques}} </h2>\r\n                        <br>\r\n                        <form>\r\n                            <button type=\"button\" #vl1 value={{MINMAX[count].n_1}} (click)=\"checkAns(vl1.value)\">{{MINMAX[count].n_1}}</button>\r\n                            <button type=\"button\" #vl2 value={{MINMAX[count].n_2}} (click)=\"checkAns(vl2.value)\">{{MINMAX[count].n_2}}</button>\r\n                            <button type=\"button\" #vl3 value={{MINMAX[count].n_3}} (click)=\"checkAns(vl3.value)\">{{MINMAX[count].n_3}}</button>\r\n                            <button type=\"button\" #vl4 value={{MINMAX[count].n_4}} (click)=\"checkAns(vl4.value)\">{{MINMAX[count].n_4}}</button>\r\n                            <button type=\"button\" #vl5 value={{MINMAX[count].n_5}} (click)=\"checkAns(vl5.value)\">{{MINMAX[count].n_5}}</button>\r\n                        </form>\r\n                    </div>\r\n                    <div *ngIf=\"nextLess\">\r\n                        <div *ngIf=\"endPer\">\r\n                            <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 4!</strong></h2>\r\n                            <h2>Bạn đã trả lời đúng 5/5 câu hỏi.</h2>\r\n                            <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                        </div>\r\n                        <div *ngIf=\"endLess\">\r\n                            <h2><strong>Chúc mừng bạn đã hoàn thành bài học 4!</strong></h2>\r\n                            <h2>Bạn đã trả lời đúng {{count_true}}/5 câu hỏi.</h2>\r\n                            <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                        </div>\r\n                        <h2><a routerLink=\"/lientruocsau20\" routerLinkActive=\"active\">Bài 5 - Chương 2 - Số liền trước số liền sau phạm vi 20. </a></h2>\r\n                        <router-outlet></router-outlet>\r\n                    </div>\r\n                </div>\r\n            </div>       \r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài 1: Chương 2 - So sánh 2 số phạm vi 20</h1>\r\n    <h2 class=\"type\">Chọn dấu thích hợp</h2>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                    <div *ngIf=\"showAns\">\r\n                        <h2 class=\"type\">{{num_1}} __ {{num_2}} </h2>\r\n                        <!-- kiểm tra giá trị điền vào ô trống -->\r\n                        <p><strong>Chọn dấu thích hợp điền vào chỗ trống</strong></p>\r\n                        <form>\r\n                            <button type=\"button\" #vl1 value=\"<\" (click)=\"checkAns(vl1.value)\"> < </button>\r\n                            <button type=\"button\" #vl2 value=\">\" (click)=\"checkAns(vl2.value)\"> > </button>\r\n                            <button type=\"button\" #vl3 value=\"=\" (click)=\"checkAns(vl3.value)\"> = </button>\r\n                        </form>\r\n                    </div>\r\n                    <!-- chuyển sang bài tiếp theo -->\r\n                    <div *ngIf=\"nextLess\">\r\n                        <div id=\"newLess\">\r\n                            <!-- hoàn thành cả 5 câu hỏi đúng -->\r\n                            <div *ngIf=\"endPer\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 1!</strong></h2>\r\n                                <h2>Bạn đã đạt được 10/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <div *ngIf=\"endLess\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành bài học 1!</strong></h2>\r\n                                <h2>Bạn đã đạt được {{count_true}}/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <h2><a routerLink=\"/sub20\" routerLinkActive=\"active\">Bài 2 - chương 2 - Phép trừ trong phạm vi 20. </a></h2>\r\n                            <router-outlet></router-outlet>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <!-- số sao hiện trong panel -->\r\n                <h2 class=\"type1\"><strong>Số sao đạt được </strong></h2>\r\n                <br>\r\n                <div class=\"panel panel-body panel-primary\" id=\"panel_star\">\r\n                    <div id=\"starAward\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài 2: Chương 2 - Phép trừ trong phạm vi 20.</h1>\r\n    <h2 class=\"type\">Điền số thích hợp vào ô trống</h2>\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                <div *ngIf=\"showAns\">\r\n                    <h2 class=\"type\">{{sub_1}} - {{sub_2}} = <input type=\"text\" #result id=\"ketqua\"> </h2>\r\n                    <!-- kiểm tra giá trị điền vào ô trống -->\r\n                    <div id=\"submit_ans\">\r\n                        <button type=\"button\" (click)=\"checkAns(result.value); result.value=''\" id=\"kiemtra\">Kiểm tra</button>\r\n                    </div>\r\n                </div>\r\n                <!-- chuyển sang bài tiếp theo -->\r\n                <div *ngIf=\"nextLess\">\r\n                    <div id=\"newLess\">\r\n                        <!-- hoàn thành cả 5 câu hỏi đúng -->\r\n                        <div *ngIf=\"endPer\">\r\n                            <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 2!</strong></h2>\r\n                            <h2>Bạn đã đạt được 10/10 sao.</h2>\r\n                            <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                        </div>\r\n                        <div *ngIf=\"endLess\">\r\n                            <h2><strong>Chúc mừng bạn đã hoàn thành bài học 2!</strong></h2>\r\n                            <h2>Bạn đã đạt được {{count_true}}/10 sao.</h2>\r\n                            <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                        </div>\r\n                        <h2><a routerLink=\"/sum20\" routerLinkActive=\"active\">Bài 3 - chương 2 - Phép cộng trong phạm vi 20. </a></h2>\r\n                        <router-outlet></router-outlet>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <!-- số sao hiện trong panel -->\r\n            <h2 class=\"type1\"><strong>Số sao đạt được </strong></h2>\r\n            <br>\r\n            <div class=\"panel panel-body panel-primary\" id=\"panel_star\">\r\n                <div id=\"starAward\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài 3: Chương 2 - Phép cộng trong phạm vi 20.</h1>\r\n    <h2 class=\"type\">Điền số thích hợp vào ô trống</h2>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                    <div *ngIf=\"showAns\">\r\n                        <h2 class=\"type\">{{num_1}} + {{num_2}} = <input type=\"text\" #result id=\"ketqua\"> </h2>\r\n                        <!-- kiểm tra giá trị điền vào ô trống -->\r\n                        <div id=\"submit_ans\">\r\n                            <button type=\"button\" (click)=\"checkAns(result.value); result.value=''\" id=\"kiemtra\">Kiểm tra</button>\r\n                        </div>\r\n                    </div>\r\n                    <!-- chuyển sang bài tiếp theo -->\r\n                    <div *ngIf=\"nextLess\">\r\n                        <div id=\"newLess\">\r\n                            <!-- hoàn thành cả 5 câu hỏi đúng -->\r\n                            <div *ngIf=\"endPer\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 3!</strong></h2>\r\n                                <h2>Bạn đã đạt được 10/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <div *ngIf=\"endLess\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành bài học 3!</strong></h2>\r\n                                <h2>Bạn đã đạt được {{count_true}}/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <h2><a routerLink=\"/minmax20\" routerLinkActive=\"active\">Bài 4 - Chương 2 - Tìm số nhỏ nhất, lớn nhất trong phạm vi 20. </a></h2>\r\n                            <router-outlet></router-outlet>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <!-- số sao hiện trong panel -->\r\n                <h2 class=\"type1\"><strong>Số sao đạt được </strong></h2>\r\n                <br>\r\n                <div class=\"panel panel-body panel-primary\" id=\"panel_star\">\r\n                    <div id=\"starAward\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài 5: Chương 3 - Số liền trước, số liền sau</h1>\r\n    <h2 class=\"type\">Điền số thích hợp vào ô trống</h2>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                    <div *ngIf=\"showAns\">\r\n                        <h2>{{_nameQues}}{{_num}}</h2>\r\n                        <br>\r\n                        <h2>{{_nameAns}} <input type=\"text\" #result id=\"ketqua\"> </h2>\r\n                        <div id=\"submit_ans\">\r\n                            <button type=\"button\" (click)=\"checkAns(result.value); result.value=''\" id=\"kiemtra\">Kiểm tra</button>\r\n                        </div>\r\n                    </div>\r\n                    <!-- chuyển sang bài tiếp theo -->\r\n                    <div *ngIf=\"nextLess\">\r\n                        <div id=\"newLess\">\r\n                            <!-- hoàn thành cả 10 câu hỏi đúng -->\r\n                            <div *ngIf=\"endPer\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 5!</strong></h2>\r\n                                <h2>Bạn đã đạt được 10/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <div *ngIf=\"endLess\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành bài học 5!</strong></h2>\r\n                                <h2>Bạn đã đạt được {{count_true}}/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <h2><a routerLink=\"/diemdoanthang\" routerLinkActive=\"active\">Bài 1 - chương 4 - Điểm và đoạn thẳng. </a></h2>\r\n                            <router-outlet></router-outlet>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <!-- số sao hiện trong panel -->\r\n                <h2 class=\"type1\"><strong>Số sao đạt được </strong></h2>\r\n                <br>\r\n                <div class=\"panel panel-body panel-primary\" id=\"panel_star\">\r\n                    <div id=\"starAward\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài toán: Tìm số lớn nhất, tìm số nhỏ nhất.</h1>\r\n    <h2 class=\"type\">Chọn đáp án đúng.</h2>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-8\">\r\n                <div id=\"tableCheck\">\r\n                    <table>\r\n                        <tr>\r\n                            <th>Câu 1</th>\r\n                            <th>Câu 2</th>\r\n                            <th>Câu 3</th>\r\n                            <th>Câu 4</th>\r\n                            <th>Câu 5</th>\r\n                        </tr>\r\n                        <tr>\r\n                            <td id=\"0\"></td>\r\n                            <td id=\"1\"></td>\r\n                            <td id=\"2\"></td>\r\n                            <td id=\"3\"></td>\r\n                            <td id=\"4\"></td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <br>\r\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                    <div *ngIf=\"showAns\">\r\n                        <h2> {{MINMAX[count].name_ques}} </h2>\r\n                        <br>\r\n                        <form>\r\n                            <button type=\"button\" #vl1 value={{MINMAX[count].n_1}} (click)=\"checkAns(vl1.value)\">{{MINMAX[count].n_1}}</button>\r\n                            <button type=\"button\" #vl2 value={{MINMAX[count].n_2}} (click)=\"checkAns(vl2.value)\">{{MINMAX[count].n_2}}</button>\r\n                            <button type=\"button\" #vl3 value={{MINMAX[count].n_3}} (click)=\"checkAns(vl3.value)\">{{MINMAX[count].n_3}}</button>\r\n                            <button type=\"button\" #vl4 value={{MINMAX[count].n_4}} (click)=\"checkAns(vl4.value)\">{{MINMAX[count].n_4}}</button>\r\n                            <button type=\"button\" #vl5 value={{MINMAX[count].n_5}} (click)=\"checkAns(vl5.value)\">{{MINMAX[count].n_5}}</button>\r\n                        </form>\r\n                    </div>\r\n                    <div *ngIf=\"nextLess\">\r\n                        <div *ngIf=\"endPer\">\r\n                            <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 4!</strong></h2>\r\n                            <h2>Bạn đã trả lời đúng 5/5 câu hỏi.</h2>\r\n                            <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                        </div>\r\n                        <div *ngIf=\"endLess\">\r\n                            <h2><strong>Chúc mừng bạn đã hoàn thành bài học 4!</strong></h2>\r\n                            <h2>Bạn đã trả lời đúng {{count_true}}/5 câu hỏi.</h2>\r\n                            <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                        </div>\r\n                        <h2><a routerLink=\"/lientruocsau100\" routerLinkActive=\"active\">Bài 5 - chương 3 - Số liền trước số liền sau phạm vi 100. </a></h2>\r\n                        <router-outlet></router-outlet>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài 1: Chương 3 - So sánh 2 số phạm vi 100</h1>\r\n    <h2 class=\"type\">Chọn dấu thích hợp</h2>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                    <div *ngIf=\"showAns\">\r\n                        <h2 class=\"type\">{{num_1}} __ {{num_2}} </h2>\r\n                        <!-- kiểm tra giá trị điền vào ô trống -->\r\n                        <p><strong>Chọn dấu thích hợp điền vào chỗ trống</strong></p>\r\n                        <form>\r\n                            <button type=\"button\" #vl1 value=\"<\" (click)=\"checkAns(vl1.value)\"> < </button>\r\n                            <button type=\"button\" #vl2 value=\">\" (click)=\"checkAns(vl2.value)\"> > </button>\r\n                            <button type=\"button\" #vl3 value=\"=\" (click)=\"checkAns(vl3.value)\"> = </button>\r\n                        </form>\r\n                    </div>\r\n                    <!-- chuyển sang bài tiếp theo -->\r\n                    <div *ngIf=\"nextLess\">\r\n                        <div id=\"newLess\">\r\n                            <!-- hoàn thành cả 5 câu hỏi đúng -->\r\n                            <div *ngIf=\"endPer\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 1!</strong></h2>\r\n                                <h2>Bạn đã đạt được 10/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <div *ngIf=\"endLess\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành bài học 1!</strong></h2>\r\n                                <h2>Bạn đã đạt được {{count_true}}/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <h2><a routerLink=\"/sub100\" routerLinkActive=\"active\">Bài 2 - chương 3 - Phép trừ trong phạm vi 100. </a></h2>\r\n                            <router-outlet></router-outlet>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <!-- số sao hiện trong panel -->\r\n                <h2 class=\"type1\"><strong>Số sao đạt được </strong></h2>\r\n                <br>\r\n                <div class=\"panel panel-body panel-primary\" id=\"panel_star\">\r\n                    <div id=\"starAward\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài 2:Chương 3 - Phép trừ trong phạm vi 100.</h1>\r\n    <h2 class=\"type\">Điền số thích hợp vào ô trống</h2>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                    <div *ngIf=\"showAns\">\r\n                        <h2 class=\"type\">{{sub_1}} - {{sub_2}} = <input type=\"text\" #result id=\"ketqua\"> </h2>\r\n                        <!-- kiểm tra giá trị điền vào ô trống -->\r\n                        <div id=\"submit_ans\">\r\n                            <button type=\"button\" (click)=\"checkAns(result.value); result.value=''\" id=\"kiemtra\">Kiểm tra</button>\r\n                        </div>\r\n                    </div>\r\n                    <!-- chuyển sang bài tiếp theo -->\r\n                    <div *ngIf=\"nextLess\">\r\n                        <div id=\"newLess\">\r\n                            <!-- hoàn thành cả 5 câu hỏi đúng -->\r\n                            <div *ngIf=\"endPer\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 2!</strong></h2>\r\n                                <h2>Bạn đã đạt được 10/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <div *ngIf=\"endLess\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành bài học 2!</strong></h2>\r\n                                <h2>Bạn đã đạt được {{count_true}}/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <h2><a routerLink=\"/sum100\" routerLinkActive=\"active\">Bài 3 - chương 3 - Phép cộng trong phạm vi 100. </a></h2>\r\n                            <router-outlet></router-outlet>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <!-- số sao hiện trong panel -->\r\n                <h2 class=\"type1\"><strong>Số sao đạt được </strong></h2>\r\n                <br>\r\n                <div class=\"panel panel-body panel-primary\" id=\"panel_star\">\r\n                    <div id=\"starAward\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài 2:Chương 3 - Phép cộng trong phạm vi 100.</h1>\r\n    <h2 class=\"type\">Điền số thích hợp vào ô trống</h2>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                    <div *ngIf=\"showAns\">\r\n                        <h2 class=\"type\">{{num_1}} + {{num_2}} = <input type=\"text\" #result id=\"ketqua\"> </h2>\r\n                        <!-- kiểm tra giá trị điền vào ô trống -->\r\n                        <div id=\"submit_ans\">\r\n                            <button type=\"button\" (click)=\"checkAns(result.value); result.value=''\" id=\"kiemtra\">Kiểm tra</button>\r\n                        </div>\r\n                    </div>\r\n                    <!-- chuyển sang bài tiếp theo -->\r\n                    <div *ngIf=\"nextLess\">\r\n                        <div id=\"newLess\">\r\n                            <!-- hoàn thành cả 10 câu hỏi đúng -->\r\n                            <div *ngIf=\"endPer\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành xuất sắc bài học 3!</strong></h2>\r\n                                <h2>Bạn đã đạt được 10/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <div *ngIf=\"endLess\">\r\n                                <h2><strong>Chúc mừng bạn đã hoàn thành bài học 3!</strong></h2>\r\n                                <h2>Bạn đã đạt được {{count_true}}/10 sao.</h2>\r\n                                <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                            </div>\r\n                            <h2><a routerLink=\"/minmax100\" routerLinkActive=\"active\">Bài 4 - chương 3 - Tìm số nhỏ nhất, lớn nhất trong phạm vi 100. </a></h2>\r\n                            <router-outlet></router-outlet>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <!-- số sao hiện trong panel -->\r\n                <h2 class=\"type1\"><strong>Số sao đạt được </strong></h2>\r\n                <br>\r\n                <div class=\"panel panel-body panel-primary\" id=\"panel_star\">\r\n                    <div id=\"starAward\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài 2 - Chương 4: Hình tam giác, hình vuông, hình tròn</h1>\r\n    <h2 class=\"type\">Chọn đáp án đúng.</h2>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-10\">\r\n                <div id=\"tableCheck\">\r\n                    <table>\r\n                        <tr>\r\n                            <th>Câu 1</th>\r\n                            <th>Câu 2</th>\r\n                            <th>Câu 3</th>\r\n                            <th>Câu 4</th>\r\n                            <th>Câu 5</th>\r\n                            <th>Câu 6</th>\r\n                        </tr>\r\n                        <tr>\r\n                            <td id=\"0\"></td>\r\n                            <td id=\"1\"></td>\r\n                            <td id=\"2\"></td>\r\n                            <td id=\"3\"></td>\r\n                            <td id=\"4\"></td>\r\n                            <td id=\"5\"></td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <br>\r\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                    <div *ngIf=\"showAns\">\r\n                        <h2 class=\"type\"> Đây là hình ??? </h2>\r\n                        <img src={{hinh[x].link_img}}/>\r\n                        <br>\r\n                        <form class=\"form-inline\">\r\n                            <button type=\"button\" #vl1 value={{hinh[x].ans_A}} (click)=\"checkAns(vl1.value)\">{{hinh[x].ans_A}}</button>\r\n                            <button type=\"button\" #vl2 value={{hinh[x].ans_B}} (click)=\"checkAns(vl2.value)\">{{hinh[x].ans_B}}</button>\r\n                            <button type=\"button\" #vl3 value={{hinh[x].ans_C}} (click)=\"checkAns(vl3.value)\">{{hinh[x].ans_C}}</button>\r\n                        </form>\r\n                    </div>\r\n                    <div *ngIf=\"theEnd\">\r\n                        <h2><strong>Chúc mừng bạn đã hoàn thành bài học 2!</strong></h2>\r\n                        <h2>Bạn đã đạt được {{count_true}}/6 sao.</h2>\r\n                        <h2><strong>Chuyển đến bài học mới nào</strong></h2>\r\n                        <h2><a routerLink=\"/demtamgiac\" routerLinkActive=\"active\">Bài 3 - chương 4 - Đếm tam giác. </a></h2>\r\n                        <router-outlet></router-outlet>\r\n                    </div>                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <h1>Bài 1 - Chương 5: Xem giờ</h1>\r\n    <h2 class=\"type\">Chọn đáp án đúng.</h2>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-10\">\r\n                <div id=\"tableCheck\">\r\n                    <table>\r\n                        <tr>\r\n                            <th>Câu 1</th>\r\n                            <th>Câu 2</th>\r\n                            <th>Câu 3</th>\r\n                            <th>Câu 4</th>\r\n                            <th>Câu 5</th>\r\n                        </tr>\r\n                        <tr>\r\n                            <td id=\"0\"></td>\r\n                            <td id=\"1\"></td>\r\n                            <td id=\"2\"></td>\r\n                            <td id=\"3\"></td>\r\n                            <td id=\"4\"></td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <br>\r\n                <div class=\"panel panel-body panel-primary\" id=\"divQues\">\r\n                    <div *ngIf=\"showAns\">\r\n                        <h2 class=\"type\"> Đồng hồ chỉ mấy giờ??? </h2>\r\n                        <img src={{clocks[count].link_img}}/>\r\n                        <br>\r\n                        <form class=\"form-inline\">\r\n                            <button type=\"button\" #vl1 value={{clocks[count].ans_A}} (click)=\"checkAns(vl1.value)\">{{clocks[count].ans_A}}</button>\r\n                            <button type=\"button\" #vl2 value={{clocks[count].ans_B}} (click)=\"checkAns(vl2.value)\">{{clocks[count].ans_B}}</button>\r\n                            <button type=\"button\" #vl3 value={{clocks[count].ans_C}} (click)=\"checkAns(vl3.value)\">{{clocks[count].ans_C}}</button>\r\n                        </form>\r\n                    </div>\r\n                    <div *ngIf=\"theEnd\">\r\n                        <h2><strong>Chúc mừng bạn đã hoàn thành bài học!</strong></h2>\r\n                        <h2>Bạn đã đạt được {{count_true}}/5 sao.</h2>\r\n                        <h2>Kết thúc bài học.</h2>\r\n                        <h2>Cảm ơn bạn đã chọn trang web của chúng tôi.</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(126);


/***/ })
]),[263]);
//# sourceMappingURL=main.bundle.js.map