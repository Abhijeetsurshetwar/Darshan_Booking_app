-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: p06_shreedarshan
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
  `AID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Availability` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Contactno` varchar(255) NOT NULL,
  PRIMARY KEY (`AID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accomodation`
--

LOCK TABLES `accomodation` WRITE;
/*!40000 ALTER TABLE `accomodation` DISABLE KEYS */;
INSERT INTO `accomodation` VALUES (3,'Shivram delux Lodge','150','Shivaji Chowk , Pandharpur','9307877060'),(5,'Shree Shakti Prasad Lodge Pandharpur - Near Vitthal Mandir','75','Shop no 01, 2102, Kawathekar Galli, Chouphala, Pandharpur, Maharashtra 413304','07517603318'),(6,'Mathoshree Krupa Bhaktniwas','50','Mahadwar Rd, near Vitthal Mandhir, Chouphala, Pandharpur, Maharashtra 413304','09890941039'),(11,'Sharyu Lodge','50','Karve Nagar','9518505699'),(12,'Surya Lodge','30','PCMC , Pune','985462135');
/*!40000 ALTER TABLE `accomodation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `devotee_booking`
--

DROP TABLE IF EXISTS `devotee_booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `devotee_booking` (
  `booking_id` bigint NOT NULL,
  `booking_time` timestamp NULL DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `slot` varchar(255) DEFAULT NULL,
  `total_devotee` int DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devotee_booking`
--

LOCK TABLES `devotee_booking` WRITE;
/*!40000 ALTER TABLE `devotee_booking` DISABLE KEYS */;
INSERT INTO `devotee_booking` VALUES (23562048260969,'2025-02-10 13:21:14','2025-02-12','08:00',2,'Vishwajeet'),(33415875258203,'2025-02-09 05:33:02','2025-02-10','11:00',1,'Abhay'),(38362877594012,'2025-02-09 11:49:00','2025-02-10','15:00',1,'Abhay'),(41260243241615,'2025-02-08 09:40:15','2025-01-27','10:00',1,'Abhay'),(41589874827787,'2025-02-09 11:49:51','2025-02-10','11:00',NULL,'Abhay'),(90601098855483,'2025-02-09 05:30:46','2025-02-10','08:00',NULL,'Abhay'),(118388935268238,'2025-02-07 10:42:47','2025-01-27','10:00',1,'Abhay'),(136232795483879,'2025-02-10 04:19:22','2025-02-10','15:00',1,'Abhay'),(157740675821227,'2025-02-07 12:21:33','2025-01-27','14:00',1,'Abhay'),(294111206836629,'2025-02-09 05:28:17','2025-02-10','09:00',NULL,'Abhay'),(484151672854696,'2025-02-10 09:55:06','2025-02-12','08:00',1,'Vishwajeet'),(560836190380028,'2025-02-09 11:48:42','2025-02-10','08:00',1,'Abhay'),(565051059445840,'2025-02-07 11:04:45','2025-01-27','10:00',1,'Abhay'),(581151927007387,'2025-02-07 11:05:48','2025-01-27','10:00',1,'Abhay'),(639900609411691,'2025-02-09 11:51:44','2025-02-10','11:00',NULL,'Abhay'),(738048044295580,'2025-02-07 12:22:44','2025-01-27','10:00',1,'Abhay'),(738228303995355,'2025-02-09 05:27:46','2025-02-10','09:00',NULL,'Abhay'),(835916770942605,'2025-02-07 12:10:59','2025-01-27','14:00',1,'Abhay'),(841571837879489,'2025-02-08 06:49:34','2025-01-27','10:00',1,'Abhay'),(850763432994886,'2025-02-03 18:25:26','2025-02-10','09:00',2,'John Doe'),(871761371604894,'2025-02-07 12:24:41','2025-01-27','10:00',1,'Abhay'),(885816322170552,'2025-02-09 11:51:21','2025-02-10','15:00',1,'Abhay'),(924653547832368,'2025-02-10 04:23:34','2025-02-10','09:00',NULL,'Abhay'),(980240250143847,'2025-02-10 09:26:58','2025-02-12','15:00',2,'Vishwajeet');
/*!40000 ALTER TABLE `devotee_booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `devotee_name`
--

DROP TABLE IF EXISTS `devotee_name`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `devotee_name` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `aadhar_number` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `devotee_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `booking_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKk8bl5gx307ytlo7m8j8i2k1yl` (`booking_id`),
  CONSTRAINT `FKk8bl5gx307ytlo7m8j8i2k1yl` FOREIGN KEY (`booking_id`) REFERENCES `devotee_booking` (`booking_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devotee_name`
--

LOCK TABLES `devotee_name` WRITE;
/*!40000 ALTER TABLE `devotee_name` DISABLE KEYS */;
INSERT INTO `devotee_name` VALUES (1,'123456789012',30,'Jane Doe','Female',850763432994886),(2,'987654321098',35,'Mark Doe','Male',850763432994886),(3,'123456789012',30,'Jane Doe','Female',118388935268238),(4,'123456789012',30,'Jane Doe','Female',565051059445840),(5,'123456789012',30,'Jane Doe','Female',581151927007387),(6,'123456789012',30,'Jane Doe','Female',835916770942605),(7,'123456789012',30,'Jane Doe','Female',157740675821227),(8,'123456789012',30,'Jane Doe','Female',738048044295580),(9,'123456789012',30,'Jane Doe','Female',871761371604894),(10,'123456789012',30,'Jane Doe','Female',841571837879489),(11,'123456789012',30,'Jane Doe','Female',41260243241615),(12,'123456789012',30,'Jane Doe','Female',33415875258203),(13,'123456789012',30,'Jane Doe','Female',560836190380028),(14,'123456789012',30,'Jane Doe','Female',38362877594012),(17,'123456789120',20,NULL,'Male',980240250143847),(18,'156987456321',20,NULL,'Female',980240250143847),(19,'666966689733',21,NULL,'Male',484151672854696),(20,'951850569933',25,'Abhijeet','Male',23562048260969),(21,'901190864123',30,'Vishwajeet','Male',23562048260969);
/*!40000 ALTER TABLE `devotee_name` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donation`
--

DROP TABLE IF EXISTS `donation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donation` (
  `donation_id` bigint NOT NULL,
  `purpose` varchar(255) NOT NULL,
  `ammount` bigint NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`donation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donation`
--

LOCK TABLES `donation` WRITE;
/*!40000 ALTER TABLE `donation` DISABLE KEYS */;
INSERT INTO `donation` VALUES (1,'Temple Wellfareness',12500,'abhijeet'),(21061098298338,'Slot wellfareness',1250,'abhijeet'),(197633191481191,'Education for Poor',5200,'Amit'),(247511996838934,'Slot wellfareness',1250,'abhijeet'),(397377899494098,'Temple Development',1250,'Vishwajeet'),(937867987021991,'Education for Poor',5200,NULL),(945260098557263,'Slot wellfareness',1250,'abhijeet');
/*!40000 ALTER TABLE `donation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pooja_slot`
--

DROP TABLE IF EXISTS `pooja_slot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pooja_slot` (
  `id` int NOT NULL AUTO_INCREMENT,
  `TIME` varchar(255) DEFAULT NULL,
  `vacancy` int NOT NULL,
  `schedule_date_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Fk1_idx` (`schedule_date_id`),
  CONSTRAINT `Fk1` FOREIGN KEY (`schedule_date_id`) REFERENCES `schedule_date` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pooja_slot`
--

LOCK TABLES `pooja_slot` WRITE;
/*!40000 ALTER TABLE `pooja_slot` DISABLE KEYS */;
/*!40000 ALTER TABLE `pooja_slot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (1,'Pooja'),(2,'Darshan');
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule_date`
--

DROP TABLE IF EXISTS `schedule_date`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule_date` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date` varchar(255) DEFAULT NULL,
  `schedule_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn3vlq6amqfng82f79o6v5f3ud` (`schedule_id`),
  CONSTRAINT `FKn3vlq6amqfng82f79o6v5f3ud` FOREIGN KEY (`schedule_id`) REFERENCES `schedule` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule_date`
--

LOCK TABLES `schedule_date` WRITE;
/*!40000 ALTER TABLE `schedule_date` DISABLE KEYS */;
INSERT INTO `schedule_date` VALUES (1,'2025-02-10',1),(2,'2025-01-27',1),(3,'2025-02-10',2),(4,'2025-02-12',2),(5,'2025-02-12',1);
/*!40000 ALTER TABLE `schedule_date` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slot`
--

DROP TABLE IF EXISTS `slot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `slot` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `time` varchar(255) DEFAULT NULL,
  `vacancy` int NOT NULL,
  `schedule_date_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtgnw4d43t1qq364bo7xflk2l6` (`schedule_date_id`),
  CONSTRAINT `FKtgnw4d43t1qq364bo7xflk2l6` FOREIGN KEY (`schedule_date_id`) REFERENCES `schedule_date` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slot`
--

LOCK TABLES `slot` WRITE;
/*!40000 ALTER TABLE `slot` DISABLE KEYS */;
INSERT INTO `slot` VALUES (1,'09:00',0,1),(2,'11:00',0,1),(3,'10:00',2,2),(4,'14:00',5,2),(5,'08:00',15,4),(6,'15:00',25,4),(7,'10:00',7,5),(8,'12:00',10,5);
/*!40000 ALTER TABLE `slot` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-10 19:04:58
