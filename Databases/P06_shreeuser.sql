-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: p06_shreeuser
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
-- Table structure for table `refresh_token`
--

DROP TABLE IF EXISTS `refresh_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `refresh_token` (
  `id` int NOT NULL AUTO_INCREMENT,
  `expiry_date` datetime NOT NULL,
  `token` varchar(255) NOT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjtx87i0jvq2svedphegvdwcuy` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `refresh_token`
--

LOCK TABLES `refresh_token` WRITE;
/*!40000 ALTER TABLE `refresh_token` DISABLE KEYS */;
INSERT INTO `refresh_token` VALUES (1,'2025-02-04 09:37:13','a6da7fc7-5a9b-4877-9197-5bcccc119754',2),(2,'2025-02-04 09:37:21','58849c91-6380-4d27-a59f-c0de2bfdd0e3',2),(3,'2025-02-04 09:37:27','a5581219-d7ca-4c58-9daa-0a690f772ff9',2),(4,'2025-02-04 09:37:32','3195c014-26cf-48de-94de-1697117437c4',2),(5,'2025-02-04 09:37:36','c44750ad-5d5d-406c-92ae-cdfda825878d',2),(6,'2025-02-04 09:37:39','7101cb27-8044-44a1-bbc7-3dfcec8ad14b',2),(7,'2025-02-04 09:37:46','159638e3-4ad8-4642-b43e-a01f0615d4b8',2),(8,'2025-02-04 09:37:55','d3a7d485-ae3e-4d19-af55-8d7913adf256',2),(9,'2025-02-04 09:37:57','3ce04370-1252-4a94-8286-59ac59b2414b',2),(10,'2025-02-04 09:37:58','23ffec64-c8d5-4a3f-8c87-0a0465c4794b',2),(11,'2025-02-04 09:41:11','c310e3d0-28fa-465c-bc91-cc13837d40d3',2),(12,'2025-02-04 09:43:31','d5d89d5e-d353-4955-914d-0cfb60c2045e',1),(13,'2025-02-04 09:45:38','c461cc75-039e-4415-ab11-35a72c8fee3c',1),(14,'2025-02-05 10:52:36','d90d8abf-9c0d-4f12-8bcb-c0f2a952de10',3),(15,'2025-02-05 11:30:40','54cc9050-eee2-4922-873d-70121d9d60c0',3),(16,'2025-02-05 11:33:21','d2c91fc9-7f63-46cb-aa2e-358ba6e82d4d',4),(17,'2025-02-05 11:38:41','766619f5-4b07-446a-b66e-8c5239d68af9',4),(18,'2025-02-05 11:38:53','4c24f86b-6b9e-4bc3-b993-71d2f66496ee',4),(19,'2025-02-05 11:38:54','01588fc9-6962-48d4-972e-8525d80dfe3c',4),(20,'2025-02-05 11:38:56','783c98ef-a0cc-4286-8e2d-f054931c2dff',4),(21,'2025-02-05 11:38:57','e9729784-ca74-4c3c-a100-d46d6029711d',4),(22,'2025-02-05 11:38:59','d9ecd2dd-3ef1-4e93-80a4-08ceaf1df1e6',4),(23,'2025-02-05 11:39:00','db21ee6a-7f38-4e18-b3f2-eb278ce22c61',4),(24,'2025-02-05 11:39:01','c05ed3f8-cc8f-4536-8099-f795a9514b01',4),(25,'2025-02-05 11:48:08','185be144-7808-4d26-95ad-5ca9dc93f2a7',4),(26,'2025-02-05 12:44:15','e823bfba-2673-4df2-a749-c019ed691612',4),(27,'2025-02-05 13:30:29','cecff929-1e39-4bdc-9900-5e115d0d70bb',4),(28,'2025-02-06 09:09:46','890fcfea-605a-41d3-a0ed-30629aa656f0',4),(29,'2025-02-06 13:56:15','91f91c72-7abd-4200-b817-fd3a0a1913ed',4),(30,'2025-02-06 17:04:14','f89e6eb1-810e-436b-8bf5-3ba8f8c59b36',6),(31,'2025-02-06 17:14:56','ba9d600a-0c15-4d78-acad-d5d07682a068',4),(32,'2025-02-06 17:30:58','3830e2d7-0840-430b-afa1-ebd033a998ab',4),(33,'2025-02-06 17:32:54','66cee1d2-22c5-49ae-83c8-e883ff359abe',4),(34,'2025-02-06 17:51:03','4ca62349-6ba4-4d9e-9963-79ec0d540721',4),(35,'2025-02-06 17:52:42','ff242ccf-3d87-4030-932b-e5d7c3e3c931',4),(36,'2025-02-07 06:10:07','bd1f671e-6a1a-4054-bcb2-6a9afaedeee4',4),(37,'2025-02-07 06:56:06','5359d200-9def-4217-b3c2-b39838d3d561',4),(38,'2025-02-07 06:58:23','f01782ac-5aa3-4d3a-8594-1206f4e765b6',4),(39,'2025-02-07 08:18:38','4b3e505e-5423-45dd-95c1-85ddcbcc1cd0',4),(40,'2025-02-07 08:22:30','3eba7bd8-9c89-44c5-9202-3fdc80cc4afc',4),(41,'2025-02-07 08:43:10','cb10bb42-ee8e-4234-b663-bbfd3ca928f9',4),(42,'2025-02-07 08:44:00','ac5c96a7-b8b9-48e1-800a-92b54a80ed51',7),(43,'2025-02-07 08:47:26','fae8b23a-3f8d-493b-817c-216d18fb2528',7),(44,'2025-02-08 06:49:18','9c94ab78-dba8-40f0-a0f4-aa4a38f4a079',6),(45,'2025-02-08 06:50:14','374b6b27-0a64-44bc-ad5c-897f1c695b75',7),(46,'2025-02-08 07:41:17','0c95d4e9-e1ef-44b6-beb1-851c287a4e78',6),(47,'2025-02-08 07:58:17','a7118f7a-18bf-470e-9787-86d264c9c15e',7),(48,'2025-02-08 08:00:21','04ad58da-388b-497b-9898-22818c7739bd',5),(49,'2025-02-08 08:00:47','9f26c963-ecda-4a33-bd5c-46057420d261',5),(50,'2025-02-08 08:51:32','c407cf63-161c-4d25-8778-609390b2871c',7),(51,'2025-02-08 09:03:57','80c490e5-2369-4a9d-9873-c6d9fbed28cf',7),(52,'2025-02-08 09:41:51','a2cc2219-1385-44e5-bcbd-373c1e7e620d',7),(53,'2025-02-08 10:25:01','d92a475a-40a4-4548-a22a-16bb9fdb114d',5),(54,'2025-02-08 10:26:26','6f0c471d-a397-4d4d-a10d-41ffb9ee30e0',7),(55,'2025-02-08 11:52:49','56fc37d4-ad15-4443-ad8f-178d210adf8d',5),(56,'2025-02-08 11:59:56','9f704b7d-624e-49e1-af24-1d23648c16e0',5),(57,'2025-02-08 12:00:41','7032a271-d279-4920-a1ff-512dbe07cc07',5),(58,'2025-02-08 12:12:43','0bca9eba-3ae3-4104-9c88-5faa318b2327',5),(59,'2025-02-08 12:22:43','7af72fba-82cc-4dbc-98ac-88591a03ba41',5),(60,'2025-02-08 12:27:09','9b9b8794-b6d3-4c81-a3ec-dc7f14bd9e90',5),(61,'2025-02-08 12:27:34','136195ea-a334-41bf-8f90-0246e7e191fd',5),(62,'2025-02-08 13:03:31','31eda108-33e6-4388-93de-457e4df867ed',5),(63,'2025-02-08 13:57:36','25d0b8e4-7c98-4d3a-a215-1dc2897504f2',5),(64,'2025-02-08 13:59:20','82e4c07d-92af-4e65-b284-157e4c25ecd8',5),(65,'2025-02-08 14:27:41','557e9d5c-bea0-4b22-baeb-864d1bd0c059',7),(66,'2025-02-08 14:28:41','ea7114df-1eef-48ec-94e2-cd6b0a3447e3',7),(67,'2025-02-09 05:20:28','b970f88d-c83e-4f36-a497-11248d43696c',7),(68,'2025-02-09 11:34:06','7a417959-de99-4aae-8313-9f47d080e5e5',7),(69,'2025-02-09 11:46:41','5056068a-7eb7-4923-9c26-dd0eae8595cb',7),(70,'2025-02-09 11:52:44','4e37174a-1ca6-4834-9534-0ae72418aa4d',7),(71,'2025-02-10 04:20:05','bc6904a1-0c6f-4518-9b75-2d670dfc513d',7),(72,'2025-02-10 04:37:43','3238d925-778a-452b-b42f-3ee212bbc899',7),(73,'2025-02-10 04:49:35','bdced735-f51c-4030-a7a3-53720c7c9b4f',9),(74,'2025-02-10 04:51:03','0ad4b659-b16e-4d83-973d-87c32384b9b9',9),(75,'2025-02-10 04:51:18','b5b2bcd8-1fb5-4515-b317-1610a7839905',5),(76,'2025-02-10 04:51:28','a96c4a72-80db-49db-bce8-c10d6e153113',5),(77,'2025-02-10 05:24:58','05cb55b8-197c-46d9-87ca-590a8da5628b',9),(78,'2025-02-10 05:35:50','10991bb1-4ff2-4444-9c2c-04252b6cac9f',5),(79,'2025-02-10 05:44:26','25b9ab97-c4b6-45f6-a7d3-206b676e871d',9),(80,'2025-02-10 05:45:20','939cad10-4d57-4636-b0c6-3e874296de7d',5),(81,'2025-02-10 09:00:49','5e9bfbd2-960a-48d1-96e7-d463d9f145b0',5),(82,'2025-02-10 09:02:12','b66ba844-2eca-4ec2-8aae-536963093274',5),(83,'2025-02-10 09:03:23','d52b7392-c689-4dc5-986b-6a6c011c73e6',5),(84,'2025-02-10 09:24:24','46b6b950-07d6-4f3d-aac9-d4d42faf7e51',9),(85,'2025-02-10 09:27:29','9d3e5811-95ee-47e9-84a8-de21155b8a47',9),(86,'2025-02-10 09:30:53','a4f99fd1-26c0-4190-b91f-0757737a5158',5),(87,'2025-02-10 09:55:48','1656732a-3dc6-454d-a9ae-33fa5ee1b6b0',9),(88,'2025-02-10 09:58:12','5a7876b3-b6f7-4e1f-a4ba-0868d5676b53',9),(89,'2025-02-10 09:59:11','13f1da20-9eed-445c-8552-372c4fbadb0e',9),(90,'2025-02-10 10:03:13','e56481a5-802c-44e7-b0ca-a77a048b2f21',7),(91,'2025-02-10 10:04:46','fdd014ba-2b5a-4f73-9e7c-f824ff5d47a5',9),(92,'2025-02-10 10:15:50','83027f3c-f2ac-4835-af50-3ae11eabd01d',9),(93,'2025-02-10 11:19:26','7de03beb-8385-40ba-a52f-6f4cdaf4279a',7),(94,'2025-02-10 12:04:11','e65decdf-c0a9-422a-9a56-d12bdb2ce353',9),(95,'2025-02-10 12:21:23','0345a05e-8491-4355-8e29-363930a3d7ba',9),(96,'2025-02-10 13:18:46','595998b7-2e53-41ff-a101-870b1f301543',9);
/*!40000 ALTER TABLE `refresh_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ofx66keruapi6vyqpv6f2or37` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_USER'),(2,'ROLE_ADMIN');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` int NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,1),(2,2),(3,1),(4,1),(4,2),(5,2),(6,1),(7,1),(8,1),(9,1);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user1@refreshtoken.com','$2a$10$2DPnNlJpxgek0LsTQbE83O0HPHa7KRaZjx23qfoCXw/B0AzU//eMm','User'),(2,'rautanjali419@gmail.com','$2a$10$LGCg/ThQvLLiI40I27nnceQjfJgGrRswezGitMMV0q4IsPG4Mnn2K','Anjali'),(4,'abhijeetsurshetwar01@gmail.com','$2a$10$.0eVBOxcdyLXSPxhVvjW8uSWLcudeRBYC/aDacT11l6Sdpj50/uty','Abhijeets'),(5,'sharyumalshette@gmail.com','$2a$10$J0j9i2mL60YK915CL3kFm.UqLbEo5ZSUVJYi3QSHAi/t/ldFIiOpe','Sharyu'),(6,'amitpatil@gmail.com','$2a$10$n3x7L79tfuNDw8.xcu3I3.hJP4/EttUPqqjQ4OLpR0VtgcpoLuAwe','Amit'),(7,'Abhaytambe@gmail.com','$2a$10$5hjYePJ/hE7cjao.WBsG..nfDIsPbSiphouCJdVr2wXojhcYlieUi','Abhay'),(8,'ksn@gmail.com','$2a$10$mn5juLX.2yOE51T8/m9AUeuR9mIx8MsNs9J9Q0cc8dmeHjw.sNSBu','asa'),(9,'surshetwarv@gmail.com','$2a$10$KtkZ7folIFSAegbeNrBtdO0kcGEYdH/bu0ThWWQvCJKCwn65KN4U2','Vishwajeet');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-10 19:04:28
