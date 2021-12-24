<?php
$route = $_GET['route'];
require 'templates/header.php';

switch($route) {
    case '':
        require 'templates/main.php';
        break;
    case 'cart':
        require 'templates/cart.php';
        break;
    case 'menu':
        require 'templates/main1.php';
        break;
    case 'connection':
        require 'connection.php';
        break;
               
}

require 'templates/footer.php';