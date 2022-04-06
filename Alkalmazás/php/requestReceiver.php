<?php
    session_start();

    require_once './consts.php';
    require_once './class/DatabaseManager.php';
    require_once './class/StringManager.php';
    require_once './class/UserManager.php';
    require_once './class/TimeManager.php';
    require_once './class/BreaktimeManager.php';
    require_once './class/CourseManager.php';
    require_once './class/ParticipantManager.php';
    require_once './class/PHPMailer/PHPMailer.php';
    require_once './class/PHPMailer/SMTP.php';
    require_once './class/PHPMailer/Exception.php';
    require_once './class/MailManager.php';
    require_once './class/RequestManager.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $rm = new RequestManager();    
?>