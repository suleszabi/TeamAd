<?php

    class StringManager {
        public function generateRandomString(int $charQty = 10) {
            $chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
            $randomString = '';
            for($i=0; $i<$charQty; $i++) {
                $randomString .= $chars[rand(0, strlen($chars)-1)];
            }
            return $randomString;
        }

        public function stringLengthCheck(string $string, int $min, int $max) {
            if(strlen($string) < $min || strlen($string) > $max) {
                $result = false;
            } else {
                $result = true;
            }
            return $result;
        }

        public function emailCheck(string $email) {
            $result = (filter_var($email, FILTER_VALIDATE_EMAIL)) ? true : false;
            return $result;
        }

        public function passwordCheck(string $password) {
            return (
                strlen($password) >= 8 &&
                preg_match("#[0-9]+#", $password) &&
                preg_match("#[a-z]+#", $password) &&
                preg_match("#[A-Z]+#", $password)
            );
        }

        public function encryptPassword(string $password, string $salt) {
            return hash('sha512', md5($password.$salt));
        }
    }

?>