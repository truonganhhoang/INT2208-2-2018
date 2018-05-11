-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th5 06, 2018 lúc 04:01 PM
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
-- Cơ sở dữ liệu: `applicasoft`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `informationtable`
--

CREATE TABLE `informationtable` (
  `STT` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `birthday` date NOT NULL,
  `gender` text COLLATE utf8_vietnamese_ci NOT NULL,
  `identify` int(12) NOT NULL,
  `dateOfIdentify` date NOT NULL,
  `adress` text COLLATE utf8_vietnamese_ci NOT NULL,
  `phoneNumber` int(11) NOT NULL,
  `email` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `image` varchar(2000) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `questions`
--

CREATE TABLE `questions` (
  `made` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `question_name` text COLLATE utf8_vietnamese_ci NOT NULL,
  `image` varchar(500) COLLATE utf8_vietnamese_ci NOT NULL,
  `answer1` varchar(500) COLLATE utf8_vietnamese_ci NOT NULL,
  `answer2` varchar(500) COLLATE utf8_vietnamese_ci NOT NULL,
  `answer3` varchar(5000) COLLATE utf8_vietnamese_ci NOT NULL,
  `answer4` varchar(5000) COLLATE utf8_vietnamese_ci NOT NULL,
  `answer` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `questions`
--

INSERT INTO `questions` (`made`, `id`, `question_name`, `image`, `answer1`, `answer2`, `answer3`, `answer4`, `answer`) VALUES
(1, 1, 'Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?', '', 'Bị nghiêm cấm.', 'Bị nghiêm cấm tùy từng trường hợp.', 'Không bị nghiêm cấm.', '', 2),
(1, 2, 'Những hành vi nào sau đây bị cấm?', '', 'Bấm còi, rú ga liên tục, bấm còi trong thời gian từ 22h-5h ngày hôm sau', 'Bấm còi hơi, sử dụng đèn chiếu xa trong khu đô thị và khu dân cư, trừ các xe ưu tiên khi đang làm nhiệm vụ.', '', '', 1),
(1, 3, 'Lắp đặt, sử dụng còi, đèn không đúng thiết kế của nhà sản xuất đối với từng loại xe cơ giới.', '', 'Lắp đặt, sử dụng còi, đèn không đúng thiết kế của nhà sản xuất đối với từng loại xe cơ giới.', 'Sử dụng thiết bị âm thanh gây mất trật tự an toàn giao thông, trật tự công cộng.', 'Cả 2 phương án trên', '', 3),
(1, 4, 'Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông có bị nghiêm cấm hay không?', '', 'Không bị nghiêm cấm.', 'Nghiêm cấm tùy từng trường hợp cụ thể.', 'Bị nghiêm cấm', '', 2),
(1, 5, 'Khi xảy ra tai nạn giao thông, những hành vi nào ghi ở dưới đây bị nghiêm cấm?', '', 'Xâm phạm tính mạng, sức khỏe, tài sản của người bị tai nạn giao thông; xâm phạm tính mạng, sức khỏe, tài sản của người gây tai nạn giao thông.', 'Lợi dụng việc xảy ra tai nạn giao thông để hành hung, đe dọa, xúi giục, gây sức ép, làm mất trật tự, cản trở việc xử lý tai nạn giao thông.', '', '', 3),
(1, 6, 'Việc sản xuất, mua bán, sử dụng biển số xe cơ giới, xe máy chuyên dùng được quy định như thế nào trong luật giao thông đường bộ?', '', 'Nghiêm cấm sản xuất, được phép sử dụng.', 'Nghiêm cấm mua bán, cho phép sử dụng.', 'Nghiêm cấm sản xuất, mua bán, sử dụng trái phép.', '', 3),
(1, 7, 'Người lái xe không được vượt xe khác khi gặp trường hợp nào dưới đây?', '', 'Trên cầu hẹp có một làn xe; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt.', 'Điều kiện thời tiết hoặc đường không bảo đảm an toàn cho việc vượt; xe ưu tiên đang phát tín hiệu ưu tiên làm nhiệm vụ.', '', '', 3),
(1, 8, 'Người điều khiển xe mô tô hai bánh. Ba bánh, xe gắn máy có được phép sử dụng xe để kéo, đẩy các xe khác, vật khác khi tham gia giao thông không?', '', 'Được phép', 'Tùy trường hợp', 'Không được phép', '', 2),
(1, 9, 'Người ngồi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông không được thực hiện những hành vi nào dưới đây?', '', 'Đội mũ bảo hiểm và cài quai đúng quy cách.', 'Sử dụng ô; bám, kéo hoặc đẩy các phương tiện khác.', 'Đứng trên yên, giá đèo hàng hoặc ngồi trên tay lái; các hành vi khác gây mất trật tự an toàn giao thông.', '', 3),
(1, 10, 'Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?', '', 'Được mang, vác tùy trường hợp cụ thể.', 'Không được mang, vác.', 'Được mang, vác nhưng phải đảm bảo an toàn.', '', 3),
(1, 11, 'Biển nào báo hiệu giao nhau có tín hiệu đèn?', 'c11de1.jpg', 'Biển 1', 'Biển 2', 'Biển 3', '', 3),
(1, 12, 'Biển nào báo hiệu giao nhau với đường ưu tiên?', 'c12de1.jpg', 'Biển 1', 'Biển 3', 'Biển 2', 'Cả 3 biển', 3),
(1, 13, 'Biển nào báo hiệu cấm xe mô tô hai bánh đi vào?', 'c13de1.jpg', 'Biển 1', 'Biển 2', 'Biển 3', '', 1),
(1, 14, 'Khi gặp biển báo nào xe được rẽ trái?', 'c14de1.jpg', 'Biển 1', 'Biển 2', 'Không biển nào', '', 1),
(1, 15, 'Biển nào báo hiệu tuyến đường cầu vượt cắt qua?', 'c15de1.jpg', 'Biển 1 và 2', 'Biển 1 và 3', 'Biển 2 và 3', '', 1),
(1, 16, 'Theo tín hiệu đèn xe nào được phép đi?', 'c16de1.jpg', 'Xe con và xe khách', 'Moto', '', '', 1),
(1, 17, 'Xe nào đỗ vi phạm quy tắc giao thông?', 'c17de1.jpg', 'Cả 2 xe', 'Không xe nào', 'Chỉ xe moto', 'Chỉ xe tải', 3),
(1, 18, 'Các xe đi như thế nào là đúng quy tắc giao thông?', 'c18de1.jpg', 'Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng.', 'Cho phép các xe ở mọi hướng được rẽ phải.', 'Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép đi.', '', 2),
(1, 19, 'Theo tín hiệu đèn, xe nào được quyền đi là đúng quy tắc giao thông?', 'c19de1.jpg', 'Xe khách, mô tô', 'Xe tải, mô tô', 'Xe con, xe tải', '', 2),
(1, 20, ' Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?', 'c20de1.jpg', 'Xe của bạn, mô tô, xe con.', 'Xe con, xe của bạn, mô tô.', 'Mô tô, xe con, xe của bạn.', '', 2),
(2, 1, 'Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào không được phép?', '', 'Buông cả hai tay, hoặc đi xe bằng một bánh đối với xe hai bánh; bằng hai bánh đối với xe ba bánh; chạy quá tốc độ quy định.', 'Sử dụng xe để kéo, đẩy xe khác, vật khác và chở vật cồng kềnh; để chân chống quẹt xuống đất và các hành vi khác gây mất trật tự an toàn giao thông.', 'Chạy đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.', '', 2),
(2, 2, ' Bảo đảm trật tự, an toàn giao thông đường bộ là trách nhiệm của ai?', '', 'Là trách nghiệm của ngành Giao thông vận tải và ngành Công an.', 'Là trách nhiệm của cơ quan, tổ chức, cá nhân.', 'Là trách nhiệm của cảnh sát giao thông.', '', 1),
(2, 3, 'Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu vàng, người điều khiển phương tiện phải thực hiện như thế nào?', '', 'Phải cho xe dừng lại trước vạch dừng, trừ trường hợp đã đi quá vạch dừng thì được đi tiếp; trong trường hợp tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ, chú ý quan sát, nhường đường cho người đi bộ qua đường.', 'Phải cho xe nhanh chóng vượt qua vạch dừng để đi qua đường giao nhau và chú ý đảm bảo an toàn; khi đèn tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ, chú ý quan sát người đi bộ để đảm bảo an toàn.', 'Cả hai ý nêu trên.', '', 3),
(2, 4, 'Biển báo hiệu đường bộ gồm những nhóm nào, ý nghĩa của từng nhóm?', '', 'Nhóm biển báo cấm để biểu thị các điều cấm; nhóm biển báo hiệu nguy hiểm để cảnh báo các tình huống nguy hiểm có thể xảy ra; nhóm biển hiệu lệnh để báo hiệu các hiệu lệnh phải thi hành.', 'Nhóm biển chỉ dẫn để chỉ dẫn hướng đi hoặc các điều cần biết; nhóm biển phụ đề thuyết minh bổ sung các loại biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh và biển chỉ dẫn.', '', '', 1),
(2, 5, 'Tại nơi đường giao nhau, khi người điều khiển giao thông ra hiệu lệnh bằng hai tay hoặc một tay giang ngang để báo hiệu thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?\r\nhello', '', 'Người tham gia giao thông ở phía trước và ở phía sau người điều khiển giao thông phải dừng lại; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi.', 'Người tham gia giao thông ở phía trước và ở phía sau người điều khiển giao thông được đi thẳng; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi thẳng và rẽ phải.', '', '', 1),
(2, 6, 'Tại nơi đường giao nhau, khi người điều khiển giao thông ra hiệu lệnh bằng tay phải giơ về phía trước để báo hiệu thì người tham gia giao thông phải đi như thế nào?', '', 'Người tham gia giao thông ở phía sau người điều khiển phải dừng lại; người ở phía trước người điều khiển được rẽ trái; người ở phía bên trái người điều khiển được rẽ trái; người đi bộ qua đường phải dừng lại sau lưng người điều khiển giao thông.', 'Người tham gia giao thông ở phía sau và bên phải người điều khiển phải dừng lại; người ở phía trước người điều khiển được rẽ phải; người ở phía bên trái người điều khiển giao thông được đi tất cả các hướng; người đi bộ qua đường phải đi sau lưng người điều khiển giao thông.', '', '', 1),
(2, 7, 'Tại nơi đường giao nhau, khi người điều khiển giao thông ra hiệu lệnh tay giơ thẳng đứng để báo hiệu thì người tham gia giao thông phải đi như thế nào?', '', 'Người tham gia giao thông ở phía trước và ở phía sau người điều khiển giao thông phải dừng lại; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi.', 'Người tham gia giao thông ở các hướng phải dừng lại.', 'Tất cả các trường hợp trên.', '', 3),
(2, 8, 'Trên đường giao thông, khi hiệu lệnh của người điều khiển giao thông trái với hiệu lệnh của đèn hoặc biển báo hiệu thì người tham gia giao thông phải chấp hành theo hiệu lệnh nào?', '', 'Hiệu lệnh của người điều khiển giao thông.', 'Hiệu lệnh của đèn điều khiển giao thông.', 'Hiệu lệnh của biển báo hiệu đường bộ.', '', 1),
(2, 9, 'Tại nơi có biển báo hiệu cố định lại có báo hiệu tạm thời thì người tham gia giao thông phải chấp hành hiệu lệnh của báo hiệu nào?\r\n', '', 'Biển báo hiệu cố định.', 'Báo hiệu tạm thời.', '', '', 2),
(2, 10, 'Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi như thế nào?\r\nhello', '', 'Cho xe đi trên bất kỳ làn đường nào; khi cần thiết phải chuyển làn đường, người lái xe phải có đèn tín hiệu báo trước và phải bảo đảm an toàn.', 'Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn phải có tín hiệu báo trước và phải bảo đảm an toàn.', 'Phải cho xe đi trong một làn đường, khi chuyển làn đường phải có tín hiệu báo trước, chú ý quan sát để bảo đảm an toàn.', '', 1),
(2, 11, 'Biển nào báo hiệu sắp đến chỗ giao nhau với đường sắt có rào chắn?', 'c11de2.jpg', 'Biển 1', 'Biển 2', 'Biển 3', '', 1),
(2, 12, 'Biển nào báo hiệu giao nhau với đường ưu tiên?', 'c12de2.jpg', 'Biển 1 và 3', 'Biển 2', 'Biển 3', '', 2),
(2, 13, 'Biển nào báo hiệu cấm xe mô tô ba bánh đi vào?', 'c13de2.jpg', 'Biển 1 và 3', 'Biển 1 và  2', 'Biển 2 và 3', '', 3),
(2, 14, 'Biển nào cấm xe rẽ trái?', 'c14de2.jpg', 'Biển 1', 'Biển 2', 'Cả 2 phương án trên', '', 1),
(2, 15, 'Biển nào báo hiệu đoạn đường hay xảy ra tai nạn?', 'c15de2.jpg', 'Biển 1', ' Biển 2', 'Biển 2 và 3', '', 3),
(2, 16, ' Xe nào được quyền đi trước trong trường hợp này?', 'c16de2.jpg', 'Mô tô', 'Xe cứu thương', '', '', 2),
(2, 17, 'Theo hướng mũi tên, những hướng nào xe gắn máy đi được?', 'c17de2.jpg', 'Cả 3 hướng', 'Chỉ hướng 1 và 3', 'Chỉ hướng 1', '', 3),
(2, 18, 'Xe nào vi phạm quy tắc giao thông?', 'c18de2.jpg', 'Xe khách.', 'Mô tô', 'Xe con', 'Xe con và mô tô', 4),
(2, 19, 'Trong hình dưới đây, những xe nào vi phạm quy tắc giao thông?', 'c19de2.jpg', 'Xe con (B), mô tô (C', 'Xe con (A), mô tô (C)', 'Xe con (E), mô tô (D)', 'Tất cả các loại xe trên', 4),
(2, 20, 'Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?', 'c20de2.jpg', 'Xe tải, mô tô', 'Xe khách, mô tô', 'Xe tải, xe con', 'Mô tô, xe con', 1),
(3, 1, 'Khái niệm “dải phân cách” được hiểu như thể nào là đúng?', '', 'Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.', 'Là bộ phận của đường để xác định ranh giới của đất dành cho đường bộ theo chiều ngang của đường.', 'Là bộ phận của đường đê ngăn cách không cho các loại xe vào những nơi không được phép.', '', 1),
(3, 2, 'Đường bộ trong khu vực đông dân cư gồm những đường nào?\r\n', '', 'Đường bộ năm trong khu vực nội thành phố, nội thị xã, nội thị trấn, khu công nghiệp có động người và phương tiện tham gia giao thông.', 'Đường bộ năm trong khu vực nội thành phố, nội thị xã và những đoạn đường bộ được xác định từ vị trí có hiệu lực của biển báo hiệu \"Bắt đầu khu đông dân cư\" đến vị trí có hiệu lực của biển báo hiệu \"Hết khu đông dân cư\".', 'Đường bộ có dòng người, phương tiện tham gia giao thông và những đoạn đường bộ được xác định từ vị trí có hiệu lực của biển báo hiệu “Bắt đầu khu đông dân cư\" đến vị trí có hiệu lực của biển báo hiệu “Hết khu động dân cư.', '', 3),
(3, 3, 'Những hành vi nào ghi ở dưới đây bị nghiêm cấm:', '', 'Đua xe, cổ vũ đua xe, tổ chức đua xe trái phép.', 'Lạng lách, đánh võng.', '', '', 1),
(3, 4, 'Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma tuý có bị nghiêm cấm hay không?\r\n', '', 'Bị nghiêm cầm.', 'Không bị nghiêm cấm.', '', '', 0),
(3, 5, 'Khi xảy ra tai nạn giao thông, những hành vi nào ghi ở dưới đây bị nghiêm cấm?\r\nhello', '', 'Xâm phạm tính mạng, súc khoẻ, tài sản của người bị tai nạn giao thông; xâm phạm tính mạng, sức khoẻ, tài sản của người gây tai nạn giao thông;', 'Lợi dụng việc xảy ra tai nạn giao thông để hành hung, đe doạ, xúi giục, gây sức ép, làm mất trật tự, cản trở việc xử lý tai nạn giao thông.', '', '', 2),
(3, 6, 'Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?', '', 'Bị nghiêm cấm', 'Bị nghiêm cấm tùy từng trường hợp', 'Không bị nghiêm cấm', '', 2),
(3, 7, 'Trên đường có nhiều làn đường, người điểu khiển phương tiện tham gia giao thông sử dụng làn đường như thế nào là đúng?', '', 'Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn đường phải có tín hiệu báo trước và đảm bảo an toàn.', 'Phương tiện tham gia giao thông đường bộ di chuyển với tốc độ thấp hơn đi về bên trái.', 'Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ phải đi trên làn đường bên phải trong cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái; phương tiện tham gia giao thông đường bộ di chuyển vơi tốc độ thấp hơn đi về bên phải.\r\n', '', 3),
(3, 8, 'Bảo đảm trật tự, an toàn giao thông đường bộ là trách nhlệm của ai?', '', 'Là trách nhiệim của ngành Giao thông vàn tải và ngành Công an.', 'Là trách nhiệm của cơ quan, tổ chức, cá nhân.', 'Là trách nhiệm của cảnh sát giao thông.', '', 2),
(3, 9, 'Người điều khiển xe ô tô, máy kéo, xe máy chuyên dùng trên đường mà trong máu hoặc hơi thở có nồng độ cồn vượt quá bao nhiêu thì bị cấm?\r\n', '', 'Người điều khiển xe ô tô, máy kéo, xe máy chuyên dùng trên đường mà trong máu có nồng độ cồn vượt quá 50 miligam/100 mililít máu hoặc 0,25 miligam/ 1 lít khi thờ.', 'Người điều khiển xe ô tô, máy kéo, xe máy chuyên dùng trên đường mà trong máu hoặc hơi thờ có nồng độ cồn.', 'Người điều khiển xe ô tô, máy kéo, xe máy chuyên dùng trên đường mà trong máu có nồng độ còn vượt quá 80 miligaml100 mililít máu hoặc 40 miligam/1 lít khi thờ.', '', 3),
(3, 10, 'Người Iál xe cố tình vi phạm Luật Glao thông đường bộ. không phân blệt làn đường, vạch phân làn, phóng nhanh, vượt ẩu, vượt đèn đỏ, di vào đường cấm, đường một chiếu được coi là hành vi nào trong các hành vi sau đây?\r\n', '', 'Là bình thường', 'Là thiếu văn hóa giao thông', 'Là có văn hóa giao thông', '', 2),
(3, 11, 'Biển nào báo hiệu đoạn đường hay xảy ra tai nạn?', 'c11de3.jpg', 'Biển 1', 'Biển 2', 'Biển 2 và 3', '', 3),
(3, 12, 'Khi gặp biển nào được rẽ trái?', 'c12de3.jpg', 'Biển 1', 'Biển 2', 'Không biển nào', '', 1),
(3, 13, 'Biển nào báo hiệu đường sắt giao nhau với đường bộ không có rào chắn?', 'c13de3.jpg', 'Biển 1 và 2', 'Biển 2 và 3', 'Biển 1 và 3', 'Cả ba biển', 0),
(3, 14, 'Biển nào báo hiệu giao nhau với đường ưu tiên?', 'c14de3.jpg', 'Biển 1 và 3', 'Biển 2', 'Biển 3', '', 1),
(3, 15, 'Biển nào cấm quay xe?', 'c15de3.jpg', 'Biển 1', 'Biển 2', 'Không biển nào', '', 2),
(3, 16, 'Thứ tự xe đi như thế nào là đúng quy tắc giao thông?', 'c16de3.jpg', 'Xe lam, mô tô, xe con, xe đạp', 'Xe con, xe đạp, môt tô, xe lam', 'Xe lam, xe con, mô tô + xe đạp', 'Mô tô + xe đạp, xe la, xe con', 4),
(3, 17, ' Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?', 'c17de3.jpg', 'Xe khách, xe tải, mô tô, xe con', 'Xe con, xe khách, xe tải, mô tô', 'Mô tô, xe tải, xe khách, xe con', 'Mô tô, xe tải, xe con, xe khách', 3),
(3, 18, 'Xe nào được quyền đi trước?', 'c18de3.jpg', 'Xe tải', 'Xe con', 'Xe lam', '', 1),
(3, 19, 'Thứ tự đi như thế nào là đúng quy tắc giao thông?', 'c19de3.jpg', 'Xe tải, xe lam, mô tô', 'Xe lam, xe tải, mô tô', 'Mô tô, xe lam, xe tải', 'Xe lam, mô tô, xe tải', 4),
(3, 20, 'Theo hướng mũi tên, những hướng nào xe gắn máy đi được?', 'c20de3.jpg', 'Cả ba hướng', 'Chỉ hướng 1 và 3', 'Chỉ hướng 1', '', 2),
(4, 1, 'Dải phân cách trên đường bộ là những loại nào?', '', 'Loại cố định', 'Loại di động', '', '', 1),
(4, 2, 'Người điều khiển xe mô tô, xe gắn máy trên đường mà trong máu có nồng độ cồn vượt quá bao nhiêu thì bị cấm?', '', 'Nồng độ cồn vượt quá 50 miligam/100 mililits máu', 'Nồng độ cồn vượt quá 40 miligam/100 mililits máu', 'Nồng độ cồn vượt quá 30 miligam/100 mililits máu', '', 2),
(4, 3, 'Người ngôi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông không được thực hiện những hành vi sau đây?', '', 'Đội mũ bảo hiểm và cài quai đúng quy cách', 'Sử dụng ô; bám, kéo hoặc đấy các phương tiện khác', 'Đứng trên yên, giá đèo hàng hoặc ngồi trên tay lái; các hành vi khác gây mất trật tự an toàn giao thông', '', 2),
(4, 4, 'Những trường hợp nào ghi dưới đây không được đi vào đường cao tốc trừ người, phương tiện, thiết bị phục vụ cho việc quản lý, bảo trì đường cao tốc?\r\n', '', 'Người đi bộ, xe thô sơ, xe gắn máy và xe ô tô', 'Xe mô tô và xe máy chuyên dùng có tốc độ thiết kế lớn hơn 70km/h', 'Người đi bộ, xe thô sơ, xe gắn máy, xe mô tô và xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn 70 km/h', '', 1),
(4, 5, ' Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng?', '', 'Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh xe hơn phải vào vị trí tránh, nhường đường cho xe kia đi.', 'Xe xuống dốc phải nhường đường cho xe đang lên dốc; xe nào có chướng ngại vật ở phía trước phải nhường đường cho xe không có chướng ngại vật đi trước.', 'Xe lên dốc phải nhường đường cho xe xuống dốc', '', 1),
(4, 6, 'Tại nơi đường giao nhau, khi người điều khiển giao thông ra hiệu lệnh bằng hai tay hoặc một tay giang ngang để báo hiệu thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?', '', 'Người tham gia giao thông ở phía trước và ở phía sau người điều khiển giao thông phải dừng lại; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi.', 'Người tham gia giao thông ở phía trước và ở phía sau người điều khiển giao thông được đi thẳng; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi thẳng và rẽ phải.', '', '', 1),
(4, 7, 'Trên đường bộ trong khu vực đông dân cư, xe mô tô hai bánh, xe gắn máy tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?', '', '60 Km/h', '50 Km/h', '40 Km/h', '30 Km/h', 1),
(4, 8, 'Người ngồi trên xe mô tô hai bánh, me mô tô ba bánh, xe gắn máy phải đội mũ bảo hiểm có cài quai đúng quy cách khi nào?', '', 'Khi tham gia giao thông đường bộ', 'Chỉ khi đi trên đường cao tốc', '', '', 1),
(4, 9, 'Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?', '', 'Xe cơ giới, xe máy chuyên dùng phải bật đèn; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; chỉ được dừng xe, đỗ xe ở nơi quy định', 'Xe cơ giới phải bật đèn ngay cả khi đường hầm sáng; phải cho xe máy chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết.', 'Xe máy chuyên dùng phải bật đèn xanh ngay cả khi đường hầm sáng; phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết.', '', 2),
(4, 10, 'Người có văn hóa giao thông khi điều khiển xe cơ giới tham gia giao thông đường bộ phải đảm bảo các điều kiện gì?\r\n', '', 'Có giấy phép lái xe phù hợp với loại xe được phép điều khiển; xe cơ giới đảm bảo các quy định về chất lượng, an toàn kỹ thuật và bảo vệ môi trường', 'Có giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe cơ giới còn hiệu lực; nộp phí sử dụng đường bộ theo quy định', '', '', 2),
(4, 11, 'Xe nào dưới đây vi phạm quy tắc giao thông?', 'c11de4.jpg', 'Cả hai xe', 'Không xe nào vi phạm', 'Chỉ xe mô tô vi phạm', 'Chỉ xe tải vi phạm', 2),
(4, 12, 'Khi gặp biển này, xe lam và mô tô ba bánh có được phép rẽ trái hay rẽ phải không?\r\n', 'c12de4.jpg', 'Được phép', 'Không được phép', '', '', 2),
(4, 13, 'Biển nào chỉ dẫn tên đường trên các tuyến đường đối ngoại?', 'c13de4.jpg', 'Biển 1', 'Biển 2', 'Biển 3', 'Biển 1 và 2', 4),
(4, 14, 'Ba biển này có ý nghĩa hiệu lực như thế nào?', 'c14de4.jpg', 'Cấm các loại xe ở biển phụ đi vào', 'Cấm các loại xe cơ giới đi vào trừ loại xe ở biển phụ.', '', '', 1),
(4, 15, 'Biển nào báo hiệu sắp đến chỗ giao nhau với đường sắt có rào chắn?', 'c15de4.jpg', 'Biển 1', 'Biển 2 và 3', 'Biển 3', '', 2),
(4, 16, 'Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?\r\n', 'c16de4.jpg', 'Xe lam, xe cứu thương, xe con', 'Xe cứu thương, xe con, xe lam', 'Xe con, xe lam, xe cứu thương', '', 3),
(4, 17, 'Trong trường hợp này, thứ tự xe đi như thế nào là đúng quy tắc giao thông?', 'c17de4.jpg', 'Xe công an, xe quân sự, xe con + mô tô', 'Xe quân sự, xe công an, xe con + mô tô', 'Xe mô tô + xe con, xe quân sự, xe công an', '', 1),
(4, 18, 'Bạn có được phép vượt xe mô tô phía trước không?', 'c18de4.jpg', 'Cho phép', 'Không được vượt', '', '', 2),
(4, 19, 'Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?', 'c19de4.jpg', 'Xe của bạn. mô tô, xe con', 'Xe con, xe của bạn, mô tô', 'Mô tô, xe con, xe cả bạn', '', 3),
(4, 20, 'Biển nào báo hiệu tuyến đường cầu vượt cắt qua?', 'c20de4.jpg', 'Biển 1 và 2', 'Biển 2 và 3', 'Biển 1 và 3', '', 1),
(5, 1, 'Trong các trường hợp dưới đây, để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?', '', 'Phải đội mũ bảo hiểm có cài quai đúng quy cách, mặc quần áo gọn gàng', 'Không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính)', 'Buông cả hai tay hoặc đi xe bằng một bánh', 'Tất cả các ý nêu trên', 4),
(5, 2, 'Đường bộ trong khu vực đông dân cư gồm những đường nào?\r\n', '', 'Đường bộ nằm trong khu vực nội thành phố, nội thị xã, nội thị trấn, khu công nghiệp có đông người và phương tiện tham gia giao thông', 'Đường bộ nằm trong khu vực nội thành phố, nội thị xã và những đoạn đường bộ được xác định từ bị trí có hiệu lực của biển báo hiệu \"Bắt đầu khu đông dân cư\" đến vị trí có hiệu lực của biển báo hiệu \"Hết khu đông dân cư\"', 'Đường bộ có đông người, phương tiện tham gia giao thông và những đoạn đường bộ được xác định từ vị trí có hiệu lực của biển báo hiệu \"Bắt đầu khu đông dân cư\" đến vị trí có hiệu lực của biển báo hiệu \"hết khu đông dân cư\"', '', 3),
(5, 3, 'Trên đường bộ trong khu vực đông dân cư, xe mô tô hai bánh, xe gắn máy tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu', '', '60 Km/h', '50 Km/h', '40 Km/h', '30 Km/h', 2),
(5, 4, 'Trên đường bộ trong khu vực đông dân cư, loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 40 Km/h?\r\n', '', 'Ô tô chở người trên 30 chỗ ngồi, ô tô tải có trọng tải từ 3500Kg trở lên, ô tô sơ mi rơ moóc, ô tô kéo rơ moóc, ô tô kéo xe khác, ô tô chuyên dùng, xe mô tô, xe gắn máy.', 'Ô tô chở người đến 30 chỗ ngồi, ô tô tải có trọng tải dưới 3500K', 'Xe máy kéo, xe công nông, xe lam, xe lôi máy, xe xích lô máy, xe ba gác máy, xe máy chuyên dùng và các loại xe tương tự (loại đang được phép hoạt động)', '', 3),
(5, 5, 'Trên đường bộ ngoài khu vực đông dân cư, loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 50Km/h?\r\n', '', 'Ô tô chở người đến 30 chỗ ngồi (trừ ô tô buýt), ô tô tải có trọng tải dưới 3500Kg', 'Ô tô chở người đến 30 chỗ ngồi (trừ ô tô buýt), ô tô tải có trọng tải dưới 3500Kg trở lên.', 'Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.', 'Ô tô buýt, ô tô sơ mi rơ moóc, ô tô chuyên dùng, xe mô tô.', 1),
(5, 6, 'Khái niệm về văn hóa giao thông được hiểu như thế nào là đúng?\r\n', '', 'Là sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông; là ý thức trách nhiệm với cộng đồng khi tham gia giao thông.', 'Là ứng xử có văn hóa, có tình yêu thương con người trong các tình huống không may xảy ra khi tham gia giao thông.', '', '', 1),
(5, 7, 'Người lái xe cố tình vi phạm luật giao thông đường bộ, không phân biệt làn đường, vạch phân làn, phóng nhanh, vượt ẩu, vượt đèn đỏ, đi vào đường cấm, đường một chiều được coi là hành vi nào trong các hành vi sau đây?', '', 'Là bình thường', 'Là thiếu văn hóa giao thông', 'Là có văn hóa gio thông', '', 2),
(5, 8, 'Trong các hành vi dưới đây, người lái xe mô tô có văn hóa giao thông phải ứng xử như thế nào?\r\n', '', 'Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông, đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm', 'Chấp hành quy định về tốc độ, đèn tín hiệu, biển báo hiệu, vạch kẻ đường khi lái xe.', 'Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật.', 'Cả ba ý nêu trên', 4),
(5, 9, 'Trong các hành vi dưới đây, người lái xe mô tô văn hóa giao thông phải ứng xử như thế nào?\r\nhello', '', 'Điều khiển xe đi bên phải theo chiều đi của mình.', 'Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông.', 'Đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đúng quy cách.', 'Đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm', 3),
(5, 10, 'Người có văn hóa giao thông khi điều khiển xe cơ giới tham gia giao thông đường bộ phải đảm bảo các điều kiện gì?', '', 'Có giấy phép lái xe phù hợp với loại xe được phép điều khiển; xe cơ giới đảm bảo các quy định về chất lượng, an toàn kỹ thuật và bảo vệ môi trường', 'Có giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe cơ giới còn hiệu lực; nộp phí sử dụng đường bộ theo quy định.', '', '', 1),
(5, 11, 'Biển nào cấm người đi bộ?', 'c11de5.jpg', 'Biển 1', 'Biển 1 và 3', 'Biển 2', 'Biển 2 và 3', 4),
(5, 12, 'Biển nào báo hiệu đường sắt giao nhau với đường bộ không có rào chắn?', 'c12de5.jpg', 'Biển 1 và 2', 'Biển 2 và 3', 'Biển 1 và 3', 'Cả ba biển', 4),
(5, 13, 'Biển nào báo hiệu giao nhau với đường không ưu tiên?\r\n', 'c13de5.jpg', 'Biển 1', 'Biển 2', 'Biển 3', '', 1),
(5, 14, 'Biển nào xe mô tô hai bánh được đi vào?', 'c14de5.jpg', 'Biển 1 và 2', 'Biển 1 và 3', 'Biển 2 và 3', '', 2),
(5, 15, 'Khi đến chỗ giao nhau, gặp biển nào thì người lái xe không được cho xe đi thẳng, phải rẽ sang hướng khác?', 'c15de5.jpg', 'Biển 1 và 3', 'Biển 2 và 3', 'Biển 1 và 2', 'Cả ba biển', 4),
(5, 16, 'Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?', 'c16de5.jpg', 'Xe tải, xe lam, xe con, mô tô', 'Xe tải, mô tô, xe lam, xe con', 'Xe lam, xe tải, xe con, mô tô', 'Mô tô, xe lam, xe tải, xe c', 3),
(5, 17, 'Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?', 'c17de5.jpg', 'Xe khách, xe tải, mô tô', 'Xe tải, xe con, mô tô', 'Xe khách, xe con, mô tô', '', 1),
(5, 18, 'Xe tải kéo mô tô ba bánh như hình này có đúng quy tắc giao thông?', 'c18de5.jpg', 'Đúng', 'Không đúng', '', '', 1),
(5, 19, 'Trong hình dưới đây, xe nào chấp hành đúng quy tắc giao thông?', 'c19de5.jpg', 'Chỉ xe khách, mô tô', 'Tất cả các loại xe trên', 'Không xe nào chấp hành đúng quy tắc giao thông', '', 2),
(5, 20, 'Theo tín hiệu đèn của xe cơ giới, xe nào vi phạm quy tắc giao thông?', 'c20de5.jpg', 'Xe mô tô', 'Xe ô tô con', 'Không xe nào vi phạm', '', 1),
(6, 1, 'Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào không được phép?\r\n', '', 'Buông cả hai tay hoặc đi xe bằng một bánh đối với xe hai bánh, bằng hai bánh đối với xe ba bánh; chạy quá tốc độ quy định', 'Sử dụng xe để kéo, đẩy xe khác, vật khác và chở vật cồng kềnh; để chân chống quẹt xuống đất và các hành vi khác gây mất trật tự an toàn giao thông', 'Chạy đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.', '', 1),
(6, 2, 'Bảo đảm trật tự, an toàn giao thông đường bộ là trách nhiệm của ai?', '', 'Là trách nhiệm của ngành Giao thông vận tải và ngành Công an.', 'Là trách nhiệm của cơ quan, tổ chức, cá nhân.', 'Là trách nhiệm của cảnh sát giao thông.', '', 2),
(6, 3, 'Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu vàng, người điều khiển phương tiện phải thực hiện như thế nào?\r\n', '', 'Phải cho xe dừng lại trước vạch dừng, trừ trường hợp đã đi quá vạch dừng thì được đi tiếp; trong trường hợp tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ, chú ý quan sát, nhường đường cho người đi bộ qua đường.', 'hải cho xe nhanh chóng vượt qua vạch dừng để đi qua đường giao nhau và chú ý đảm bảo an toàn; khi đèn tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ, chú ý quan sát người đi bộ để bảo đảm an toàn.', 'Cả hai ý nêu trên', '', 3),
(6, 4, 'Biển báo hiệu đường bộ gồm những nhóm nào, ý nghĩa của từng nhóm?', '', 'Nhóm biển báo cấm để biểu thị các điều cấm; nhóm biển báo báo hiệu nguy hiểm để cảnh báo các tình huống nguy hiểm có thể xảy ra; nhóm biển hiệu lệnh để báo hiệu các hiệu lệnh phải thi hành.', 'Nhóm biển chỉ dẫn để chỉ dẫn hướng đi hoặc các điều cần biết; nhóm biển phụ để thuyết minh bổ sung các loại biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh và biển chỉ dẫn.', '', '', 0),
(6, 5, 'Tại nơi đường giao nhau, khi người điều khiển giao thông ra hiệu lệnh bằng hai tay hoặc một tay giang ngang để báo hiệu thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?', '', 'Người tham gia giao thông ở phía trước và ở phía sau người điều khiển giao thông phải dừng lại; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi.', 'Người tham gia giao thông ở phía trước và ở phía sau người điều khiển giao thông được đi thẳng; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi thẳng và rẽ phải.', '', '', 2),
(6, 6, 'Tại nơi đường giao nhau, khi người điều khiển giao thông ra hiệu lệnh tay giơ thẳng đứng để báo hiệu thì người tham gia giao thông phải đi như thế nào?\r\n', '', 'Người tham gia giao thông ở phía trước và ở phía sau người điều khiển giao thông phải dừng lại; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi.', 'Người tham gia giao thông ở các hướng phải dừng lại.', 'Tất cả các trường hợp trên', '', 0),
(6, 7, 'Tại nơi đường giao nhau, khi người điều khiển giao thông ra hiệu lệnh bằng tay phải giơ về phía trước để báo hiệu thì người tham gia giao thông phải đi như thế nào?', '', 'Người tham gia giao thông ở phía sau người điều khiển phải dừng lại; người ở phía trước người điều khiển được rẽ trái; người ở phía bên trái người điều khiển được rẽ trái; người đi bộ qua đường phải dừng lại sau lưng người điều khiển giao thông.', 'Người tham gia giao thông ở phía sau và bên phải người điều khiển phải dừng lại; người ở phía trước người điều khiển giao thông được đi tất cả các hướng; người đi bộ qua đường phải đi sau lưng người điều khiển giao thông.', '', '', 2),
(6, 8, 'Trên đường giao thông, khi hiệu lệnh của người điều khiển giao thông trái với hiệu lệnh của đèn hoặc biển báo hiệu thì người tham gia giao thông phải chấp hành theo hiệu lệnh nào?', '', 'Hiệu lệnh của người điều khiển giao thông.', 'Hiệu lệnh của đèn điều khiển giao thông.', 'Hiệu lệnh của biển báo hiệu đường bộ.', '', 1),
(6, 9, 'Tại nơi có biển báo hiệu cố định lại có báo hiệu tạm thời thì người tham gia giao thông phải chấp hành hiệu lệnh của báo hiệu nào?', '', 'Biển báo hiệu cố định', 'Báo hiệu tạm thời', '', '', 2),
(6, 10, 'Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi như thế nào?', '', 'Cho xe đi trên bất kỳ làn đường nào, khi cần thiết phải chuyển làn đường, người lái xe phải có đèn tín hiệu báo trước và phải bảo đảm an toàn.', 'Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn phải có tín hiệu báo trước và phải bảo đảm an toàn.', 'Phải cho xe đi trong một làn đường, khi chuyển làn đường phải có tín hiệu báo trước, chú ý quan sát để đảm bảo an toàn.', '', 3),
(6, 11, 'Biển nào báo hiệu sắp đến chỗ giao nhau với đường sắt có rào chắn?', 'c11de6.jpg', 'Biển 1', 'Biển 2 và 3', 'Biển 3', '', 1),
(6, 12, 'Biển nào báo hiệu giao nhau với đường ưu tiên?', 'c12de6.jpg', 'Biển 1 và 3', 'Biển 2', 'Biển 3', '', 2),
(6, 13, 'Biển nào báo hiệu cấm xe mô tô ba bánh đi vào?', 'c13de6.jpg', 'Biển 1 và 3', 'Biển 1 và 2', 'Biển 2 và 3', '', 3),
(6, 14, 'Biển nào cấm xe rẽ trái?', 'c14de6.jpg', 'Biển 1', 'Biển 2', 'Cả hai biển', '', 3),
(6, 15, 'Biển nào báo hiệu đoạn đường hay xảy ra tai nạn?', 'c15de6.jpg', 'Biển 1', 'Biển 2', 'Biển 2 và biển 3', '', 2),
(6, 16, 'Xe nào được quyền đi trước trong trường hợp này?', 'c16de6.jpg', 'Mô tô', 'Xe cứu thương', '', '', 1),
(6, 17, 'Theo hướng mũi tên, những hướng nào xe gắn máy đi được?', 'c17de6.jpg', 'Cả ba hướn', 'Chỉ hướng 1 và 3', 'Chỉ hướng 1', '', 2),
(6, 18, 'Xe nào vi phạm quy tắc giao thông?', 'c18de6.jpg', 'Xe khách', 'Mô tô', 'Xe con', 'Xe con và mô tô', 4),
(6, 19, 'Trong hình dưới, xe nào vi phạm quy tắc giao thông?', 'c19de6.jpg', 'Xe con (B), mô tô (C)', 'Xe con (A), mô tô (C)', 'Xe con (E), mô tô (D)', 'Tất cả các loại xe trên', 4),
(6, 20, 'Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?', 'c20de6.jpg', 'Xe ải, mô tô', 'Xe khách, mô tô', 'Xe tải, xe con', 'Mô tô, xe con', 4);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `informationtable`
--
ALTER TABLE `informationtable`
  ADD PRIMARY KEY (`identify`),
  ADD UNIQUE KEY `identify` (`identify`),
  ADD UNIQUE KEY `primar` (`STT`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `informationtable`
--
ALTER TABLE `informationtable`
  MODIFY `STT` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
