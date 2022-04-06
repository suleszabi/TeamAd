<?php

    class RequestManager {
        private $um;
        private $cm;
        private $bm;
        private $pm;
        private $mm;
        private static $causes = array('loginCheck', 'login', 'logout', 'getUsername', 'createNewUser', 'getUsers', 'deleteUser', 'changePassword', 'getCourses', 'getCoursesForParticipant', 'createNewCourse', 'deleteCourse', 'getCourseData', 'getCourseName', 'changeCourseName', 'getSchedules', 'createNewSchedule', 'deleteSchedule', 'getCourseOccasions', 'createOccasions', 'createNewBreaktime', 'getBreaktimes', 'deleteBreaktime', 'getParticipants', 'createNewParticipant', 'deleteParticipant', 'getparticipantData', 'getParticipantName', 'changeParticipantData', 'getParticipantsForCourse', 'createPartCourseRelation', 'deletePartCourse', 'sendMailToParticipant', 'sendMailToCourse', 'getOccasionsForWeek', 'getBreaktimesForWeek');

        public function __construct() {
            $this->um = new UserManager();
            $this->cm = new CourseManager();
            $this->bm = new BreaktimeManager();
            $this->pm = new ParticipantManager();
            $this->mm = new MailManager();
            if(isset($_POST['requestCause']) && in_array($_POST['requestCause'], self::$causes)) {
                switch($_POST['requestCause']) {
                    case 'loginCheck':
                        $this->loginCheck();
                    break;
                    case 'login':
                        $this->login($_POST['username'], $_POST['password']);
                    break;
                    case 'logout':
                        $this->logout();
                    break;
                    case 'getUsername':
                        $this->getUsername();
                    break;
                    case 'createNewUser':
                        $this->createNewUser($_POST['username'], $_POST['email'], $_POST['password']);
                    break;
                    case 'getUsers':
                        $this->getUsers();
                    break;
                    case 'deleteUser':
                        $this->deleteUser($_POST['userId']);
                    break;
                    case 'changePassword':
                        $this->changePassword($_POST['oldPassword'], $_POST['newPassword']);
                    break;
                    case 'getCourses':
                        $this->getCourses();
                    break;
                    case 'getCoursesForParticipant':
                        $this->getCoursesForParticipant($_POST['participantId']);
                    break;
                    case 'createNewCourse':
                        $this->createNewCourse($_POST['courseName']);
                    break;
                    case 'deleteCourse':
                        $this->deleteCourse($_POST['courseId']);
                    break;
                    case 'getCourseData':
                        $this->getCourseData($_POST['courseId']);
                    break;
                    case 'getCourseName':
                        $this->getCourseName($_POST['courseId']);
                    break;
                    case 'changeCourseName':
                        $this->changeCourseName($_POST['courseId'], $_POST['newCourseName']);
                    break;
                    case 'getSchedules':
                        $this->getSchedules($_POST['courseId']);
                    break;
                    case 'createNewSchedule':
                        $this->createNewSchedule($_POST['courseId'], $_POST['start_day'], $_POST['start_time'], $_POST['end_day'], $_POST['end_time']);
                    break;
                    case 'deleteSchedule':
                        $this->deleteSchedule($_POST['scheduleId']);
                    break;
                    case 'getCourseOccasions':
                        $this->getCourseOccasions($_POST['courseId']);
                    break;
                    case 'createOccasions':
                        $this->createOccasions($_POST['courseId'], $_POST['startDate'], $_POST['newOccasionCount']);
                    break;
                    case 'createNewBreaktime':
                        $this->createNewBreaktime($_POST['breaktimeName'], $_POST['start'], $_POST['end']);
                    break;
                    case 'getBreaktimes':
                        $this->getBreaktimes();
                    break;
                    case 'deleteBreaktime':
                        $this->deleteBreaktime($_POST['breaktimeId']);
                    break;
                    case 'deleteParticipant':
                        $this->deleteParticipant($_POST['participantId']);
                    break;
                    case 'getParticipants':
                        $this->getParticipants($_POST['idSearch'], $_POST['nameSearch'], $_POST['emailSearch'], $_POST['birthplaceSearch'], $_POST['birthdateSearch']);
                    break;
                    case 'getParticipantsForCourse':
                        $this->getParticipantsForCourse($_POST['courseId']);
                    break;
                    case 'createNewParticipant':
                        $this->createNewParticipant($_POST['name'], $_POST['email'], $_POST['birthplace'], $_POST['birthdate']);
                    break;
                    case 'getparticipantData':
                        $this->getParticipantData($_POST['participantId']);
                    break;
                    case 'getParticipantName':
                        $this->getParticipantName($_POST['participantId']);
                    break;
                    case 'changeParticipantData':
                        $this->changeParticipantData($_POST['participantId'], $_POST['name'], $_POST['email'], $_POST['birthplace'], $_POST['birthdate']);
                    break;
                    case 'createPartCourseRelation':
                        $this->createPartCourseRelation($_POST['courseId'], $_POST['participantId']);
                    break;
                    case 'deletePartCourse':
                        $this->deletePartCourse($_POST['courseId'], $_POST['participantId']);
                    break;
                    case 'sendMailToParticipant':
                        $this->sendMailToParticipant($_POST['id'], $_POST['subject'], $_POST['body']);
                    break;
                    case 'sendMailToCourse':
                        $this->sendMailToCourse($_POST['id'], $_POST['subject'], $_POST['body']);
                    break;
                    case 'getOccasionsForWeek':
                        $this->getOccasionsForWeek($_POST['weekStart'], $_POST['weekEnd']);
                    break;
                    case 'getBreaktimesForWeek':
                        $this->getBreaktimesForWeek($_POST['weekStart'], $_POST['weekEnd']);
                    break;
                }
            }
        }

        private function loginCheck() {
            echo ($this->um->loginCheck()) ? json_encode(['loginState' => true]) : json_encode(['loginState' => false]);
        }

        private function login($username, $password) {
            echo ($this->um->login($username, $password)) ? json_encode(['login' => true]) : json_encode(['login' => false]);
        }

        private function logout() {
            echo ($this->um->logout()) ? json_encode(['logout' => true]) : json_encode(['logout' => false]);
        }

        private function getUsername() {
            if($this->um->loginCheck()) {
                $username = $this->um->getUsername();
                echo json_encode(['username' => $username]);
            }
        }

        private function createNewUser($username, $email, $password) {
            if($this->um->loginCheck()) {
                echo ($this->um->createNewUser($username, $email, $password)) ? json_encode(['createNewUser' => true]) : json_encode(['createNewUser' => false]);
            }
        }

        private function getUsers() {
            if($this->um->loginCheck()) {
                echo json_encode($this->um->getUsers());
            }
        }

        private function deleteUser(int $userId) {
            if($this->um->loginCheck()) {
                echo ($this->um->deleteUser($userId)) ? json_encode(['deleteUser' => true]) : json_encode(['deleteUser' => false]);
            }
        }

        private function changePassword(string $oldPassword, string $newPassword) {
            if($this->um->loginCheck()) {
                echo ($this->um->changePassword($oldPassword, $newPassword)) ? json_encode(['changePassword' => true]) : json_encode(['changePassword' => false]);
            }
        }

        private function getCourses() {
            if($this->um->loginCheck()) {
                echo json_encode($this->cm->getCourses());
            }
        }

        private function getCoursesForParticipant(int $participantId) {
            if($this->um->loginCheck()) {
                echo json_encode($this->cm->getCoursesForParticipant($participantId));
            }
        }

        private function createNewCourse(string $courseName) {
            if($this->um->loginCheck()) {
                echo ($this->cm->createNewCourse($courseName)) ? json_encode(['createNewCourse' => true]) : json_encode(['createNewCourse' => false]);
            }
        }

        private function deleteCourse(int $courseId) {
            if($this->um->loginCheck()) {
                echo ($this->cm->deleteCourse($courseId)) ? json_encode(['deleteCourse' => true]) : json_encode(['deleteCourse' => false]);
            }
        }
        
        private function getCourseData(int $courseId) {
            if($this->um->loginCheck()) {
                echo json_encode($this->cm->getCourseData($courseId));
            }
        }

        private function getCourseName(int $courseId) {
            if($this->um->loginCheck()) {
                echo json_encode($this->cm->getCourseName($courseId));
            }
        }

        private function changeCourseName(int $courseId, string $newCourseName) {
            if($this->um->loginCheck()) {
                echo ($this->cm->changeCourseName($courseId, $newCourseName)) ? json_encode(['changeCourseName' => true]) : json_encode(['changeCourseName' => false]);
            }
        }

        private function getSchedules(int $courseId) {
            if($this->um->loginCheck()) {
                echo json_encode($this->cm->getSchedules($courseId));
            }
        }

        private function createNewSchedule(int $courseId, int $start_day, string $start_time, int $end_day, string $end_time) {
            if($this->um->loginCheck()) {
                echo ($this->cm->createNewSchedule($courseId, $start_day, $start_time, $end_day, $end_time)) ? json_encode(['createNewSchedule' => true]) : json_encode(['createNewSchedule' => false]);
            }
        }

        private function deleteSchedule(int $scheduleId) {
            if($this->um->loginCheck()) {
                echo ($this->cm->deleteSchedule($scheduleId)) ? json_encode(['deleteSchedule' => true]) : json_encode(['deleteSchedule' => false]);
            }
        }

        private function getCourseOccasions(int $courseId) {
            if($this->um->loginCheck()) {
                echo json_encode($this->cm->getCourseOccasions($courseId));
            }
        }

        private function createOccasions(int $courseId, string $startDate, int $newOccasionCount) {
            if($this->um->loginCheck()) {
                echo ($this->cm->generateOccasions($courseId, $startDate, $newOccasionCount)) ? json_encode(['createOccasions' => true]) : json_encode(['createOccasions' => false]);
            }
        }

        private function createNewBreaktime(string $breaktimeName, string $start, string $end) {
            if($this->um->loginCheck()) {
                echo ($this->bm->createNewBreaktime($breaktimeName, $start, $end)) ? json_encode(['createNewBreaktime' => true]) : json_encode(['createNewBreaktime' => false]);
            }
        }

        private function getBreaktimes() {
            if($this->um->loginCheck()) {
                echo json_encode($this->bm->getBreakTimes());
            }
        }

        private function deleteBreaktime(int $breaktimeId) {
            if($this->um->loginCheck()) {
                echo ($this->bm->deleteBreaktime($breaktimeId)) ? json_encode(['deleteBreaktime' => true]) : json_encode(['deleteBreaktime' => false]);
            }
        
        }
        
        private function getParticipants(string $idSearch, string $nameSearch, string $emailSearch, string $birthplaceSearch, string $birthdateSearch) {
            if($this->um->loginCheck()) {
                echo json_encode($this->pm->getParticipants($idSearch, $nameSearch, $emailSearch, $birthplaceSearch, $birthdateSearch));
            }
        }

        private function getParticipantsForCourse(int $courseId) {
            if($this->um->loginCheck()) {
                echo json_encode($this->pm->getParticipantsForCourse($courseId));
            }
        }

        private function createNewParticipant(string $name, string $email, string $birthplace, string $birthdate) {
            if($this->um->loginCheck()) {
                echo ($this->pm->createNewParticipant($name, $email, $birthplace, $birthdate)) ? json_encode(['createNewParticipant' => true]) : json_encode(['createNewParticipant' => false]);
            }
        }

        private function deleteParticipant(int $participantId) {
            if($this->um->loginCheck()) {
                echo ($this->pm->deleteParticipant($participantId)) ? json_encode(['deleteParticipant' => true]) : json_encode(['deleteParticipant' => false]);
            }
        }

        private function getParticipantData(int $participantId) {
            if($this->um->loginCheck()) {
                echo json_encode($this->pm->getParticipantData($participantId));
            }
        }

        private function getParticipantName(int $participantId) {
            if($this->um->loginCheck()) {
                echo json_encode($this->pm->getParticipantName($participantId));
            }
        }

        private function changeParticipantData(int $participantId, string $name, string $email, string $birthplace, string $birthdate) {
            if($this->um->loginCheck()) {
                echo ($this->pm->changeParticipantData($participantId, $name, $email, $birthplace, $birthdate)) ? json_encode(['changeParticipantData' => true]) : json_encode(['changeParticipantData' => false]);
            }
        }

        private function createPartCourseRelation(int $courseId, int $participantId) {
            if($this->um->loginCheck()) {
                echo ($this->pm->createPartCourseRelation($courseId, $participantId)) ? json_encode(['createPartCourseRelation' => true]) : json_encode(['createPartCourseRelation' => false]);
            }
        }

        private function deletePartCourse(int $courseId, int $participantId) {
            if($this->um->loginCheck()) {
                echo ($this->cm->deletePartCourse($courseId, $participantId)) ? json_encode(['deletePartCourse' => true]) : json_encode(['deletePartCourse' => false]);
            }
        }

        private function sendMailToParticipant(int $participantId, string $subject, string $body) {
            if($this->um->loginCheck()) {
                echo ($this->mm->sendMailToParticipant($participantId, $subject, $body)) ? json_encode(['sendMail' => true]) : json_encode(['sendMail' => false]);
            }
        }

        private function sendMailToCourse(int $courseId, string $subject, string $body) {
            if($this->um->loginCheck()) {
                echo ($this->mm->sendMailToCourse($courseId, $subject, $body)) ? json_encode(['sendMail' => true]) : json_encode(['sendMail' => false]);
            }
        }

        private function getOccasionsForWeek(string $weekStart, string $weekEnd) {
            if($this->um->loginCheck()) {
                echo json_encode($this->cm->getOccasionsForWeek($weekStart, $weekEnd));
            }
        }

        private function getBreaktimesForWeek(string $weekStart, string $weekEnd) {
            if($this->um->loginCheck()) {
                echo json_encode($this->bm->getBreaktimesForWeek($weekStart, $weekEnd));
            }
        }
    }

?>