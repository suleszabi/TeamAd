START TRANSACTION;

CREATE TABLE `breaktime` (
  `id` int(2) NOT NULL,
  `name` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `course` (
  `id` int(3) NOT NULL,
  `name` varchar(40) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `occasion` (
  `id` int(4) NOT NULL,
  `course` int(3) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `participant` (
  `id` int(4) NOT NULL,
  `full_name` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `birthplace` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `birthdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `part_course` (
  `id` int(5) NOT NULL,
  `participant` int(4) NOT NULL,
  `course` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

CREATE TABLE `schedule` (
  `id` int(3) NOT NULL,
  `course` int(3) NOT NULL,
  `start_day` int(1) NOT NULL,
  `start_time` time NOT NULL,
  `end_day` int(1) NOT NULL,
  `end_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

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
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT;

ALTER TABLE `course`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT;

ALTER TABLE `occasion`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

ALTER TABLE `participant`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

ALTER TABLE `part_course`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

ALTER TABLE `schedule`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT;

ALTER TABLE `occasion`
  ADD CONSTRAINT `FK_course3` FOREIGN KEY (`course`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `part_course`
  ADD CONSTRAINT `FK_course` FOREIGN KEY (`course`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_participant` FOREIGN KEY (`participant`) REFERENCES `participant` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `schedule`
  ADD CONSTRAINT `FK_course2` FOREIGN KEY (`course`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;
