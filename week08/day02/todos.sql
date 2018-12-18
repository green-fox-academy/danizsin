SET NAMES utf8 ;

DROP TABLE IF EXISTS `todos`;

 SET character_set_client = utf8mb4 ;
CREATE TABLE `todos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `todo` varchar(255) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `isCompleted` enum('0','1') COLLATE utf8_hungarian_ci NOT NULL,
  `isUrgent` enum('0','1') COLLATE utf8_hungarian_ci NOT NULL,
  PRIMARY KEY (`id`)

LOCK TABLES `todos` WRITE;

INSERT INTO `todos` VALUES (1,'close the door','0','1'),(2,'check the fridge','0','1');

UNLOCK TABLES;