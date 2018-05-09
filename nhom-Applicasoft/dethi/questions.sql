-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th4 01, 2018 lúc 09:01 AM
-- Phiên bản máy phục vụ: 10.1.30-MariaDB
-- Phiên bản PHP: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `tracnghiem`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question_name` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `answer1` varchar(500) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `answer2` varchar(500) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `answer3` varchar(500) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `answer` varchar(500) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `questions`
--

INSERT INTO `questions` (`id`, `question_name`, `answer1`, `answer2`, `answer3`, `answer`) VALUES
(1, 'Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?', 'Bị nghiêm cấm.', 'Bị nghiêm cấm tùy từng trường hợp.', 'Không bị nghiêm cấm.', '2'),
(2, 'Những hành vi nào sau đây bị cấm?', 'Bấm còi, rú ga liên tục, bấm còi trong thời gian từ 22h-5h ngày hôm sau', 'Bấm còi hơi, sử dụng đèn chiếu xa trong khu đô thị và khu dân cư, trừ các xe ưu tiên khi đang làm nhiệm vụ.', 'Cả 2 đều sai', '2'),
(3, 'Lắp đặt, sử dụng còi, đèn không đúng thiết kế của nhà sản xuất đối với từng loại xe cơ giới.', 'Lắp đặt, sử dụng còi, đèn không đúng thiết kế của nhà sản xuất đối với từng loại xe cơ giới.', 'Sử dụng thiết bị âm thanh gây mất trật tự an toàn giao thông, trật tự công cộng.', 'Cả 2 đều sai', '3'),
(4, 'Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông có bị nghiêm cấm hay không?', 'Không bị nghiêm cấm.', 'Nghiêm cấm tùy từng trường hợp cụ thể.', 'Bị nghiêm cấm', '2'),
(5, 'Khi xảy ra tai nạn giao thông, những hành vi nào ghi ở dưới đây bị nghiêm cấm?', 'Xâm phạm tính mạng, sức khỏe, tài sản của người bị tai nạn giao thông; xâm phạm tính mạng, sức khỏe, tài sản của người gây tai nạn giao thông.', 'Lợi dụng việc xảy ra tai nạn giao thông để hành hung, đe dọa, xúi giục, gây sức ép, làm mất trật tự, cản trở việc xử lý tai nạn giao thông.', 'Cả 2 phương án trên', '3'),
(6, 'Việc sản xuất, mua bán, sử dụng biển số xe cơ giới, xe máy chuyên dùng được quy định như thế nào trong luật giao thông đường bộ?', 'Nghiêm cấm sản xuất, được phép sử dụng.', 'Nghiêm cấm mua bán, cho phép sử dụng.', 'Nghiêm cấm sản xuất, mua bán, sử dụng trái phép.', '3'),
(7, 'Người lái xe không được vượt xe khác khi gặp trường hợp nào dưới đây?', 'Trên cầu hẹp có một làn xe; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt.', 'Điều kiện thời tiết hoặc đường không bảo đảm an toàn cho việc vượt; xe ưu tiên đang phát tín hiệu ưu tiên làm nhiệm vụ.', 'Cả 2 đều đúng', '3'),
(8, 'Người điều khiển xe mô tô hai bánh. Ba bánh, xe gắn máy có được phép sử dụng xe để kéo, đẩy các xe khác, vật khác khi tham gia giao thông không?', 'Được phép', 'Tùy trường hợp', 'Không được phép', '2'),
(9, 'Người ngồi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông không được thực hiện những hành vi nào dưới đây?', 'Đội mũ bảo hiểm và cài quai đúng quy cách.', 'Sử dụng ô; bám, kéo hoặc đẩy các phương tiện khác.', 'Đứng trên yên, giá đèo hàng hoặc ngồi trên tay lái; các hành vi khác gây mất trật tự an toàn giao thông.', '3'),
(10, 'Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?', 'Được mang, vác tùy trường hợp cụ thể.', 'Không được mang, vác.', 'Được mang, vác nhưng phải đảm bảo an toàn.', '3');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
