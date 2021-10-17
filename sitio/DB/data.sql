CREATE DATABASE  IF NOT EXISTS `give-one_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `give-one_db`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: give-one_db
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'vajilla','2021-10-17 02:11:46','2021-10-17 02:11:46'),(2,'cubiertos','2021-10-17 02:11:46','2021-10-17 02:11:46'),(3,'cristaleria','2021-10-17 02:11:46','2021-10-17 02:11:46'),(4,'tazas','2021-10-17 02:11:46','2021-10-17 02:11:46');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'PRODUCTO1.png',1,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(2,'PRODUCTO2.png',2,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(3,'PRODUCTO3.png',3,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(4,'PRODUCTO4.png',4,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(5,'PRODUCTO5.png',5,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(6,'PRODUCTO6.png',6,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(7,'PRODUCTO7.png',7,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(8,'PRODUCTO8.png',8,'2021-10-17 02:11:46','2021-10-17 02:11:46');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_users`
--

LOCK TABLES `product_users` WRITE;
/*!40000 ALTER TABLE `product_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Vasos  Dakota',1600,'Lorem ipsum dolor amet sit',0,1,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(2,'Cuchillos Gold',2500,'Lorem ipsum dolor amet sit',0,2,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(3,'Platos Black',3000,'Lorem ipsum dolor amet sit',0,1,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(4,'Copas GRose',600,'Lorem ipsum dolor amet sit',0,3,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(5,'Cubiertos Gold',600,'Lorem ipsum dolor amet sit',0,2,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(6,'Jarra Black',600,'Lorem ipsum dolor amet sit',0,3,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(7,'Sarten Black',600,'Lorem ipsum dolor amet sit',0,1,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(8,'Azucarera de cristal',5000,'Lorem ipsum',0,3,'2021-10-17 02:11:46','2021-10-17 02:11:46');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'admin','2021-10-17 02:11:46','2021-10-17 02:11:46'),(2,'user','2021-10-17 02:11:46','2021-10-17 02:11:46');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20211010212715-create-category.js'),('20211010213132-create-product.js'),('20211010213311-create-image.js'),('20211010213456-create-rol.js'),('20211010213716-create-user.js'),('20211010214309-create-product-user.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Gabriel','Calla','gabriel@giveone.com','$2a$10$tN2lblcKJ/15tVBp4dcfp.BsuHMJRqFh8ARr5w2so.0o/Ng422WfO','avatar_default.png',1,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(2,'Carolina','Vega','carolina@giveone.com','$2a$10$ZGiAVNiEP7M8xQWqkCL2m.3wYO5yMQ4BFi7EinLQnED4KGRb.Qb7q','avatar_default.png',1,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(3,'Eric','Mena','eric@gmail.com','$2a$10$MyJ9otXkRbpV7cRkoldKkOyIJ6kmkqt1Ex954zuMe1nd5v9lJ0cs6','avatar_default.png',2,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(4,'Cristian','Elias','cristian@gmail.com','$2a$10$4.ilR9uO7Fo10T9dSCZ4SuUsby2KoCbz28FIbExe7C8VxhX/gwWtu','avatar_default.png',2,'2021-10-17 02:11:46','2021-10-17 02:11:46'),(5,'Admin','1','give@one.com.ar','$2a$10$uq.qwIWNl6j60BccVT3Ld.9edvlAmnf8t.yp.scGuNcv4vciACQOW','avatar_default.png',1,'2021-10-17 02:11:46','2021-10-17 02:11:46');
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

-- Dump completed on 2021-10-16 23:17:28
