<?php

    class DatabaseManager {
        private $dbHost;
        private $dbName;
        private $dbUser;
        private $dbPwd;
        private $PDO;

        public function __construct($dbHost, $dbName, $dbUser, $dbPwd) {
            $this->dbHost = $dbHost;
            $this->dbName = $dbName;
            $this->dbUser = $dbUser;
            $this->dbPwd = $dbPwd;
            $this->PDO = new \PDO("mysql:dbname=$this->dbName;host=$this->dbHost", $this->dbUser, $this->dbPwd);
            $this->PDO->query("SET NAMES utf8");
        }

        public function executeModifierCommand(string $sqlCommand, array $parameters) {
            $PDOStmt = $this->PDO->prepare($sqlCommand);
            for($i=0;$i<count($parameters);$i++) {
                $PDOStmt->bindParam(($i+1), $parameters[$i]);
            }
            $PDOStmt->execute();
            return ($PDOStmt->errorCode() == '00000');
        }

        public function executeQuery(string $sqlCommand, array $parameters = array(), bool $moreRecord = true) {
            if(empty($parameters)) {
                $PDOStmt = $this->PDO->query($sqlCommand);
            } else {
                $PDOStmt = $this->PDO->prepare($sqlCommand);
                for($i=0;$i<count($parameters);$i++) {
                    $PDOStmt->bindParam(($i+1), $parameters[$i]);
                }
                $PDOStmt->execute();
            }
            $result = ($moreRecord) ? $PDOStmt->fetchAll() : $PDOStmt->fetch();
            return $result;
        }
    }

?>