-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 04, 2019 at 06:10 PM
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
(1, 'test', 'test@gmail.com', '544221564', 'Male', '123456', '/abc/'),
(2, 'Khandaker Ashik', 'kh.ashik96@gmail.com', '01681710719253', 'male', 'pass', '/abc/');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(100) NOT NULL,
  `tittle` varchar(100) NOT NULL,
  `postby` varchar(100) NOT NULL,
  `agencyname` varchar(100) NOT NULL,
  `place` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `person_capacity` varchar(100) NOT NULL,
  `cost_per_person` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `tittle`, `postby`, `agencyname`, `place`, `date`, `description`, `person_capacity`, `cost_per_person`, `image`, `category`) VALUES
(2, 'cox\'s bazar', 'ratul', 'sky', 'cox\'s', '2019-11-27', 'Tour de Cox\'s Bazar', '20', '2500tk', '/abc/images/', 'event'),
(3, 'dfs', 'dfg', 'dsg', 'sdfg', '2019-11-27', 'sdg', '342', '234', '/abc/images/', 'event');

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
(14, 'farhantanvin', 'farhantanvin@gmail.com', '01676518531', 'male', '123456', '/abc'),
(15, 'ashik', 'kh.ashik96@gmail.com', '12345678', 'male', '123456', '/abc/images/freaks.png');

-- --------------------------------------------------------

--
-- Table structure for table `pendingevents`
--

CREATE TABLE `pendingevents` (
  `id` int(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `agency_name` varchar(100) NOT NULL,
  `details` varchar(100) NOT NULL,
  `Capacity` varchar(100) NOT NULL,
  `Price_person` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pendingevents`
--

INSERT INTO `pendingevents` (`id`, `title`, `agency_name`, `details`, `Capacity`, `Price_person`) VALUES
(1, 'Cox\'s Bazar', 'agency_x', 'Tour de Cox\'s Bazar', '20', ' 4500tk'),
(2, 'Jaflong', 'Sky', 'A tour to sylhet', '30', '6500tk');

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
(21, 'Khandaker Ashik', 'kh.ashik96@gmail.com', 'pass', 'Admin', '1'),
(23, 'test', 'test@gmail.com', '123456', 'Admin', '1'),
(28, 'Khandaker Ashik', 'kh.ashik96@gmail.com', 'pass', 'Admin', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `freaks`
--
ALTER TABLE `freaks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pendingevents`
--
ALTER TABLE `pendingevents`
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
  MODIFY `id` int(110) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `freaks`
--
ALTER TABLE `freaks`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `pendingevents`
--
ALTER TABLE `pendingevents`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `travel_agencies`
--
ALTER TABLE `travel_agencies`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
