-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2019 at 10:09 PM
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
(2, 'Lost Friends', ' Praesent sed lectus in augue condimentum interdum. Etiam vel nisi eget sapien ornare sodales quis id lacus. Aenean tristique finibus euismod. Nulla tristique sem vel ex mollis, congue dapibus magna fermentum. Pellentesque pellentesque, ex vel consectetur ultrices, odio purus porta diam, id fringilla sem dui sed felis. Nunc vestibulum commodo magna consectetur interdum. Aenean tempus ac mi in feugiat. Quisque in magna est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor elementum porta. Mauris ante nisi, porta id placerat eget, ultricies ut magna. Integer ac nulla consequat, efficitur ligula vitae, tincidunt dolor. Aliquam accumsan at libero in iaculis. Praesent a ultrices risus. Nulla ultrices velit ut tempor eleifend. Curabitur pulvinar vulputate magna, sed fringilla purus porta sed. Nunc molestie leo quis ex consectetur cursus. Cras in dapibus nunc, vel congue magna. Morbi sagittis aliquam imperdiet. Duis lobortis hendrerit leo eu sagittis. Aliquam quam justo, mattis quis pellentesque congue, malesuada ac metus. Nulla facilisi. </p>\r\n\r\n                                    <p> Fusce sit amet massa quam. Nam fermentum lacinia neque, id mattis lorem vestibulum ac. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur felis ut magna egestas, in rutrum ipsum condimentum. Praesent nibh odio, condimentum ut rhoncus vitae, pharetra ut neque. Maecenas porttitor et metus vitae gravida. Quisque sollicitudin enim ligula, in rutrum arcu condimentum a. Curabitur vehicula at tellus sit amet venenatis. Duis et commodo metus. Phasellus eu congue velit, mattis eleifend mauris. Curabitur eu suscipit erat, auctor commodo enim. Cras posuere, tortor vitae hendrerit malesuada, diam nunc dignissim dolor, dictum lacinia leo lacus non nulla. </p>\r\n\r\n                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor elementum porta. Mauris ante nisi, porta id placerat eget, ultricies ut magna. Integer ac nulla consequat, efficitur ligula vitae, tincidunt dolor. Aliquam accumsan at libero in iaculis. Praesent a ultrices risus. Nulla ultrices velit ut tempor eleifend. Curabitur pulvinar vulputate magna, sed fringilla purus porta sed. Nunc molestie leo quis ex consectetur cursus. Cras in dapibus nunc, vel congue magna. Morbi sagittis aliquam imperdiet. Duis lobortis hendrerit leo eu sagittis. Aliquam quam justo, mattis quis pellentesque congue, malesuada ac metus. Nulla facilisi. </p>', 'Agargoan', '/abc/images/portfolio_01.jpg', '10 Sep 2019', 'farhantanvin@gmail.com', 'farhan', 'blog'),
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
  `catagory` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `postby`, `agencyname`, `place`, `date`, `description`, `person_capacity`, `cost_per_person`, `image`, `catagory`) VALUES
(1, 'Harry Potter', 'rakin@gmail.com', 'RakinBD', 'Cos\'x Bazar', '10 Nov 2019', 'Praesent sed lectus in augue condimentum interdum. Etiam vel nisi eget sapien ornare sodales quis id lacus. Aenean tristique finibus euismod. Nulla tristique sem vel ex mollis, congue dapibus magna fermentum. Pellentesque pellentesque, ex vel consectetur ultrices, odio purus porta diam, id fringilla sem dui sed felis. Nunc vestibulum commodo magna consectetur interdum. Aenean tempus ac mi in feugiat. Quisque in magna est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor elementum porta. Mauris ante nisi, porta id placerat eget, ultricies ut magna. Integer ac nulla consequat, efficitur ligula vitae, tincidunt dolor. Aliquam accumsan at libero in iaculis. Praesent a ultrices risus. Nulla ultrices velit ut tempor eleifend. Curabitur pulvinar vulputate magna, sed fringilla purus porta sed. Nunc molestie leo quis ex consectetur cursus. Cras in dapibus nunc, vel congue magna. Morbi sagittis aliquam imperdiet. Duis lobortis hendrerit leo eu sagittis. Aliquam quam justo, mattis quis pellentesque congue, malesuada ac metus. Nulla facilisi. </p>\r\n\r\n                                    <p> Fusce sit amet massa quam. Nam fermentum lacinia neque, id mattis lorem vestibulum ac. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur felis ut magna egestas, in rutrum ipsum condimentum. Praesent nibh odio, condimentum ut rhoncus vitae, pharetra ut neque. Maecenas porttitor et metus vitae gravida. Quisque sollicitudin enim ligula, in rutrum arcu condimentum a. Curabitur vehicula at tellus sit amet venenatis. Duis et commodo metus. Phasellus eu congue velit, mattis eleifend mauris. Curabitur eu suscipit erat, auctor commodo enim. Cras posuere, tortor vitae hendrerit malesuada, diam nunc dignissim dolor, dictum lacinia leo lacus non nulla. </p>\r\n', '20', '5000', '/abc/images/portfolio_06.jpg', 'events'),
(2, 'Eames chair', 'farhantanvin@gmail.com', 'FarhanBD', 'Shylet', '10 Oct 2019', 'Praesent sed lectus in augue condimentum interdum. Etiam vel nisi eget sapien ornare sodales quis id lacus. Aenean tristique finibus euismod. Nulla tristique sem vel ex mollis, congue dapibus magna fermentum. Pellentesque pellentesque, ex vel consectetur ultrices, odio purus porta diam, id fringilla sem dui sed felis. Nunc vestibulum commodo magna consectetur interdum. Aenean tempus ac mi in feugiat. Quisque in magna est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor elementum porta. Mauris ante nisi, porta id placerat eget, ultricies ut magna. Integer ac nulla consequat, efficitur ligula vitae, tincidunt dolor. Aliquam accumsan at libero in iaculis. Praesent a ultrices risus. Nulla ultrices velit ut tempor eleifend. Curabitur pulvinar vulputate magna, sed fringilla purus porta sed. Nunc molestie leo quis ex consectetur cursus. Cras in dapibus nunc, vel congue magna. Morbi sagittis aliquam imperdiet. Duis lobortis hendrerit leo eu sagittis. Aliquam quam justo, mattis quis pellentesque congue, malesuada ac metus. Nulla facilisi. </p>\r\n\r\n                                    <p> Fusce sit amet massa quam. Nam fermentum lacinia neque, id mattis lorem vestibulum ac. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur felis ut magna egestas, in rutrum ipsum condimentum. Praesent nibh odio, condimentum ut rhoncus vitae, pharetra ut neque. Maecenas porttitor et metus vitae gravida. Quisque sollicitudin enim ligula, in rutrum arcu condimentum a. Curabitur vehicula at tellus sit amet venenatis. Duis et commodo metus. Phasellus eu congue velit, mattis eleifend mauris. Curabitur eu suscipit erat, auctor commodo enim. Cras posuere, tortor vitae hendrerit malesuada, diam nunc dignissim dolor, dictum lacinia leo lacus non nulla. </p>\r\n', '40', '3000', '/abc/images/portfolio_08.jpg', 'events');

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
(20, 'ratul', 'ratul@gmail.com', '123456', 'agencies', '1');

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
  MODIFY `id` int(110) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `freaks`
--
ALTER TABLE `freaks`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `travel_agencies`
--
ALTER TABLE `travel_agencies`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
