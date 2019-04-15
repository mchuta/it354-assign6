-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 24, 2018 at 10:59 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `errand_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `ci_sessions`
--

DROP TABLE IF EXISTS `ci_sessions`;
CREATE TABLE IF NOT EXISTS `ci_sessions` (
  `id` varchar(40) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `timestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `data` blob NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ci_sessions_timestamp` (`timestamp`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ci_sessions`
--


-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_user_id` int(11) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `project_body` text NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `project_user_id`, `project_name`, `project_body`, `date_created`) VALUES
(21, 1, 'Family', 'This project consist of everything related to family!', '2015-09-04 02:00:42'),
(24, 9, 'Project for suave', 'Project for suave description', '2015-09-22 16:06:59'),
(25, 14, 'Work', 'These are all my work stuff!', '2015-10-13 21:42:29'),
(26, 18, 'IT354 Semestr Proj', 'Test', '2018-02-19 20:43:32');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) NOT NULL,
  `task_name` varchar(255) NOT NULL,
  `task_body` text NOT NULL,
  `due_date` date NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `project_id`, `task_name`, `task_body`, `due_date`, `date_created`, `status`) VALUES
(34, 14, 'dsaf', 'asfas', '2015-09-23', '2015-09-02 19:46:52', 0),
(35, 15, 'task 1', 'dsafsaf', '2015-09-16', '2015-09-02 19:49:07', 0),
(40, 0, 'dfsds', 'some tasks', '2015-10-09', '2015-10-26 19:15:35', 0),
(41, 0, 'ssssssssss', 'sssssssss', '2015-10-06', '2015-10-26 19:17:45', 0),
(44, 0, 'rrrrrrrr', 'rrrrrrrrrr', '2015-10-06', '2015-10-26 19:32:44', 0),
(45, 0, 'dsfa', 'sadfasfaskkk', '2015-10-06', '2015-10-28 00:17:37', 0),
(46, 21, 'sdfgsd', 'gsfdgsd', '2015-10-01', '2015-10-28 00:39:43', 0),
(47, 24, 'gfdsgf', 'fdsg', '2015-11-13', '2015-11-15 01:05:46', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(300) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `register_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `first_name`, `last_name`, `email`, `register_date`) VALUES
(18, 'admin', '$2y$12$SGEA7g4H8K4xxBMEWoDLQuQL5m0LVTFHGOd3gHdeh66w/c926Erky', 'Admin', 'Dude', 'admin_123@ilstu.edu', '2015-11-29 13:23:24');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
