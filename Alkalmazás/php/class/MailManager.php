<?php

    class MailManager {
        private $phpMailer;
        private $dm;

        public function __construct() {
            $this->dm = new DatabaseManager(DB_TEAM_ADMIN_HOST, DB_TEAM_ADMIN_NAME, DB_TEAM_ADMIN_USER, DB_TEAM_ADMIN_PWD);
            $this->phpMailer = new PHPMailer\PHPMailer\PHPMailer(false);
            $this->phpMailer->SMTPDebug = 0;
            $this->phpMailer->isSMTP();
            $this->phpMailer->Host = MAIL_HOST;
            $this->phpMailer->SMTPAuth = true;
            $this->phpMailer->Username = MAIL_USERNAME;
            $this->phpMailer->Password = MAIL_PASSWORD;
            $this->phpMailer->SMTPSecure = "tls";
            $this->phpMailer->Port = MAIL_PORT;
            $this->phpMailer->CharSet = "UTF-8";
            $this->phpMailer->setFrom(MAIL_FROM_EMAIL, MAIL_FROM_NAME);
            $this->phpMailer->isHTML(true);
            $this->phpMailer->addAddress(MAIL_FROM_EMAIL, MAIL_FROM_NAME);
        }

        public function sendMailToParticipant(int $participantId, string $subject, string $body) {
            $address = $this->getEmailAddressForParticipant($participantId);
            return ($this->sendMail(array($address), $subject, $body));
        }

        public function sendMailToCourse(int $courseId, string $subject, string $body) {
            $addresses = $this->getEmailAddressesForCourse($courseId);
            return ($this->sendMail($addresses, $subject, $body));
        }

        private function sendMail(array $addresses, string $subject, string $body) {
            foreach($addresses as $address) {
                $this->phpMailer->addBCC($address);
            }
            $this->phpMailer->Subject = $subject;
            $this->phpMailer->Body = '<p>'.nl2br($body).'</p>';
            $this->phpMailer->send();
            return true;
        }

        private function getEmailAddressForParticipant(int $participantId) {
            $result = $this->dm->executeQuery(
                "SELECT email FROM participant WHERE id=?",
                array($participantId),
                false
            );
            return $result['email'];
        }

        private function getEmailAddressesForCourse(int $courseId) {
            $result = $this->dm->executeQuery(
                "SELECT participant.email FROM participant, part_course, course
                WHERE participant.id=part_course.participant AND part_course.course=course.id
                AND course.id=?",
                array($courseId)
            );
            $addresses = array();
            foreach($result as $record) {
                $addresses[] = $record['email'];
            }
            return $addresses;
        }
    }

?>