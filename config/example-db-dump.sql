-- MySQL dump 10.13  Distrib 5.7.34, for osx11.0 (x86_64)
--
-- Host: localhost    Database: fly_a_drone
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `spots`
--

DROP TABLE IF EXISTS `spots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `spots` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` decimal(10,7) NOT NULL,
  `longitude` decimal(10,7) NOT NULL,
  `siteUrl` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebookUrl` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtubeUrl` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagramUrl` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `spotAddress` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spots`
--

LOCK TABLES `spots` WRITE;
/*!40000 ALTER TABLE `spots` DISABLE KEYS */;
INSERT INTO `spots` VALUES ('0e3f6e5b-a9a8-4d1c-b08d-27cf59bebb44','Gdańsk','Miasto na prawach powiatu w północnej Polsce w województwie pomorskim, położone nad Morzem Bałtyckim u ujścia Motławy do Wisły nad Zatoką Gdańską. Centrum kulturalne, naukowe i gospodarcze oraz węzeł komunikacyjny północnej Polski, stolica województwa pomorskiego. Ośrodek gospodarki morskiej z dużym portem handlowym.','C:\\fakepath\\IMG_6838.jpg',54.3675197,18.6916609,'https://www.gdansk.pl','https://www.facebook.com/gdansk','','https://www.instagram.com/accounts/login/?next=/gdansk_official','Gdańsk Andruszkiewicza 5'),('14a6a215-0e70-47dc-9e65-3f1575197e4f','[TEST] Example Name','This is the best place in city.','example.jpg',50.2642790,19.0236510,'https://google.com/','https://facebook.com/','https://youtube.com/','https://instagram.com/','rondo Gen Jerzego Ziętka Katowice'),('15555494-75e1-48fa-a7b2-15e06faa0a5d','Spodek','Hala widowiskowo-sportowa, zlokalizowana w Katowicach przy Alei Wojciecha Korfantego 35, stanowiąca własność miasta Katowic. Została wybudowana pod nazwą Wojewódzka Hala Widowiskowo-Sportowa w Katowicach, pod którą jest znana w literaturze architektonicznej i pod którą funkcjonowała do 1997. Swoją nazwę zawdzięcza specyficznej konstrukcji przypominającej UFO.','C:\\fakepath\\example weather.png',50.2661074,19.0253277,'http://www.spodekkatowice.pl/pl','https://www.facebook.com/halaspodek','','https://www.instagram.com/accounts/login/?next=/spodekkatowice/','Katowice Spodek'),('3dbafb23-b55c-4a83-836b-e2ad17099ed7','Rondo','rondo Generała Jerzego Ziętka',NULL,50.2640110,19.0236230,'https://katowice.eu',NULL,NULL,NULL,'Katowice rondo Generała Jerzego Ziętka'),('52431a84-0450-4b9d-9f7f-c31fbaa4971c','Mysłowice','Miasto na prawach powiatu w południowej Polsce, na historycznym Górnym Śląsku, w historycznej ziemi pszczyńskiej, w województwie śląskim. Niedaleko ciekawe miejsce na dronowanie: Trójkąt Trzech Cesarzy, gdzie w latach 1846–1915 zbiegały się granice trzech europejskich mocarstw biorących udział w rozbiorze Polski: Prus (później Niemiec), Austrii (później Austro-Węgier) i Rosji',NULL,50.2393799,19.1351866,'https://www.myslowice.pl/','https://www.facebook.com/myslowice.lubie.to/','','','Mysłowice mikołowska 10'),('7fec8031-04cf-4770-ba92-8e0b461226b3','Trójkąt Trzech Cesarzy','Ciekawe historyczne miejsce, gdzie zbiegały się granice trzech europejskich mocarstw biorących udział w rozbiorze Polski: Prus (później Niemiec), Austrii (później Austro-Węgier) i Rosji','C:\\fakepath\\example weather.png',50.2315777,19.1550057,'','','','','Sosnowiec Trójkąt Trzech Cesarzy'),('850e186a-f816-4136-9a1d-3d4a21053555','Wrocław','Miasto na prawach powiatu w południowo-zachodniej Polsce, siedziba władz województwa dolnośląskiego i powiatu wrocławskiego. Położone w Europie Środkowej, na Nizinie Śląskiej, nad Odrą i czterema jej dopływami. Jest historyczną stolicą Dolnego Śląska, a także całego Śląska.','C:\\fakepath\\IMG_6838.jpg',51.1089266,17.0289587,'https://www.wroclaw.pl','https://www.facebook.com/wroclaw.wroclove','https://www.youtube.com/channel/UCNGAbF9uCpBFamTbKF1p9Tg','','Wrocław Solny 14'),('b2041d86-1c30-43d1-9a3a-2088388b9b45','Kraków','miasto na prawach powiatu położone w południowej Polsce nad Wisłą. Formalna stolica Polski do 1795 roku i miasto koronacyjne oraz nekropolia królów Polski. Kraków leży na obszarze Bramy Krakowskiej, Niecki Nidziańskiej i Pogórza Zachodniobeskidzkiego. Piękne okolice to idealne miejsce na dronowanie','',50.0615174,19.9371069,'https://www.krakow.pl','https://www.facebook.com/wwwKrakowPL?ref=ts','https://www.youtube.com/user/wwwkrakowpl','https://www.instagram.com/krakow_pl/','Kraków rynek główny'),('ca63e2b8-6fad-49c1-8efd-bab6ec42d29c','Międzynarodowe Centrum Kongresowe','Największe centrum kongresowe w Polsce. Właścicielem obiektu jest Miasto Katowice. Centrum zostało wybudowane w latach 2011–2015. Należy do Strefy Kultury, nowej części Katowic, poświęconej kulturze, zlokalizowanej na dawnych terenach przemysłowych. Ma bezpośrednie połączenie ze Spodkiem. Budynek Międzynarodowego Centrum Kongresowego został zaprojektowany przez utytułowaną pracownię architektoniczną Jems Architekci z Warszawy. Obiekt powstał na terenach poprzemysłowych i w swojej architekturze nawiązuje do tradycji górniczych[3].',NULL,50.2658760,19.0275710,NULL,'https://www.facebook.com/mckkatowice/',NULL,'https://www.instagram.com/mckkatowice/','Katowice plac Sławika i Antalla 1'),('dc54c017-0e77-4e54-b2ab-016d7f8872b4','Jaworzno - Koparki','tzw. Koparki - zbiornik poeksploatacyjny w Jaworznie często nazywany polskimi Malediwami, będący jednym z najpopularniejszych polskich nurkowisk. Nad zbiornikiem leży całoroczna baza nurkowa „Koparki”. Zbiornik leży na miejscu dawnego kamieniołomu „Gródek” w Szczakowej, jednej z dzielnic Jaworzna, w województwie śląskim','',50.2286318,19.3124198,'','','','','Jaworzno Koparki'),('e0ca96ef-8e79-4bfb-a37c-d045025be873','Mysłowicki Rynek','rynek w Mysłowicach, gdzie w 1972r. przebywał słynny Fidel Castro','',50.2449452,19.1388116,'https://www.myslowice.pl/','https://www.facebook.com/myslowice.lubie.to/','','','Mysłowice Rynek 8'),('e6129055-0555-4eb2-ba58-4650903c6dae','Warszawa','Stolica Polski i województwa mazowieckiego, największe miasto w kraju, położone w jego centralnej części, na Nizinie Środkowomazowieckiej, na Mazowszu, nad Wisłą.','C:\\fakepath\\example weather.png',52.2337172,21.0714322,'https://um.warszawa.pl','https://www.facebook.com/warszawa','https://www.youtube.com/user/warszawapl','https://www.instagram.com/miasto_warszawa/','Warszawa'),('exampleId','[TEST] Rynek','katowicki rynek',NULL,50.2594740,19.0222540,'https://katowice.eu',NULL,NULL,NULL,'Katowice Rynek 1');
/*!40000 ALTER TABLE `spots` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'fly_a_drone'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-14 23:41:45
