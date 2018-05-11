-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2018 at 06:40 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `instrusment`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `id` int(5) NOT NULL,
  `A` text CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL,
  `B` text COLLATE utf8_unicode_ci NOT NULL,
  `C` text CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL,
  `D` text COLLATE utf8_unicode_ci NOT NULL,
  `questionID` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`id`, `A`, `B`, `C`, `D`, `questionID`) VALUES
(1, '5', '7', '12', '8', 1),
(2, 'True.', 'False.', 'What is tempo.', 'Not to play.', 2),
(3, 'The note to play.', 'How fast or slow to play.', 'the note to play.', 'To repeat.', 3),
(4, '5.', '6.', '7.', '3.', 4),
(5, 'Bb(B flat).', 'B#(B sharp).', 'Gb(G flat).', 'G#(G sharp).', 5),
(6, 'E.', 'F.', 'C.', 'D.', 6),
(7, 'What of the lines in a stave.', 'A pair of vertical lines,the second of which is bold.', 'A vertical line (also called a bar line).', 'A line above or below the stave.', 7),
(8, 'F and G.', 'C and D.', 'E and F.', 'D and E.', 8),
(9, 'Play faster.', 'Highter in pitch by one semitone(half step).', 'Slower in pitch by one semitone(half step).', 'To repeat.', 9),
(10, 'Play faster.', 'Highter in pitch by one semitone(half step).', 'Slower in pitch by one semitone(half step).', 'To repeat.', 10),
(11, 'Hammer-ons, bends, slides.', 'Hammer-ons, bonds, slides. ', 'Hammer-offs, bends, slides.', 'Hammer-ons, bends, slades.', 11),
(12, '7.', '5.', '6.', '4.', 12),
(13, '1st', '5th', '2nd', '6th', 13),
(14, 'E A G D B E.', 'E A D G B E.', 'E B G D A E.', 'E A D G B D.', 14),
(15, '80.', '110.', '120.', '60.', 15),
(16, 'A B C D E E G.', 'A B C D E F G H.', 'A B C D E F G.', 'A B C D E F', 16),
(17, 'Alternate.', 'Alternative.', 'Alternator.', 'Altering.', 17),
(18, '1', '4', '2', '3', 18),
(19, '8.', '4.', '16.', '2.', 19),
(20, '10.', '8.', '7.', '9.', 20);

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `user_id` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `subject` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`user_id`, `subject`, `content`) VALUES
('25', 'help', 'help me..........'),
('27', 'Demo web', 'Demo web Demo web Demo web Demo web Demo web Demo web Demo web Demo web Demo web Demo web.:DD');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `course_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `course_name`) VALUES
(1, 'Music theory'),
(2, 'Guitar'),
(3, 'Piano'),
(4, 'Violin'),
(5, 'Flute');

-- --------------------------------------------------------

--
-- Table structure for table `courses_user`
--

CREATE TABLE `courses_user` (
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `participateDate` date NOT NULL,
  `status` varchar(1) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `courses_user`
--

INSERT INTO `courses_user` (`user_id`, `course_id`, `participateDate`, `status`) VALUES
(22, 1, '2015-05-05', ''),
(25, 1, '2018-05-07', 'f'),
(25, 2, '2018-05-07', 'f'),
(26, 1, '2018-05-10', 'f'),
(27, 1, '2018-05-10', 'f'),
(27, 2, '2018-05-10', 'f');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(5) NOT NULL,
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `correct` varchar(1) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `name`, `correct`) VALUES
(1, 'How many basic notes in music ?', 'C'),
(2, 'The notes on the piano repeat themselves in group of 12 over and over again?', 'A'),
(3, 'What is tempo?', 'B'),
(4, 'How many lines a staff made of ?', 'A'),
(5, 'A sharp (A#) is equivalent to which of these notes?', 'A'),
(6, 'Which note doesn’t have a sharp?', 'A'),
(7, 'What is a ledger line??', 'D'),
(8, 'There is no black key on a piano (or keyboard) between which of the following notes?', 'D'),
(9, 'What sharp means?', 'B'),
(10, 'What flat means?', 'C'),
(11, 'What are 3 common lead guitar techniques?', 'A'),
(12, 'How many strings on a standard guitar?', 'C'),
(13, 'Which is the thickest string?', 'D'),
(14, 'What notes are the guitar strings tuned to in standard tuning from 6th to 1st strings?', 'B'),
(15, 'What is a fastest BPM (beats per minute) tempo?', 'C'),
(16, 'What are the notes of music?', 'C'),
(17, 'What is down/up picking called?', 'A'),
(18, 'How many fingers are used to play the open string A D and E major chords?\r\n', 'D'),
(19, 'How many beats in a bar 4/4?', 'B'),
(20, 'How many different notes are there in a major scale?', 'C');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `fullname` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `password` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `phone` int(12) NOT NULL,
  `birthday` date NOT NULL,
  `sex` varchar(3) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `fullname`, `password`, `email`, `phone`, `birthday`, `sex`) VALUES
(18, 'Yukikhiem', 'Nguyễn Bá Khiêm', 'ef797c8118f02dfb649607dd5d3f8c76', 'duoinhungconmuak@gmail.com', 0, '0000-00-00', ''),
(21, 'Nguyen1234', 'Nguyên Nguyễn Nguyền', 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f', 'duoinhungconmuak@gmail.com', 0, '0000-00-00', ''),
(22, 'Admin1', 'Admin', 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f', 'duoinhungconmuak@gmail.com', 0, '0000-00-00', ''),
(23, 'Khiem1998', 'Nguyễn Bá Khiêm', 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f', 'khiem123@gmail.com', 0, '0000-00-00', ''),
(25, 'Trungdinh', ':fullname', 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f', ':email', 0, '0000-00-00', ':se'),
(26, 'Admin1357', 'Nguyễn Bá Khiêm', 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f', 'khiemnguyenb98@gmail.com', 0, '0000-00-00', ''),
(27, 'Khiemk61t', 'Nguyễn Khiêm', '15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225', 'khiemnguyenb98@gmail.com', 0, '0000-00-00', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`questionID`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `courses_user`
--
ALTER TABLE `courses_user`
  ADD KEY `courses` (`course_id`),
  ADD KEY `user` (`user_id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `question` FOREIGN KEY (`questionID`) REFERENCES `question` (`id`);

--
-- Constraints for table `courses_user`
--
ALTER TABLE `courses_user`
  ADD CONSTRAINT `courses` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
