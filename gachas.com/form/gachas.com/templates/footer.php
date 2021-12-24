______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

<footer>
                <br><br><br>
                <div class="spisok-footer">
                <ul>
                  <li style="font-family: Verdana, Geneva, Tahoma, sans-serif;color:white"><a href="">О&nbspнас</a></li>
                  <li style="font-family: Verdana, Geneva, Tahoma, sans-serif;color:white"><a href="">Контакты</a></li>
                  <li style="font-family: Verdana, Geneva, Tahoma, sans-serif;color:white"><a href="">Обратная свзяь</a></li>
                  <li style="font-family: Verdana, Geneva, Tahoma, sans-serif;color:white"><a href="">Команда</a></li>
                </ul></div>
                <div id="socialmedia"></div>
                <div class="contact-center"><p style="color:white">Контакт-центр: 8 (928) 777-73-23</p></div>
                <div class="copyright"><p style="color:white">&copy;&nbsp;"ООО" Gachas</p></div>
              </footer>
              <br>
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<?php
    switch($route) {
      case '':
        echo '<script src="main.js"></script>';
        
        break;
      case 'menu':
        echo '<script src="time.js"></script>';
        break;
      case 'menu1':
        echo '<script src="time.js"></script>';
        break;
      case 'menu2':
          echo '<script src="time.js"></script>';
          break;
      case 'menu3':
          echo '<script src="time.js"></script>';
          break;          
      case 'cart':
        echo '<script src="cart.js"></script>';
        break;
      case 'connection':
        echo '<script src="time.js"></script>';
        break;
        
}
?>
    </body>
    </html>