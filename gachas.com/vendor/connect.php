<?php
error_reporting(-1);
try {
    $connect = mysqli_connect('localhost', 'b94314_dbuser', '>^d=UABHG*PH@#f<', 'b94314_db', '21');
    } catch (Exception $e) {
    print $e->getMessage();
    }    



   // if (!$connect) {
     //   die('Error connect to DataBase');
    //}
    

    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
        }
        
        printf("Host information: %s\n", $mysqli->host_info);
        
        /* close connection */
        $mysqli->close();

?>