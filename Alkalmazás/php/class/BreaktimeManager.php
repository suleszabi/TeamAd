<?php
    class BreaktimeManager {
        private $dm;
        private $sm;
        private $tm;

        public function __construct() {
            $this->dm = new DatabaseManager(DB_TEAM_ADMIN_HOST, DB_TEAM_ADMIN_NAME, DB_TEAM_ADMIN_USER, DB_TEAM_ADMIN_PWD);
            $this->sm = new StringManager();
            $this->tm = new TimeManager();
        }

        public function getBreakTimes(string $startDate = '1970-01-01') {
            return $this->dm->executeQuery(
                "SELECT * FROM breaktime WHERE start>=? ORDER BY start DESC",
                array($startDate)
            );
        }

        public function createNewBreaktime(string $breaktimeName, string $start, string $end) {
            $result = false;
            if(
                strlen($breaktimeName) >= 3 &&
                strlen($breaktimeName) <= 40 &&
                (strtotime($start) < strtotime($end))
            ) {
                if($this->dm->executeModifierCommand("INSERT INTO breaktime(name, start, end) VALUES (?,?,?)",
                array($breaktimeName, $start, $end))) {
                    $result = true;
                }
            }
            return $result;
        }

        public function deleteBreaktime(int $breaktimeId) {
            return ($this->dm->executeModifierCommand("DELETE FROM breaktime WHERE id=?",
            array($breaktimeId)));
        }

        public function getBreaktimesForWeek(string $weekStart, string $weekEnd) {
            return $this->dm->executeQuery(
                "SELECT name, start, end FROM breaktime
                WHERE (start BETWEEN ? AND ?) OR (end BETWEEN ? AND ?)
                ORDER BY start ASC",
                array($weekStart, $weekEnd, $weekStart, $weekEnd)
            );
        }
    }

?>