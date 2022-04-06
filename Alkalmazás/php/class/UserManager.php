<?php

    class UserManager {
        private $dm;
        private $sm;

        public function __construct() {
            $this->dm = new DatabaseManager(DB_USER_MG_HOST, DB_USER_MG_NAME, DB_USER_MG_USER, DB_USER_MG_PWD);
            $this->sm = new StringManager();
        }

        public function login(string $username, string $password) {
            $loginData = $this->dm->executeQuery(
                "SELECT id, hash_salt, hash_pwd FROM user WHERE username LIKE ?",
                array($username),
                false
            );
            if(isset($loginData['hash_pwd']) && $loginData['hash_pwd'] == $this->sm->encryptPassword($password, $loginData['hash_salt'])) {
                $_SESSION['userId'] = $loginData['id'];
                $result = true;
            } else {
                $result = false;
            }
            return $result;
        }

        public function loginCheck() {
            return (isset($_SESSION['userId']));
        }

        public function logout() {
            if(isset($_SESSION['userId'])) {
                unset($_SESSION['userId']);
                return (!isset($_SESSION['userId']));
            } else {
                return false;
            }
        }

        public function getUsername() {
            $result = $this->dm->executeQuery(
                "SELECT username FROM user WHERE id LIKE ?",
                array($_SESSION['userId']),
                false
            );
            return $result['username'];
        }

        public function createNewUser(string $username, string $email, string $password) {
            if($this->loginCheck()) {
                $result = false;
                if(
                    $this->sm->stringLengthCheck($username, 5, 10) &&
                    $this->sm->stringLengthCheck($email, 6, 50) &&
                    $this->sm->emailCheck($email) &&
                    $this->sm->passwordCheck($password)
                ) {
                    $usernameCheck = $this->dm->executeQuery(
                        "SELECT COUNT(*) AS userQty FROM user WHERE username LIKE ?",
                        array($username),
                        false
                    );
                    $emailCheck = $this->dm->executeQuery(
                        "SELECT COUNT(*) AS userQty FROM user WHERE email LIKE ?",
                        array($email),
                        false
                    );
                    if($usernameCheck['userQty'] == 0 && $emailCheck['userQty'] == 0) {
                        $hash_salt = $this->sm->generateRandomString(10);
                        $hash_pwd = $this->sm->encryptPassword($password, $hash_salt);
                        if(
                            $this->dm->executeModifierCommand(
                            "INSERT INTO user(username, hash_salt, hash_pwd, email) VALUES (?,?,?,?)",
                            array($username, $hash_salt, $hash_pwd, $email)
                            )
                        ) {
                            $result = true;
                        }
                    }
                }
            }
            return $result;
        }

        public function changePassword(string $oldPassword, string $newPassword) {
            $result = false;
            if($this->loginCheck()) {
                $oldPwdData = $this->dm->executeQuery(
                    "SELECT hash_salt, hash_pwd FROM user WHERE id=?",
                    array($_SESSION['userId']),
                    false
                );
                if(
                    $oldPwdData['hash_pwd'] == $this->sm->encryptPassword($oldPassword, $oldPwdData['hash_salt']) &&
                    $this->sm->passwordCheck($newPassword)
                ) {
                    $hash_salt = $this->sm->generateRandomString(10);
                    $hash_pwd = $this->sm->encryptPassword($newPassword, $hash_salt);
                    if(
                        $this->dm->executeModifierCommand(
                            "UPDATE user SET hash_salt=?, hash_pwd=? WHERE id=?",
                            array($hash_salt, $hash_pwd, $_SESSION['userId'])
                        )
                    ) {
                        $result = true;
                    }
                }
            }
            return $result;
        }

        public function getUsers() {
            return $this->dm->executeQuery("SELECT id, username, email FROM user WHERE id<>? ORDER BY id DESC", array($_SESSION['userId']));
        }

        public function deleteUser(int $userId) {
            return $this->dm->executeModifierCommand("DELETE FROM user WHERE id=?", array($userId));
        }

    }

?>