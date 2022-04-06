<?php

    class ParticipantManager {
        private $dm;
        private $sm;

        public function __construct() {
            $this->dm = new DatabaseManager(DB_TEAM_ADMIN_HOST, DB_TEAM_ADMIN_NAME, DB_TEAM_ADMIN_USER, DB_TEAM_ADMIN_PWD);
            $this->sm = new StringManager();
        }

        public function getParticipants(string $idSearch, string $nameSearch, string $emailSearch, string $birthplaceSearch, string $birthdateSearch) {
            return $this->dm->executeQuery(
                "SELECT * FROM participant WHERE id LIKE ? AND full_name LIKE ? AND email LIKE ? AND birthplace LIKE ? AND birthdate LIKE ? ORDER BY id DESC",
                array("%$idSearch%", "%$nameSearch%", "%$emailSearch%", "%$birthplaceSearch%", "%$birthdateSearch%")
            );
        }

        public function getParticipantData(int $participantId) {
            return $this->dm->executeQuery(
                "SELECT full_name, email, birthplace, birthdate FROM participant WHERE id=?",
                array($participantId),
                false
            );
        }

        public function getParticipantName(int $participantId) {
            return $this->dm->executeQuery(
                "SELECT full_name FROM participant WHERE id=?",
                array($participantId),
                false
            );
        }

        public function getParticipantsForCourse(int $courseId) {
            return $this->dm->executeQuery(
                "SELECT participant.id, participant.full_name, participant.email, participant.birthplace, participant.birthdate
                FROM participant INNER JOIN part_course ON participant.id=part_course.participant
                WHERE part_course.course=?
                ORDER BY participant.full_name ASC",
                array($courseId)
            );
        }

        public function createNewParticipant(string $newName, string $newEmail, string $newBirthplace, string $newBirthdate) {
            $result = false;
            if(
                $this->sm->stringLengthCheck($newName, 6, 40) &&
                $this->sm->emailCheck($newEmail) &&
                $this->sm->stringLengthCheck($newEmail, 1, 50) &&
                $this->sm->stringLengthCheck($newBirthplace, 2, 20) &&
                $this->sm->stringLengthCheck($newBirthdate, 10, 10)
            ) {
                if($this->dm->executeModifierCommand(
                    "INSERT INTO participant(full_name, email, birthplace, birthdate) VALUES (?,?,?,?)",
                    array($newName, $newEmail, $newBirthplace, $newBirthdate)
                )) {
                    $result = true;
                }
            }
            return $result;
        }

        public function deleteParticipant(int $participantId) {
            return ($this->dm->executeModifierCommand(
                "DELETE FROM participant WHERE id=?",
                array($participantId)
            ));
        }

        public function changeParticipantData(int $participantId, string $newName, string $newEmail, string $newBirthplace, string $newBirthdate) {
            $result = false;
            if(
                $this->sm->stringLengthCheck($newName, 6, 40) &&
                $this->sm->emailCheck($newEmail) &&
                $this->sm->stringLengthCheck($newEmail, 1, 50) &&
                $this->sm->stringLengthCheck($newBirthplace, 2, 20) &&
                $this->sm->stringLengthCheck($newBirthdate, 10, 10)
            ) {
                if($this->dm->executeModifierCommand(
                    "UPDATE participant SET full_name=?, email=?, birthplace=?, birthdate=? WHERE id=?",
                    array($newName, $newEmail, $newBirthplace, $newBirthdate, $participantId)
                )) {
                    $result = true;
                }
            }
            return $result;
        }

        public function createPartCourseRelation(int $courseId, int $participantId) {
            return ($this->dm->executeModifierCommand(
                "INSERT INTO part_course(course, participant) VALUES (?,?)",
                array($courseId, $participantId)
            ));
        }
    }

?>