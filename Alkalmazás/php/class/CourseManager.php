<?php

    class CourseManager {
        private $dm;
        private $sm;
        private $tm;
        private $bt;

        public function __construct() {
            $this->dm = new DatabaseManager(DB_TEAM_ADMIN_HOST, DB_TEAM_ADMIN_NAME, DB_TEAM_ADMIN_USER, DB_TEAM_ADMIN_PWD);
            $this->sm = new StringManager();
            $this->tm = new TimeManager();
            $this->bt = new BreaktimeManager();
        }

        public function getCourses() {
            $result = array();
            $dbArray = $this->dm->executeQuery(
                "SELECT course.id, course.name, MIN(occasion.start) AS start, MAX(occasion.end) AS end, COUNT(occasion.id) as occasion_count
                FROM course LEFT JOIN occasion ON course.id=occasion.course
                GROUP BY course.id
                ORDER BY start DESC"
            );
            foreach($dbArray as $dbRecord) {
                $courseData = array();
                $courseData['id'] = $dbRecord['id'];
                $courseData['name'] = $dbRecord['name'];
                $courseData['occasion_count'] = $dbRecord['occasion_count'];
                $courseData['start_date'] = ($dbRecord['start'] != '') ? date('Y-m-d', strtotime($dbRecord['start'])) : '';
                $courseData['start_time'] = ($dbRecord['start'] != '') ? date('H:i', strtotime($dbRecord['start'])) : '';
                $courseData['start_day'] = ($dbRecord['start'] != '') ? date('w', strtotime($dbRecord['start'])) : '';
                $courseData['end_date'] = ($dbRecord['end'] != '') ? date('Y-m-d', strtotime($dbRecord['end'])) : '';
                $courseData['end_time'] = ($dbRecord['end'] != '') ? date('H:i', strtotime($dbRecord['end'])) : '';
                $courseData['end_day'] = ($dbRecord['end'] != '') ? date('w', strtotime($dbRecord['end'])) : '';
                $result[] = $courseData;
            }
            return $result;
        }

        public function getCoursesForParticipant(int $participantId) {
            $result = array();
            $dbArray = $this->dm->executeQuery(
                "SELECT course.id, course.name, MIN(DATE(occasion.start)) AS start_date, MAX(DATE(occasion.end)) AS end_date
                FROM course LEFT JOIN occasion ON course.id=occasion.course
                WHERE course.id NOT IN (SELECT part_course.course FROM part_course WHERE part_course.participant=?)
                GROUP BY course.id
                ORDER BY start_date DESC",
                array($participantId)
            );
            foreach($dbArray as $dbRecord) {
                $courseData = array();
                $courseData['id'] = $dbRecord['id'];
                $courseData['name'] = $dbRecord['name'];
                $courseData['start_date'] = ($dbRecord['start_date'] != '') ? $dbRecord['start_date'] : '';
                $courseData['end_date'] = ($dbRecord['end_date'] != '') ? $dbRecord['end_date'] : '';
                $result[] = $courseData;
            }
            return $result;
        }

        public function createNewCourse(string $courseName) {
            $result = false;
            if($this->sm->stringLengthCheck($courseName, 9, 40)) {
                if($this->dm->executeModifierCommand("INSERT INTO course(name) VALUES (?)", array($courseName))) {
                    $result = true;
                }
            }
            return $result;
        }

        public function deleteCourse(int $courseId) {
            return ($this->dm->executeModifierCommand("DELETE FROM course WHERE id=?", array($courseId))); 
        }

        public function getCourseData(int $courseId) {
            return $this->dm->executeQuery(
                "SELECT course.name, COUNT(occasion.id) AS occasion_count FROM course LEFT JOIN occasion ON course.id=occasion.course WHERE course.id=? GROUP BY course.id",
                array($courseId),
                false
            );
        }

        public function getCourseName(int $courseId) {
            return $this->dm->executeQuery(
                "SELECT name FROM course WHERE course.id=?",
                array($courseId),
                false
            );
        }

        public function changeCourseName(int $courseId, string $newCourseName) {
            $result = false;
            if($this->sm->stringLengthCheck($newCourseName, 9, 40)) {
                if($this->dm->executeModifierCommand("UPDATE course SET name=? WHERE id=?", array($newCourseName, $courseId))) {
                    $result = true;
                }
            }
            return $result;
        }

        public function getSchedules(int $courseId) {
            return $this->dm->executeQuery(
                "SELECT id, start_day, start_time, end_day, end_time FROM schedule WHERE course=? ORDER BY start_day ASC, start_time ASC",
                array($courseId)
            );
        }

        public function createNewSchedule(int $courseId, int $start_day, string $start_time, int $end_day, string $end_time) {
            $start1 = $this->tm->dataToTimestamp($start_day, $start_time);
            $end1 = $this->tm->dataToTimestamp($end_day, $end_time);
            $error = false;
            $result = false;
            if($start1 < $end1) {
                $existingSchedules = $this->getSchedules($courseId);
                foreach($existingSchedules as $schedule) {
                    $start2 = $this->tm->dataToTimestamp($schedule['start_day'], $schedule['start_time']);
                    $end2 = $this->tm->dataToTimestamp($schedule['end_day'], $schedule['end_time']);
                    if(!$this->tm->isTimeIntervalsIndependent($start1, $end1, $start2, $end2)) {
                        $error = true;
                    }
                }
            } else {
                $error = true;
            }
            if(!$error) {
                if($this->dm->executeModifierCommand(
                    "INSERT INTO schedule(course, start_day, start_time, end_day, end_time) VALUES (?,?,?,?,?)",
                    array($courseId, $start_day, $start_time, $end_day, $end_time)
                )) {
                    $result = true;
                }
            }
            return $result;
        }

        public function deleteSchedule(int $scheduleId) {
            return ($this->dm->executeModifierCommand("DELETE FROM schedule WHERE id=?", array($scheduleId)));
        }

        public function getCourseOccasions(int $courseId) {
            $occasions =  $this->dm->executeQuery(
                "SELECT id, start, end FROM occasion WHERE course=?",
                array($courseId)
            );
            $result = array();
            foreach($occasions as $occasionData) {
                $sepArray = array();
                $sepArray['start_date'] = date('Y-m-d', strtotime($occasionData['start']));
                $sepArray['start_time'] = date('H:i', strtotime($occasionData['start']));
                $sepArray['start_day'] = $this->tm->weekDayNumToName(date('w', strtotime($occasionData['start'])));
                $sepArray['end_date'] = date('Y-m-d', strtotime($occasionData['end']));
                $sepArray['end_time'] = date('H:i', strtotime($occasionData['end']));
                $sepArray['end_day'] = $this->tm->weekDayNumToName(date('w', strtotime($occasionData['end'])));
                $result[] = $sepArray;
            }
            return $result;
        }

        public function generateOccasions(int $courseId, string $startDate, int $newOccasionCount) {
            $error = false;
            $schedules = $this->getSchedules($courseId);
            if(is_array($schedules) && count($schedules) > 0) {
                $oneDay = 86400;
                $actualDateUnix = strtotime($startDate);
                $newOccasions = array();
                $breakTimes = $this->bt->getBreakTimes();
                $oldOccasions = $this->getAllOccasionsFromDate($courseId, $startDate);
                while(!$error && count($newOccasions) < $newOccasionCount) {
                    foreach($schedules as $scheduleData) {
                        if($scheduleData['start_day'] == date('w', $actualDateUnix)) {
                            
                            $lengthUnix = 
                            $this->tm->dataToTimestamp($scheduleData['end_day'], $scheduleData['end_time']) -
                            $this->tm->dataToTimestamp($scheduleData['start_day'], $scheduleData['start_time']);

                            $newStartUnix = strtotime(date('Y-m-d', $actualDateUnix).' '.$scheduleData['start_time']);

                            $newEndUnix = $newStartUnix + $lengthUnix;

                            if($this->isOccasionIndependent($breakTimes, $newStartUnix, $newEndUnix)) {
                                if(!$this->isOccasionIndependent($oldOccasions, $newStartUnix, $newEndUnix)) {
                                    $error = true;
                                }
    
                                if(!$error) {
                                    $newOccasionData = array();
                                    $newOccasionData['start'] = date('Y-m-d H:i:s', $newStartUnix);
                                    $newOccasionData['end'] = date('Y-m-d H:i:s', $newEndUnix);
                                    $newOccasions[] = $newOccasionData;
                                }
                            }
                        }
                    }
                    $actualDateUnix += $oneDay;
                }
            } else {
                $error = true;
            }
            if(!$error) {
                if($this->deleteCourseOccasions($courseId)) {
                    foreach($newOccasions as $newOccasionData) {
                        if(!$this->createNewOccasion($courseId, $newOccasionData['start'], $newOccasionData['end'])) {
                            $error = true;
                        }
                    }
                }
            }
            return !$error;
        }

        public function getAllOccasionsFromDate(int $courseId, string $date = '1970-01-01') {
            return $this->dm->executeQuery(
                "SELECT start, end FROM occasion WHERE course<>? AND start>=? ORDER BY start",
                array($courseId, $date)
            );
        }

        public function isOccasionIndependent(array $occasions, int $newStartUnix, int $newEndUnix) {
            $result = true;
            foreach($occasions as $occasionData) {
                $oldStartUnix = strtotime($occasionData['start']);
                $oldEndUnix = strtotime($occasionData['end']);
                if(!$this->tm->isTimeIntervalsIndependent($oldStartUnix, $oldEndUnix, $newStartUnix, $newEndUnix)) {
                    $result = false;
                }
            }
            return $result;
        }

        public function deleteCourseOccasions(int $courseId) {
            return ($this->dm->executeModifierCommand("DELETE FROM occasion WHERE course=?", array($courseId)));
        }

        public function createNewOccasion(int $courseId, string $start, string $end) {
            $result = false;
            $oldOccasions = $this->getAllOccasionsFromDate($courseId, $start);
            if($this->isOccasionIndependent($oldOccasions, strtotime($start), strtotime($end))) {
                if($this->dm->executeModifierCommand(
                    "INSERT INTO occasion(course, start, end) VALUES (?,?,?)",
                    array($courseId, $start, $end))) {
                    $result = true;
                }
            }
            return $result;
        }

        public function deletePartCourse(int $courseId, int $participantId) {
            return ($this->dm->executeModifierCommand("DELETE FROM part_course WHERE course=? AND participant=?", array($courseId, $participantId)));
        }

        public function getOccasionsForWeek(string $weekStart, string $weekEnd) {
            return $this->dm->executeQuery(
                "SELECT course.id, course.name, occasion.start, occasion.end
                FROM course INNER JOIN occasion ON course.id=occasion.course
                WHERE (start BETWEEN ? AND ?) OR (end BETWEEN ? AND ?)
                ORDER BY start ASC",
                array($weekStart, $weekEnd, $weekStart, $weekEnd)
            );
        }
    }

?>