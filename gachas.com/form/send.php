
<meta http-equiv='refresh' content='10; url=http://thecode.local/'>
<meta charset="UTF-8" />
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$header = $_POST['header'];
$message = $_POST['message'];
$mes = "Имя и фамилия: $name \nE-mail: $email \nТелефон: +7 $header \nВопрос: $message";
$send = mail($email, $header, $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
if ($send == 'true') {echo "Сообщение отправлено";}
else {echo "Ошибка! Проверьте данные еще раз";}
?>