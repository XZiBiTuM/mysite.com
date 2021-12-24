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
        require 'templates/connection.php';
        break;
    case 'contacts':
        require 'templates/contacts.php';
        break;
    case 'about':
        require 'templates/about.php';
        break;
    case 'team':
        require 'templates/team.php';
        break;
    case 'vitaliy-tcal':
        require 'templates/vitaliy-tcal.php';
        break;
    case 'slava-kopilov':
        require 'templates/slava-kopilov.php';
        break;
    case 'nikita-tolkunov':
        require 'templates/nikita-tolkunov.php';
        break; 
    case 'felix-kesov':
        require 'templates/felix-kesov.php';
        break;
    case 'authorization':
        require 'main.php';
        break;    
    case 'register':
        require 'register.php';
        break;   
    // case 'connect':
    //     require '/vendor/connect.php';
    //     break;    
    // case 'logout':
    //     require '/vendor/logout.php';
    //     break;
    // case 'signin':
    //     require '/vendor/signin.php';
    //     break;    
    // case 'signup':
    //     require '/vendor/signup.php';
    //     break;         
}

require 'templates/footer.php';