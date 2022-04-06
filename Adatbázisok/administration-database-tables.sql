START TRANSACTION;

CREATE TABLE `breaktime` (
  `id` int(2) NOT NULL,
  `name` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

INSERT INTO `breaktime` (`id`, `name`, `start`, `end`) VALUES
(1, 'Ünnepnap 56-os forradalom', '2021-10-23 00:00:00', '2021-10-23 23:59:59'),
(2, 'Mindenszentek', '2021-10-30 00:00:00', '2021-11-01 23:59:59'),
(3, 'Utazás Debrecenbe', '2021-10-03 10:00:00', '2021-10-05 21:00:59'),
(4, 'Utazás Debrecenbe', '2021-10-08 07:00:00', '2021-10-08 18:00:59'),
(5, 'Vizsga Kecskemét', '2021-11-07 10:00:00', '2021-11-09 21:00:59'),
(6, 'Vizsga Kecskemét', '2021-11-12 07:00:00', '2021-11-12 18:00:59'),
(7, 'Év végi szünet', '2021-12-20 00:00:00', '2022-01-02 23:59:59');

CREATE TABLE `course` (
  `id` int(3) NOT NULL,
  `name` varchar(40) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

INSERT INTO `course` (`id`, `name`) VALUES
(1, 'Webszerkesztés tanfolyam'),
(2, 'JavaScript tanfolyam'),
(3, 'React Tanfolyam'),
(5, 'PHP tanfolyam'),
(6, 'HTML5 és CSS3 tanfolyam');

CREATE TABLE `occasion` (
  `id` int(4) NOT NULL,
  `course` int(3) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

INSERT INTO `occasion` (`id`, `course`, `start`, `end`) VALUES
(1, 1, '2021-09-27 17:00:00', '2021-09-27 20:15:00'),
(2, 1, '2021-09-29 17:00:00', '2021-09-29 20:15:00'),
(3, 1, '2021-10-06 17:00:00', '2021-10-06 20:15:00'),
(4, 1, '2021-10-11 17:00:00', '2021-10-11 20:15:00'),
(5, 1, '2021-10-13 17:00:00', '2021-10-13 20:15:00'),
(6, 1, '2021-10-18 17:00:00', '2021-10-18 20:15:00'),
(7, 1, '2021-10-20 17:00:00', '2021-10-20 20:15:00'),
(8, 1, '2021-10-25 17:00:00', '2021-10-25 20:15:00'),
(9, 1, '2021-10-27 17:00:00', '2021-10-27 20:15:00'),
(10, 1, '2021-11-03 17:00:00', '2021-11-03 20:15:00'),
(11, 1, '2021-11-10 17:00:00', '2021-11-10 20:15:00'),
(12, 1, '2021-11-15 17:00:00', '2021-11-15 20:15:00'),
(13, 1, '2021-11-17 17:00:00', '2021-11-17 20:15:00'),
(14, 2, '2021-09-29 09:00:00', '2021-09-29 12:15:00'),
(15, 2, '2021-10-06 09:00:00', '2021-10-06 12:15:00'),
(16, 2, '2021-10-11 09:00:00', '2021-10-11 12:15:00'),
(17, 2, '2021-10-13 09:00:00', '2021-10-13 12:15:00'),
(18, 2, '2021-10-18 09:00:00', '2021-10-18 12:15:00'),
(19, 2, '2021-10-20 09:00:00', '2021-10-20 12:15:00'),
(20, 2, '2021-10-25 09:00:00', '2021-10-25 12:15:00'),
(21, 2, '2021-10-27 09:00:00', '2021-10-27 12:15:00'),
(22, 2, '2021-11-03 09:00:00', '2021-11-03 12:15:00'),
(23, 2, '2021-11-10 09:00:00', '2021-11-10 12:15:00'),
(24, 2, '2021-11-15 09:00:00', '2021-11-15 12:15:00'),
(25, 2, '2021-11-17 09:00:00', '2021-11-17 12:15:00'),
(26, 3, '2021-10-02 09:00:00', '2021-10-02 16:00:00'),
(27, 3, '2021-10-09 09:00:00', '2021-10-09 16:00:00'),
(28, 3, '2021-10-16 09:00:00', '2021-10-16 16:00:00'),
(29, 3, '2021-11-06 09:00:00', '2021-11-06 16:00:00'),
(30, 3, '2021-11-13 09:00:00', '2021-11-13 16:00:00'),
(31, 3, '2021-11-20 09:00:00', '2021-11-20 16:00:00'),
(32, 3, '2021-11-27 09:00:00', '2021-11-27 16:00:00'),
(33, 3, '2021-12-04 09:00:00', '2021-12-04 16:00:00'),
(94, 5, '2021-11-16 09:00:00', '2021-11-16 12:15:00'),
(95, 5, '2021-11-18 09:00:00', '2021-11-18 12:15:00'),
(96, 5, '2021-11-23 09:00:00', '2021-11-23 12:15:00'),
(97, 5, '2021-11-25 09:00:00', '2021-11-25 12:15:00'),
(98, 5, '2021-11-30 09:00:00', '2021-11-30 12:15:00'),
(99, 5, '2021-12-02 09:00:00', '2021-12-02 12:15:00'),
(100, 5, '2021-12-07 09:00:00', '2021-12-07 12:15:00'),
(101, 5, '2021-12-09 09:00:00', '2021-12-09 12:15:00'),
(102, 5, '2021-12-14 09:00:00', '2021-12-14 12:15:00'),
(103, 5, '2021-12-16 09:00:00', '2021-12-16 12:15:00'),
(104, 5, '2022-01-04 09:00:00', '2022-01-04 12:15:00'),
(105, 5, '2022-01-06 09:00:00', '2022-01-06 12:15:00'),
(106, 5, '2022-01-11 09:00:00', '2022-01-11 12:15:00'),
(107, 5, '2022-01-13 09:00:00', '2022-01-13 12:15:00'),
(108, 5, '2022-01-18 09:00:00', '2022-01-18 12:15:00'),
(109, 5, '2022-01-20 09:00:00', '2022-01-20 12:15:00'),
(110, 5, '2022-01-25 09:00:00', '2022-01-25 12:15:00'),
(111, 5, '2022-01-27 09:00:00', '2022-01-27 12:15:00'),
(112, 6, '2021-11-11 17:00:00', '2021-11-11 20:15:00'),
(113, 6, '2021-11-16 17:00:00', '2021-11-16 20:15:00'),
(114, 6, '2021-11-18 17:00:00', '2021-11-18 20:15:00'),
(115, 6, '2021-11-23 17:00:00', '2021-11-23 20:15:00'),
(116, 6, '2021-11-25 17:00:00', '2021-11-25 20:15:00'),
(117, 6, '2021-11-30 17:00:00', '2021-11-30 20:15:00');

CREATE TABLE `participant` (
  `id` int(4) NOT NULL,
  `full_name` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `birthplace` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `birthdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

INSERT INTO `participant` (`id`, `full_name`, `email`, `birthplace`, `birthdate`) VALUES
(1, 'Faragó Ádám', 'farago.Adam@dzsmail.com', 'Fábiánsebestyén', '1981-09-15'),
(2, 'Barna Krisztina', 'barna.krisztina@dzsmail.com', 'Sajószentpéter', '1997-06-20'),
(3, 'Biró Ilona', 'biro.ilona@dzsmail.com', 'Enying', '1976-08-11'),
(4, 'Pintér Katalin Zsuzsanna', 'pinter.katalin.zsuzsanna@dzsmail.com', 'Zselickisfalud', '1962-02-11'),
(5, 'Mészáros Alex', 'meszaros.alex@dzsmail.com', 'Hencida', '1992-05-11'),
(6, 'Somogyi Zsigmond', 'somogyi.zsigmond@dzsmail.com', 'Tiszakarád', '1972-03-22'),
(7, 'Papp Dorottya', 'papp.dorottya@dzsmail.com', 'Rédics', '2001-07-01'),
(8, 'Magyar Ernő', 'magyar.erno@dzsmail.com', 'Kisgörbő', '1998-10-22'),
(9, 'Máté Nándor', 'mate.nandor@dzsmail.com', 'Jászszentlászló', '1989-05-19'),
(10, 'László Klaudia Katalin', 'laszlo.klaudia.katalin@dzsmail.com', 'Dunasziget', '1997-03-03'),
(11, 'Katona Richárd', 'katona.richard@dzsmail.com', 'Komlódtótfalu', '1970-03-16'),
(12, 'Szőke Soma', 'szoke.soma@dzsmail.com', 'Pénzesgyőr', '1977-11-09'),
(13, 'Barna Mária', 'barna.maria@dzsmail.com', 'Marcali', '1969-06-17'),
(14, 'Biró Gergő', 'biro.gergo@dzsmail.com', 'Rákócziújfalu', '1996-11-30'),
(15, 'Mészáros Magdolna', 'meszaros.magdolna@dzsmail.com', 'Rinyakovácsi', '1993-09-25'),
(16, 'Bognár Bernadett', 'bognar.bernadett@dzsmail.com', 'Kallósd', '1987-05-25'),
(17, 'Lengyel Viktor Endre', 'lengyel.viktor.endre@dzsmail.com', 'Ságújfalu', '2000-12-27'),
(18, 'Budai István', 'budai.istvan@dzsmail.com', 'Petneháza', '1971-06-01'),
(19, 'Szűcs Brigitta', 'szucs.brigitta@dzsmail.com', 'Romonya', '1991-05-31'),
(20, 'Oláh Soma', 'olah.soma@dzsmail.com', 'Zánka', '1972-11-27'),
(21, 'Pap Lili', 'pap.lili@dzsmail.com', 'Istenmezeje', '1998-05-10'),
(22, 'Juhász Viktória', 'juhasz.viktoria@dzsmail.com', 'Szentkozmadombja', '2004-03-18'),
(23, 'Rácz Rita', 'racz.rita@dzsmail.com', 'Mezőcsát', '1984-09-30'),
(24, 'Kelemen Vilmos', 'kelemen.vilmos@dzsmail.com', 'Bátorliget', '1980-05-02'),
(25, 'Gál Gabriella', 'gal.gabriella@dzsmail.com', 'Szentjakabfa', '1987-10-16'),
(26, 'Bognár Judit', 'bognar.judit@dzsmail.com', 'Szemere', '1964-08-02'),
(27, 'Fehér Ilona Gizella', 'feher.ilona.gizella@dzsmail.com', 'Erdősmárok', '1966-02-09'),
(28, 'Pásztor Ilona', 'pasztor.ilona@dzsmail.com', 'Nemesládony', '2004-11-10'),
(29, 'Molnár Dezső', 'molnar.dezso@dzsmail.com', 'Kisgörbő', '1990-11-15'),
(30, 'Orsós Bendegúz Noel', 'orsos.bendeguz.noel@dzsmail.com', 'Szigetvár', '1989-11-07'),
(31, 'Szalai Boglárka', 'szalai.boglarka@dzsmail.com', 'Pethőhenye', '1990-08-13'),
(32, 'Lengyel Borbála', 'lengyel.borbala@dzsmail.com', 'Demecser', '1987-01-09'),
(33, 'Kis Anita', 'kis.anita@dzsmail.com', 'Piliscsaba', '1977-02-18'),
(34, 'Illés József', 'illes.jozsef@dzsmail.com', 'Csengersima', '1971-08-19'),
(35, 'Rácz Ferenc', 'racz.ferenc@dzsmail.com', 'Vekerd', '1983-09-07'),
(36, 'Dudás Vince', 'dudas.vince@dzsmail.com', 'Pázmánd', '2005-08-18'),
(37, 'Mezei Gábor', 'mezei.gabor@dzsmail.com', 'Szihalom', '1997-04-27'),
(38, 'Molnár Vilmos', 'molnar.vilmos@dzsmail.com', 'Bálványos', '1968-07-08'),
(39, 'Gáspár Ibolya Fanni', 'gaspar.ibolya.fanni@dzsmail.com', 'Újlengyel', '1983-03-14'),
(40, 'Veres Anikó', 'veres.aniko@dzsmail.com', 'Hévíz', '1975-10-14'),
(41, 'Fazekas Róbert', 'fazekas.robert@dzsmail.com', 'Csömör', '1973-08-29'),
(42, 'Fehér Soma Attila', 'feher.soma.attila@dzsmail.com', 'Magosliget', '1981-02-11'),
(43, 'Takács Viktória', 'takacs.viktoria@dzsmail.com', 'Regenye', '1976-10-23'),
(44, 'Bodnár Noel', 'bodnar.noel@dzsmail.com', 'Baktakék', '1982-08-19'),
(45, 'Gulyás Erika', 'gulyas.erika@dzsmail.com', 'Nagyszokoly', '1988-02-07'),
(46, 'Fülöp Szilveszter', 'fulop.szilveszter@dzsmail.com', 'Dióskál', '1970-12-28'),
(47, 'Lakatos Géza', 'lakatos.geza@dzsmail.com', 'Zalaerdőd', '1995-12-01'),
(48, 'Szücs Nikoletta Márta', 'szucs.nikoletta.marta@dzsmail.com', 'Bonyhádvarasd', '1976-01-11'),
(49, 'Boros Anett', 'boros.anett@dzsmail.com', 'Karácsond', '1984-11-16'),
(50, 'Hegedűs Bendegúz', 'hegedus.bendeguz@dzsmail.com', 'Ófehértó', '1964-02-08'),
(51, 'Gáspár Beáta', 'gaspar.beata@dzsmail.com', 'Badacsonytomaj', '1987-12-03'),
(52, 'Deák Erzsébet', 'deak.erzsebet@dzsmail.com', 'Szekszárd', '1993-08-21'),
(53, 'Farkas Krisztofer', 'farkas.krisztofer@dzsmail.com', 'Csibrák', '1978-11-03'),
(54, 'Balázs Katalin', 'balazs.katalin@dzsmail.com', 'Sobor', '1975-02-04'),
(55, 'Farkas Noel', 'farkas.noel@dzsmail.com', 'Aranyosgadány', '1965-04-26'),
(56, 'Berki Beatrix', 'berki.beatrix@dzsmail.com', 'Úri', '1992-11-18'),
(57, 'Somogyi Zsuzsanna', 'somogyi.zsuzsanna@dzsmail.com', 'Fertőhomok', '1982-03-08');

CREATE TABLE `part_course` (
  `id` int(5) NOT NULL,
  `participant` int(4) NOT NULL,
  `course` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

INSERT INTO `part_course` (`id`, `participant`, `course`) VALUES
(1, 1, 3),
(2, 2, 1),
(3, 3, 2),
(4, 4, 1),
(5, 4, 2),
(6, 5, 1),
(7, 6, 3),
(8, 7, 1),
(10, 9, 3),
(11, 10, 2),
(12, 11, 3),
(13, 12, 1),
(14, 13, 1),
(15, 14, 1),
(16, 15, 2),
(17, 16, 1),
(18, 17, 2),
(19, 18, 2),
(20, 18, 3),
(21, 19, 3),
(22, 20, 1),
(23, 21, 1),
(24, 22, 2),
(25, 23, 2),
(26, 24, 2),
(27, 25, 1),
(28, 25, 3),
(29, 26, 1),
(30, 27, 3),
(31, 28, 1),
(32, 29, 2),
(33, 30, 1),
(34, 31, 2),
(35, 32, 3),
(36, 33, 2),
(37, 34, 2),
(38, 34, 1),
(39, 35, 2),
(40, 36, 1),
(41, 37, 3),
(42, 38, 3),
(43, 39, 1),
(44, 40, 1),
(45, 41, 2),
(46, 42, 1),
(47, 43, 1),
(48, 3, 5),
(49, 4, 5),
(50, 10, 5),
(51, 15, 5),
(52, 17, 5),
(53, 22, 5),
(54, 23, 5),
(55, 24, 5),
(56, 29, 5),
(57, 34, 5),
(58, 35, 5),
(59, 41, 5),
(60, 44, 6),
(61, 45, 6),
(62, 46, 6),
(63, 47, 6),
(64, 48, 6),
(65, 49, 6),
(66, 50, 6),
(67, 51, 6),
(68, 52, 6),
(69, 53, 6),
(70, 54, 6),
(71, 55, 6),
(72, 56, 6),
(73, 57, 6);

CREATE TABLE `schedule` (
  `id` int(3) NOT NULL,
  `course` int(3) NOT NULL,
  `start_day` int(1) NOT NULL,
  `start_time` time NOT NULL,
  `end_day` int(1) NOT NULL,
  `end_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

INSERT INTO `schedule` (`id`, `course`, `start_day`, `start_time`, `end_day`, `end_time`) VALUES
(1, 1, 1, '17:00:00', 1, '20:15:00'),
(2, 1, 3, '17:00:00', 3, '20:15:00'),
(3, 2, 1, '09:00:00', 1, '12:15:00'),
(4, 2, 3, '09:00:00', 3, '12:15:00'),
(5, 3, 6, '09:00:00', 6, '16:00:00'),
(10, 5, 2, '09:00:00', 2, '12:15:00'),
(11, 5, 4, '09:00:00', 4, '12:15:00'),
(12, 6, 2, '17:00:00', 2, '20:15:00'),
(13, 6, 4, '17:00:00', 4, '20:15:00');

ALTER TABLE `breaktime`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `occasion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_course3` (`course`);

ALTER TABLE `participant`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `part_course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_participant` (`participant`),
  ADD KEY `FK_course` (`course`);

ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_course2` (`course`);

ALTER TABLE `breaktime`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `course`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `occasion`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

ALTER TABLE `participant`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

ALTER TABLE `part_course`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

ALTER TABLE `schedule`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

ALTER TABLE `occasion`
  ADD CONSTRAINT `FK_course3` FOREIGN KEY (`course`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `part_course`
  ADD CONSTRAINT `FK_course` FOREIGN KEY (`course`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_participant` FOREIGN KEY (`participant`) REFERENCES `participant` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `schedule`
  ADD CONSTRAINT `FK_course2` FOREIGN KEY (`course`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;
