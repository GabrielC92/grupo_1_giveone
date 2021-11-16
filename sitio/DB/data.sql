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
INSERT INTO `categories` VALUES (1,'vajilla','2021-11-16 23:03:45','2021-11-16 23:03:45'),(2,'cubiertos','2021-11-16 23:03:45','2021-11-16 23:03:45'),(3,'cristaleria','2021-11-16 23:03:45','2021-11-16 23:03:45'),(4,'tazas','2021-11-16 23:03:45','2021-11-16 23:03:45');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'PRODUCTO1.png',1,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(2,'PRODUCTO2.png',2,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(3,'PRODUCTO3.png',3,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(4,'PRODUCTO4.png',4,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(5,'PRODUCTO5.png',5,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(6,'PRODUCTO6.png',6,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(7,'PRODUCTO7.png',7,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(8,'PRODUCTO8.png',8,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(9,'PRODUCTO9.png',9,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(10,'PRODUCTO10.png',10,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(11,'PRODUCTO11.png',11,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(12,'PRODUCTO12.png',12,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(13,'PRODUCTO13.png',13,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(14,'PRODUCTO14.png',14,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(15,'PRODUCTO15.png',15,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(16,'PRODUCTO16.png',16,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(17,'PRODUCTO17.png',17,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(18,'PRODUCTO18.png',18,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(19,'PRODUCTO19.png',19,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(20,'PRODUCTO20.png',20,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(21,'PRODUCTO21.png',21,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(22,'PRODUCTO22.png',22,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(23,'PRODUCTO23.png',23,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(24,'PRODUCTO24.png',24,'2021-11-16 23:03:45','2021-11-16 23:03:45');
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
INSERT INTO `products` VALUES (1,'Vasos Iridiscencia',1600,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,3,'2021-11-16 23:03:45','2021-11-16 23:24:27'),(2,'Espatula Mango Glitter',900,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,2,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(3,'Platos Black',2100,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,1,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(4,'Copas GRose',700,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,3,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(5,'Cubiertos Gold',600,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,2,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(6,'Copas de Coctel',1000,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,3,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(7,'Sarten Black',600,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,1,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(8,'Vaso Terracota',350,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,3,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(9,'Plato Grecia',400,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,1,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(10,'Plato Botánica',550,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,1,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(11,'Plato Handmade',700,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,1,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(12,'Plato Strawberry',550,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,1,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(13,'Taza Grecia',350,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,4,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(14,'Taza Galaxia',410,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,4,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(15,'Jarra para Té Botánica',1300,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,4,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(16,'Mugs de Ceramica Fauna',500,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,4,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(17,'Tetera Flower',2300,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,4,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(18,'Utensilios Mango de Madera',2000,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,2,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(19,'Cubiertos Black',700,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,2,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(20,'Sett de Cuchillos White Rose',5100,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,2,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(21,'Utensilios de Madera',950,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,2,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(22,'Jarra de Cristal',1500,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,3,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(23,'Vasos Strawberry',450,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,3,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(24,'Vasos Cat',300,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dictum enim sed commodo. Aenean vulputate, mi in malesuada imperdiet, magna nisi iaculis orci, eget rhoncus ex non massa',0,3,'2021-11-16 23:03:45','2021-11-16 23:03:45');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'admin','2021-11-16 23:03:45','2021-11-16 23:03:45'),(2,'user','2021-11-16 23:03:45','2021-11-16 23:03:45');
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
INSERT INTO `users` VALUES (1,'Gabriel','Calla','gabriel@giveone.com','$2a$10$MIKMKx9fK4zo22BgJDGCwuVz0phxlRu.sL0tz6o.EvWhFmLUFrm3m','avatar_default.png',1,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(2,'Carolina','Vega','carolina@giveone.com','$2a$10$LdKFxseRd6FVK4i/2.A5.O81JODRWEA059GL/8XLWeDo4Hgo6SGkO','avatar_default.png',1,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(3,'Eric','Mena','eric@gmail.com','$2a$10$S7WZ5mwUAMPQXq3LV7KPt.uf2zkJEF3/lWlwxrm4X0XovugeoLV9m','avatar_default.png',2,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(4,'Cristian','Elias','cristian@gmail.com','$2a$10$fkyKvmrsWl9N6ckfyeHogemH4hsoD/UkAc.HJyqKxJpKBJRQPK9xW','avatar_default.png',2,'2021-11-16 23:03:45','2021-11-16 23:03:45'),(5,'AdminGO','Admin','give@one.com.ar','$2a$10$dNc7fqe48/b2e1g1QAK44.3.7wMxCynhNvKOnmXy/yEzBBquxFtVm','avatar_default.png',1,'2021-11-16 23:03:45','2021-11-16 23:03:45');
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

-- Dump completed on 2021-11-16 20:26:10
