<?php
    require_once './consts.php';
    require_once './class/PHPMailer/PHPMailer.php';
    require_once './class/PHPMailer/SMTP.php';
    require_once './class/PHPMailer/Exception.php';
    require_once './class/MailManager.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $mm = new MailManager();

    $mm->sendMail(array('suleszabi@gmail.com'), 'Teszt tárgy', 'Teszt üzenet.');

?>