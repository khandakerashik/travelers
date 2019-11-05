-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2019 at 10:10 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travelers`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(110) NOT NULL,
  `name` varchar(110) NOT NULL,
  `email` varchar(110) NOT NULL,
  `phone` varchar(110) NOT NULL,
  `gender` varchar(110) NOT NULL,
  `password` varchar(110) NOT NULL,
  `profile_pic` varchar(110) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `phone`, `gender`, `password`, `profile_pic`) VALUES
(1, 'Khandaker Ashik', 'ashik@gmail.com', '01681710719', 'male', '123456', '/abc/'),
(2, 'hey', 'hey@hey.com', '12345678', 'male', '123456', '/abc/'),
(3, 'test', 'test@gmail.com', '12345678', 'male', '123456', '/abc/'),
(4, 'test', 'test@gmail.com', '12345678', 'male', '123456', '/abc/'),
(5, 'testanother', 'test2@gmail.com', '12345678', 'male', '123456', '/abc/'),
(6, 'sds', 'dsdsd@gmail.com', '12345678', 'male', '123456', '/abc/');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(10) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `description` longtext NOT NULL,
  `location` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `date` varchar(50) NOT NULL,
  `postby` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `catagory` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `title`, `description`, `location`, `image`, `date`, `postby`, `name`, `catagory`) VALUES
(2, 'Lost Friends', ' Praesent sed lectus in augue condimentum interdum. Etiam vel nisi eget sapien ornare sodales quis id lacus. Aenean tristique finibus euismod. Nulla tristique sem vel ex mollis, congue dapibus magna fermentum. Pellentesque pellentesque, ex vel consectetur ultrices, odio purus porta diam, id fringilla sem dui sed felis. Nunc vestibulum commodo magna consectetur interdum. Aenean tempus ac mi in feugiat. Quisque in magna est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor elementum porta. Mauris ante nisi, porta id placerat eget, ultricies ut magna. Integer ac nulla consequat, efficitur ligula vitae, tincidunt dolor. Aliquam accumsan at libero in iaculis. Praesent a ultrices risus. Nulla ultrices velit ut tempor eleifend. Curabitur pulvinar vulputate magna, sed fringilla purus porta sed. Nunc molestie leo quis ex consectetur cursus. Cras in dapibus nunc, vel congue magna. Morbi sagittis aliquam imperdiet. Duis lobortis hendrerit leo eu sagittis. Aliquam quam justo, mattis quis pellentesque congue, malesuada ac metus. Nulla facilisi. </p>\r\n\r\n                                    <p> Fusce sit amet massa quam. Nam fermentum lacinia neque, id mattis lorem vestibulum ac. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur felis ut magna egestas, in rutrum ipsum condimentum. Praesent nibh odio, condimentum ut rhoncus vitae, pharetra ut neque. Maecenas porttitor et metus vitae gravida. Quisque sollicitudin enim ligula, in rutrum arcu condimentum a. Curabitur vehicula at tellus sit amet venenatis. Duis et commodo metus. Phasellus eu congue velit, mattis eleifend mauris. Curabitur eu suscipit erat, auctor commodo enim. Cras posuere, tortor vitae hendrerit malesuada, diam nunc dignissim dolor, dictum lacinia leo lacus non nulla. </p>\r\n\r\n                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor elementum porta. Mauris ante nisi, porta id placerat eget, ultricies ut magna. Integer ac nulla consequat, efficitur ligula vitae, tincidunt dolor. Aliquam accumsan at libero in iaculis. Praesent a ultrices risus. Nulla ultrices velit ut tempor eleifend. Curabitur pulvinar vulputate magna, sed fringilla purus porta sed. Nunc molestie leo quis ex consectetur cursus. Cras in dapibus nunc, vel congue magna. Morbi sagittis aliquam imperdiet. Duis lobortis hendrerit leo eu sagittis. Aliquam quam justo, mattis quis pellentesque congue, malesuada ac metus. Nulla facilisi. </p>', 'Agargoan', '/abc/images/portfolio_01.jpg', '10 Sep 2019', 'khandakerashik@gmail.com', 'ashik', 'blog'),
(4, 'Realistic Gold Iphone 7', ' Praesent sed lectus in augue condimentum interdum. Etiam vel nisi eget sapien ornare sodales quis id lacus. Aenean tristique finibus euismod. Nulla tristique sem vel ex mollis, congue dapibus magna fermentum. Pellentesque pellentesque, ex vel consectetur ultrices, odio purus porta diam, id fringilla sem dui sed felis. Nunc vestibulum commodo magna consectetur interdum. Aenean tempus ac mi in feugiat. Quisque in magna est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor elementum porta. Mauris ante nisi, porta id placerat eget, ultricies ut magna. Integer ac nulla consequat, efficitur ligula vitae, tincidunt dolor. Aliquam accumsan at libero in iaculis. Praesent a ultrices risus. Nulla ultrices velit ut tempor eleifend. Curabitur pulvinar vulputate magna, sed fringilla purus porta sed. Nunc molestie leo quis ex consectetur cursus. Cras in dapibus nunc, vel congue magna. Morbi sagittis aliquam imperdiet. Duis lobortis hendrerit leo eu sagittis. Aliquam quam justo, mattis quis pellentesque congue, malesuada ac metus. Nulla facilisi. </p>\r\n\r\n                                    <p> Fusce sit amet massa quam. Nam fermentum lacinia neque, id mattis lorem vestibulum ac. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur felis ut magna egestas, in rutrum ipsum condimentum. Praesent nibh odio, condimentum ut rhoncus vitae, pharetra ut neque. Maecenas porttitor et metus vitae gravida. Quisque sollicitudin enim ligula, in rutrum arcu condimentum a. Curabitur vehicula at tellus sit amet venenatis. Duis et commodo metus. Phasellus eu congue velit, mattis eleifend mauris. Curabitur eu suscipit erat, auctor commodo enim. Cras posuere, tortor vitae hendrerit malesuada, diam nunc dignissim dolor, dictum lacinia leo lacus non nulla. </p>\r\n\r\n                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor elementum porta. Mauris ante nisi, porta id placerat eget, ultricies ut magna. Integer ac nulla consequat, efficitur ligula vitae, tincidunt dolor. Aliquam accumsan at libero in iaculis. Praesent a ultrices risus. Nulla ultrices velit ut tempor eleifend. Curabitur pulvinar vulputate magna, sed fringilla purus porta sed. Nunc molestie leo quis ex consectetur cursus. Cras in dapibus nunc, vel congue magna. Morbi sagittis aliquam imperdiet. Duis lobortis hendrerit leo eu sagittis. Aliquam quam justo, mattis quis pellentesque congue, malesuada ac metus. Nulla facilisi. </p>', 'Mirpur', '/abc/images/portfolio_03.jpg', '10 sep 2019', 'farhantanvin@gmail.com', 'farhan', 'blog');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `postby` varchar(50) NOT NULL,
  `agencyname` varchar(100) NOT NULL,
  `place` varchar(100) NOT NULL,
  `date` varchar(30) NOT NULL,
  `description` longtext NOT NULL,
  `person_capacity` varchar(20) NOT NULL,
  `cost_per_person` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL,
  `catagory` varchar(50) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `postby`, `agencyname`, `place`, `date`, `description`, `person_capacity`, `cost_per_person`, `image`, `catagory`, `status`) VALUES
(2, 'Eames chair', 'farhantanvin@gmail.com', 'FarhanBD', 'Shylet', '10 Oct 2019', 'Praesent sed lectus in augue condimentum interdum. Etiam vel nisi eget sapien ornare sodales quis id lacus. Aenean tristique finibus euismod. Nulla tristique sem vel ex mollis, congue dapibus magna fermentum. Pellentesque pellentesque, ex vel consectetur ultrices, odio purus porta diam, id fringilla sem dui sed felis. Nunc vestibulum commodo magna consectetur interdum. Aenean tempus ac mi in feugiat. Quisque in magna est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor elementum porta. Mauris ante nisi, porta id placerat eget, ultricies ut magna. Integer ac nulla consequat, efficitur ligula vitae, tincidunt dolor. Aliquam accumsan at libero in iaculis. Praesent a ultrices risus. Nulla ultrices velit ut tempor eleifend. Curabitur pulvinar vulputate magna, sed fringilla purus porta sed. Nunc molestie leo quis ex consectetur cursus. Cras in dapibus nunc, vel congue magna. Morbi sagittis aliquam imperdiet. Duis lobortis hendrerit leo eu sagittis. Aliquam quam justo, mattis quis pellentesque congue, malesuada ac metus. Nulla facilisi. </p>\r\n\r\n                                    <p> Fusce sit amet massa quam. Nam fermentum lacinia neque, id mattis lorem vestibulum ac. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur felis ut magna egestas, in rutrum ipsum condimentum. Praesent nibh odio, condimentum ut rhoncus vitae, pharetra ut neque. Maecenas porttitor et metus vitae gravida. Quisque sollicitudin enim ligula, in rutrum arcu condimentum a. Curabitur vehicula at tellus sit amet venenatis. Duis et commodo metus. Phasellus eu congue velit, mattis eleifend mauris. Curabitur eu suscipit erat, auctor commodo enim. Cras posuere, tortor vitae hendrerit malesuada, diam nunc dignissim dolor, dictum lacinia leo lacus non nulla. </p>\r\n', '40', '3000', '/abc/images/portfolio_08.jpg', 'events', '1'),
(3, 'Cox\'s Bazar', 'Ashik', 'Sky Travelers', 'ctg', '10 Oct 2019', 'description', '20', '4500tk', '/abc/', 'event', '0');

-- --------------------------------------------------------

--
-- Table structure for table `freaks`
--

CREATE TABLE `freaks` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `password` varchar(100) NOT NULL,
  `profile_pic` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `freaks`
--

INSERT INTO `freaks` (`id`, `name`, `email`, `phone`, `gender`, `password`, `profile_pic`) VALUES
(14, 'farhantanvin', 'farhantanvin@gmail.com', '01676518531', 'male', '123456', '/abc');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(100) NOT NULL,
  `sender` varchar(100) NOT NULL,
  `reciever` varchar(100) NOT NULL,
  `message` varchar(100) NOT NULL,
  `read_status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `sender`, `reciever`, `message`, `read_status`) VALUES
(1, 'farhan@gmail.com', 'admin@travelers.com', 'Hey', '1'),
(2, 'arnab@gmail.com', 'ashik@gmail.com', 'will not show', '0'),
(3, 'farhan@gmail.com', 'admin@travelers.com', 'test', '1'),
(4, 'arnab@gmail.com', 'admin@travelers.com', 'will show', '1'),
(5, 'arnab@gmail.com', 'admin@travelers.com', 'test again', '0'),
(6, 'arnab@gmail.com', 'admin@travelers.com', 'hello from arnab', '0'),
(7, 'ashik@gmail.com', 'admin@travelers.com', 'hello there', '0'),
(8, 'admin@travelers.com', 'arnab@gmail.com', 'hi', '0'),
(9, 'admin@travelers.com', 'arnab@gmail.com', 'test again reply', '0'),
(10, 'admin@travelers.com', 'reciever@gmail.com', 'hello from send message', '0');

-- --------------------------------------------------------

--
-- Table structure for table `travel_agencies`
--

CREATE TABLE `travel_agencies` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `agency_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `profile_pic` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `travel_agencies`
--

INSERT INTO `travel_agencies` (`id`, `name`, `agency_name`, `email`, `phone`, `gender`, `password`, `profile_pic`) VALUES
(5, 'ratul', 'Ratul', 'ratul@gmail.com', '01676518531', 'male', '123456', '/abc');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_type` varchar(100) NOT NULL,
  `active_status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `user_type`, `active_status`) VALUES
(19, 'farhantanvin', 'farhantanvin@gmail.com', '123456', 'freaks', '1'),
(20, 'ratul', 'ratul@gmail.com', '123456', 'agencies', '1'),
(21, 'ashik', 'kh.ashik96@gmail.com', 'pass', 'Admin', '1'),
(22, 'Khandaker Ashik', 'ashik@gmail.com', '123456', 'Admin', '1'),
(23, 'hey', 'hey@hey.com', '123456', 'Admin', '1'),
(24, 'test', 'test@gmail.com', '123456', 'Admin', '1'),
(25, 'testanother', 'test2@gmail.com', '123456', 'Admin', '1'),
(26, 'sds', 'dsdsd@gmail.com', '123456', 'Admin', '1'),
(27, 'freaktest', 'fa@gmail.com', '123456', 'freaks', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `freaks`
--
ALTER TABLE `freaks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `travel_agencies`
--
ALTER TABLE `travel_agencies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(110) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `freaks`
--
ALTER TABLE `freaks`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `travel_agencies`
--
ALTER TABLE `travel_agencies`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
