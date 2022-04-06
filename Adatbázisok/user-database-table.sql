START TRANSACTION;

CREATE TABLE `user` (
  `id` int(2) NOT NULL,
  `username` varchar(10) COLLATE utf8_hungarian_ci NOT NULL,
  `hash_salt` varchar(10) COLLATE utf8_hungarian_ci NOT NULL,
  `hash_pwd` varchar(128) COLLATE utf8_hungarian_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

INSERT INTO `user` (`id`, `username`, `hash_salt`, `hash_pwd`, `email`) VALUES
(1, 'suleszabi', 'kj5eoz4dwb', 'e23d478a551ff5cabef3b2e6d443382589dbf5c327f18668ae1b08e9a72dd7d19c4cf881c06b139232311b3f19feed44e3584b894dbd9870ebe3614cf28047a0', 'suleszabi@gmail.com'),
(2, 'testuser', 'xiw12lui80', 'ced6be87e7156377755db43acf50f18bedc4fa5ab697c24ed9693707fa2c8d214f6170b926fa26f4acc5da8b4baa007d16d044f8a1692c4b7e5882c922b96d5b', 'test@test21.hu');

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `user`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

COMMIT;
