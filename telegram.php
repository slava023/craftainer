<?php

/* https://api.telegram.org/bot5149169345:AAG2mA4VdspgurLZ-BcMi-uWEojxzD1Q6QE/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$data = $_POST['data'];
$numbers = $_POST['user_numbers'];
$token = "5149169345:AAG2mA4VdspgurLZ-BcMi-uWEojxzD1Q6QE";
$chat_id = "-518113185";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Дата брони'=> $data,
  'Количество гостей' => $numbers
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html ');
} else {
  echo "Error";
}
?>