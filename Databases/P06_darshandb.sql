CREATE DATABASE  IF NOT EXISTS `P06_darshandb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `P06_darshandb`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: darshandb
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accomodation`
--

DROP TABLE IF EXISTS `accomodation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accomodation` (
  `AID` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Availability` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `contactno` varchar(255) NOT NULL,
  PRIMARY KEY (`AID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accomodation`
--

LOCK TABLES `accomodation` WRITE;
/*!40000 ALTER TABLE `accomodation` DISABLE KEYS */;
INSERT INTO `accomodation` VALUES (1,'Hotel Radhesh','100','Shivaji Chowk,Pandharpur','9518505699'),(2,'Hotel Shree sai','20','Gopalpura,Pandharpur','9518505699'),(3,'Shivram Delux Lodge','20','Shivaji Chowk, Pandharpur','9586745689'),(4,'Shivkrupa delux Bhakt nivas','10','Shivaji Chowk , Pandharpur','9865320147');
/*!40000 ALTER TABLE `accomodation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `BID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Age` int NOT NULL,
  `Gender` char(2) NOT NULL,
  `DID` int NOT NULL,
  `SID` int NOT NULL,
  `PayID` varchar(255) NOT NULL,
  `BDate` datetime NOT NULL,
  `BType` char(2) NOT NULL,
  PRIMARY KEY (`BID`),
  KEY `DID4_idx` (`DID`),
  KEY `SID2_idx` (`SID`),
  KEY `PayID3_idx` (`PayID`),
  CONSTRAINT `DID4` FOREIGN KEY (`DID`) REFERENCES `devotee` (`DID`),
  CONSTRAINT `PayID3` FOREIGN KEY (`PayID`) REFERENCES `payment` (`PayID`),
  CONSTRAINT `SID2` FOREIGN KEY (`SID`) REFERENCES `slot` (`SID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `devotee`
--

DROP TABLE IF EXISTS `devotee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `devotee` (
  `DID` int NOT NULL,
  `Age` varchar(45) NOT NULL,
  `Gender` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Contactno` varchar(45) NOT NULL,
  `UID` int DEFAULT NULL,
  PRIMARY KEY (`DID`),
  KEY `UID_idx` (`UID`),
  CONSTRAINT `UID` FOREIGN KEY (`UID`) REFERENCES `user` (`UID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devotee`
--

LOCK TABLES `devotee` WRITE;
/*!40000 ALTER TABLE `devotee` DISABLE KEYS */;
INSERT INTO `devotee` VALUES (1766,'18','male','MithileshPathnkar@gmail.com','789654125',45),(2234,'22','male','tambeabhay@gmail.com','9876543210',41),(2355,'21','male','Suryansh@gmail.com','4569631472',43),(2777,'20','male','abhijeetsurshetwar@gmail.com','9518505699',40),(3297,'23','male','Sidmessi@gmail.com','985476321',44),(5622,'26','male','Jatin@gmail.com','4568521397',42),(6974,'20','female','Sakshibohra@gmail.com','789654125',46),(7877,'20','female','Sanju@gmail.com','789654125',47);
/*!40000 ALTER TABLE `devotee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donation`
--

DROP TABLE IF EXISTS `donation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donation` (
  `donid` int NOT NULL AUTO_INCREMENT,
  `purpose` varchar(255) NOT NULL,
  `payid` varchar(255) NOT NULL,
  `did` int NOT NULL,
  PRIMARY KEY (`donid`,`purpose`),
  KEY `PayId_idx` (`payid`),
  KEY `DID3_idx` (`did`),
  CONSTRAINT `DID3` FOREIGN KEY (`did`) REFERENCES `devotee` (`DID`),
  CONSTRAINT `PayId` FOREIGN KEY (`payid`) REFERENCES `payment` (`PayID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donation`
--

LOCK TABLES `donation` WRITE;
/*!40000 ALTER TABLE `donation` DISABLE KEYS */;
/*!40000 ALTER TABLE `donation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `PayID` varchar(255) NOT NULL,
  `Date` datetime NOT NULL,
  `Type` varchar(45) NOT NULL,
  `DID` int DEFAULT NULL,
  `amount` double NOT NULL,
  PRIMARY KEY (`PayID`),
  KEY `DID2_idx` (`DID`),
  CONSTRAINT `DID2` FOREIGN KEY (`DID`) REFERENCES `devotee` (`DID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slot`
--

DROP TABLE IF EXISTS `slot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `slot` (
  `SID` int NOT NULL,
  `sname` varchar(255) NOT NULL,
  `type` char(1) NOT NULL,
  `capacity` int NOT NULL,
  PRIMARY KEY (`SID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slot`
--

LOCK TABLES `slot` WRITE;
/*!40000 ALTER TABLE `slot` DISABLE KEYS */;
INSERT INTO `slot` VALUES (1,'7:00 TO 8:00','P',5),(2,'17:00 TO 18:00','P',5),(3,'8:00 TO 9:00','D',5),(4,'11:00 TO 12:00','D',5),(5,'14:00 TO 15:00','D',5),(6,'17:00 TO 18:00','D',5),(7,'20:00 TO 21:00','D',5);
/*!40000 ALTER TABLE `slot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `UID` int NOT NULL AUTO_INCREMENT,
  `Uname` varchar(45) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Role` varchar(45) NOT NULL,
  PRIMARY KEY (`UID`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Abhijeet','Abhi@413','Admin'),(2,'Wasique','Wasi@123','Owner'),(3,'Anjali','Anja@567','Admin'),(4,'Sharayu','Shar@890','Admin'),(5,'Ajinkya','Aju@123','Devotee'),(40,'Abhij','Abhi@413','Devotee'),(41,'Abhay','Abha@413','Devotee'),(42,'Jatin','Jatin@895','Devotee'),(43,'Suryansh','surya#123','Devotee'),(44,'Siddhart','Sid#861','Devotee'),(45,'Mithilesh','myth%785','Devotee'),(46,'Sakshi','Saksh@123','Devotee'),(47,'Sajivani','Sanju@123','Devotee');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-06 11:09:35
