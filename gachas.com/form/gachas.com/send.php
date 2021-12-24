<?php
//получение данных с формы


//обратока данных

$name = htmlspecialchars($_POST["name"]);        //преобразование символов в сущности 
$surname = htmlspecialchars($_POST["surname"]);
$email = htmlspecialchars($_POST["email"]);
$phone = htmlspecialchars($_POST["phone"]);
$question = htmlspecialchars($_POST["question"]);
 
$name = urldecode($_POST["name"]);        //декодировка урл
$surname = urldecode($_POST["surname"]);
$email = urldecode($_POST["email"]);
$phone = urldecode($_POST["phone"]);
$question = urldecode($_POST["question"]);

$name = trim($_POST["name"]);        //удаление пробелов
$surname = trim($_POST["surname"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$question = trim($_POST["question"]);


// отправляем данные

if(mail("b94314@b94314.hostru10.fornex.host",
    "Новое письмо с вопросом",
    "Имя: ".$name."\n".
    "Фамилия: ".$surname."\n".
    "Эл. почта: ".$email."\n".
    "Телефон: ".$phone."\n".
    "Вопрос: ".$question."\n",
    "From: no-reply@gachas.com \r\n")
    ) {
        echo ('Ваш вопрос отправлен!');
    }

    else{
        echo ('Ошибка! Проверьте отправленные данные');
    }
/*
    $to      = 'b94314@b94314.hostru10.fornex.host';
    $subject = 'the subject';
    $message = $surname;
    $headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    
    mail($to, $subject, $message, $headers);
*/
?>